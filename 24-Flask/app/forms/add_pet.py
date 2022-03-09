from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, TextAreaField

class PetForm(FlaskForm):
  """pet form"""

  name = StringField("Name")
  species = StringField("Species")
  photo_url = StringField("Photo Url")
  age = IntegerField("Age")
  notes = TextAreaField("Notes")
  available = BooleanField("Is it availabile?")

