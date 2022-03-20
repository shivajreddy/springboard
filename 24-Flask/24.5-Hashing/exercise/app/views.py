from app import app, db
from crypt import methods
from flask import flash, redirect, render_template, session
from .forms.forms import SignUpForm, LoginForm, FeedbackForm
from .models.User import db, User
from .models.Feedback import Feedback



#! Routes
@app.route('/')
def route_homePage():
  db.create_all()
  if 'user_name' not in session:
    return redirect('/login')
    # return render_template('home_page.html')

  # import pdb
  # pdb.set_trace()

  all_data = {
    0 : Feedback.query.all(),
    1 : session['user_name'],
  }

  return render_template('home_page.html', data=all_data)


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


@app.route('/feedback', methods=["GET", "POST"])
def feedback():
  if 'user_name' not in session:
    return redirect('/login')

  form = FeedbackForm()
  if form.validate_on_submit():
    title = form.title.data
    content = form.content.data
    new_feedback = Feedback(title=title, content=content, username=session['user_name'])
    db.session.add(new_feedback)
    db.session.commit()
    return redirect('/')
  
  return render_template('feedback.html', form_data=form)

