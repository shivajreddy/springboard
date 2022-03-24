"""views related to authentication and registration"""

from app import app

from flask import flash, redirect, render_template, session

from ..forms.forms import SignUpForm, LoginForm, FeedbackForm
from ..models.User import db, User
from ..models.Feedback import Feedback

@app.route('/signup', methods=["GET", "POST"])
def route_singup():
  form = SignUpForm()

  # validate form
  if form.validate_on_submit():

    # if existing user redirect to login
    if User.query.filter_by(username=form.username.data).first():
      flash(f"You are already a user Mr.{form.username.data}")
      return redirect('/login')

    usr = User.register(username=form.username.data, form_password=form.password.data)
    flash(f'{usr} created of {usr.username}, {usr.password}')
    session['user_name'] = usr.username
    db.session.add(usr)
    db.session.commit()
    return redirect('/')

  return render_template('signup.html', form_data=form)


@app.route('/login', methods=["GET", "POST"])
def route_login():
  if 'user_name' in session:
    return redirect('/')

  form = LoginForm()

  # validate form
  if form.validate_on_submit():

    # user does not even exist
    if not User.query.filter_by(username=form.username.data).first():
      flash(f"You do not have an account with us Mr.{form.username.data}")
      return redirect('/signup')

    usr = User.authenticate(form.username.data, form.password.data)
    if usr:
      session['user_name'] = usr.username
      flash(f"welcome back {usr.username}")
      return redirect('/')
    flash(f"WRONG PASSWORD, mr.{form.username.data}")
    return redirect('/login')

  return render_template('login.html', form_data=form)


@app.route('/logout')
def logout():
  flash(f"Successfully logged out of {session['user_name']}")
  session.pop('user_name')
  return redirect('/')