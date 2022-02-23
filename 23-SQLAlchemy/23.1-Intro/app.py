"""Blogly application."""

from flask import Flask, redirect, render_template, request, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User

app = Flask(__name__)

#? PSQL-Alchemy configurations
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

#? app configurations
app.config['SECRET_KEY'] = 'blogly2123'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

# Routes
@app.route('/')
def home_page():
    return render_template('homepage.html')

@app.route('/users')
def users_page():
    users_list = User.query.all()
    return render_template('users.html', users=users_list)

@app.route('/userpage/<int:id>')
def user(id):
    user = User.query.get(id)

    # import pdb
    # pdb.set_trace()
    return render_template('userpage.html', user =user)

@app.route('/create-user', methods=["POST"])
def create_user():
    user_name = request.form['first-name']
    last_name = request.form['last-name']
    image_url = request.form['image-url']
    new_user = User(first_name = user_name, last_name=last_name,image_url=image_url)
    
    #TODO handle same user name errors
    
    db.session.add(new_user)
    db.session.commit()
    return redirect(f'/userpage/{new_user.id}')


#TODO modify users details, delete user button
@app.route('/<username>/edit')
def edit_user(username):
    # query db for the user
    user = User.query.filter_by(first_name = username).first()
    return render_template('edituser.html', user = user)

@app.route('/edit-user/<int:userid>', methods=['POST'])
def editing(userid):
    new_user_fname = request.form['first-name']
    new_user_lname = request.form['last-name'] 
    new_user_url = request.form['image-url']
    user = User.query.filter_by(id=userid).first()
    user.first_name = new_user_fname
    user.last_name = new_user_lname
    user.image_url = new_user_url
    db.session.add(user)
    db.session.commit()
    # return f"<h3>{user} | {user.id} | {user.first_name}</h3>"

    return redirect(f'/userpage/{user.id}')
