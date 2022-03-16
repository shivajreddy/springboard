from crypt import methods
import os
from re import L
from flask import Flask, flash, redirect, render_template, session
from forms import SignUpForm, LoginForm 
from User import db, connect_db, User


#! App Conifguration
project_root = os.path.dirname(os.path.realpath('__file__'))
template_path = os.path.join(project_root, 'templates')
static_path = os.path.join(project_root, 'static')
app  = Flask(__name__, template_folder=template_path, static_folder=static_path)
# generate secret in python using: secrets.token_hex(24)
app.config["SECRET_KEY"] = "609b6a63b901ef5b79b85b398b524157385baddf61b7e4a4"

#! DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///stupid_twitter'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
connect_db(app)


#! Routes
@app.route('/')
def route_homePage():
  # db.create_all()
  if 'user_name' not in session:
    return redirect('/login')
    # return render_template('home_page.html')

  return render_template('home_page.html', data=session['user_name'])


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


