from app import db
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()




class User(db.Model):
  """user table for stupid twitter"""

  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  username = db.Column(db.Text, nullable=False, unique=True)
  password = db.Column(db.Text, nullable=False)

  # Register a new user
  @classmethod
  def register(cls, username, form_password):

    hash_password = bcrypt.generate_password_hash(form_password)
    hash_utf_password = hash_password.decode('utf8')

    return cls(username= username, password=hash_utf_password)
  
  # authenticate the user, with the given password
  @classmethod
  def authenticate(cls, username, form_password):

    usr = User.query.filter_by(username=username).first()

    # usr exists in database & password matches
    if usr and bcrypt.check_password_hash(usr.password, form_password):
      return usr
    return False


# class Feedback(db.Model):
#   """feedbacks table"""

#   __tablename__ = 'feedbacks'

#   id = db.Column(db.Integer, primary_key=True, autoincrement=True)

#   text = db.Column(db.Text, nullable=False)
#   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

#   user = db.relationship('User', backref="tweets")

