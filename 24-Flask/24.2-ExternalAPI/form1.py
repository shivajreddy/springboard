from flask_wtf import FlaskForm
from wtforms import StringField


class testform(FlaskForm):
  """test form for user"""

  name = StringField("NAME?")
  field1 = StringField("FIELD1?")

