from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import input_required
from wtforms.widgets import TextArea
# from flask import session


class SignUpForm(FlaskForm):
  """form for sign up"""

  username = StringField("Your Username", validators = [input_required()])
  password = PasswordField("your Password", validators = [input_required()])




class LoginForm(FlaskForm):
  """form for loggin in"""

  username = StringField("Your Username", validators = [input_required()])
  password = PasswordField("Your Password", validators = [input_required()])


class FeedbackForm(FlaskForm):

  """form for new feedback"""

  title = StringField("Feedback Title")
  content = StringField("Content for feedback", widget=TextArea())
  # username = StringField("Choose the user")