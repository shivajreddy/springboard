from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import input_required


class SignUpForm(FlaskForm):
  """form for sign up"""

  username = StringField("Your Username", validators = [input_required()])
  password = PasswordField("your Password", validators = [input_required()])




class LoginForm(FlaskForm):
  """form for loggin in"""

  username = StringField("Your Username", validators = [input_required()])
  password = PasswordField("Your Password", validators = [input_required()])


