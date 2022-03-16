import os
from flask import Flask, make_response, redirect, render_template, flash, request, session
from flask_sqlalchemy import SQLAlchemy
from database import db, connect_db
from User import User
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()


#! App Conifguration
project_root = os.path.dirname(os.path.realpath('__file__'))
template_path = os.path.join(project_root, 'templates')
static_path = os.path.join(project_root, 'static')
app  = Flask(__name__, template_folder=template_path, static_folder=static_path)
app.config["SECRET_KEY"] = "609b6a63b901ef5b79b85b398b524157385baddf61b7e4a4"
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///test_users"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

connect_db(app)

#! Routes
@app.route('/', methods=["GET"])
def route_homePage():
  db.create_all()
  return render_template('home_page.html')


@app.route('/check-user', methods=["POST"])
def check_user():
  # get form responses
  u_name = request.form["username"]
  u_pass = request.form["password"]

  usr = User.authenticate(u_name, u_pass)

  if usr:
    # add the user to the session
    session["u_name"] = u_name
    flash(f"Login succesful: {u_name}, {usr.password}, {u_pass}")
    return redirect ('/cookies')

  flash(f"FAILED authentication: {u_name}, {u_pass}")

  return redirect('/')


@app.route('/cookies')
def cookies_demo():
  # display only if logged in
  if "u_name" not in session:
    return redirect('/')
  sess = [session['u_name']]

  # get cookies
  blue = "blue"
  response = make_response("WTF cookies")
  set_color = response.set_cookie('favcolor', blue)
  my_color = request.cookies.get('favcolor')
  
  return f"{sess}"


@app.route('/clear')
def clear_session():
  if 'u_name' in session:
    session.pop('u_name')
  return redirect('/')