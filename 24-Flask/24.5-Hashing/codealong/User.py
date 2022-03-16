from flask_wtf import FlaskForm
from database import db
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt()


class User(db.Model):
  """users table"""
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)

  username = db.Column(db.String(20), nullable=False)
  password = db.Column(db.String(), nullable=False)
  # user_salt = db.Column(db.String(), nullable=False)


  # New user Registration
  @classmethod
  def register(cls, username, password):
    """Register new user wth hashed password & return user"""

    # hash the password, and save the utf format of the hash
    hashed_password = bcrypt.generate_password_hash(password)
    hashed_password_utf8 = hashed_password.decode("utf8")

    return cls(username=username, password=hashed_password_utf8)


  # Authenticating
  @classmethod
  def authenticate(cls, username, form_password):
    """Authenticate the user for the entered username and password"""

    usr = User.query.filter_by(username=username).first()

    if usr and bcrypt.check_password_hash(usr.password, form_password):
      return usr
    return False

