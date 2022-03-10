from random import choices
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, TextAreaField, SelectField
from wtforms.validators import InputRequired, Length, NumberRange, URL, Optional

class PetForm(FlaskForm):
  """pet form"""

  name = StringField("Name", validators=[InputRequired()])

  species = SelectField("Species", choices=[("cat","Cat"), ("dog", "Dog"), ("porcupine", "Porcupine")])
  
  photo_url = StringField("Photo Url",
  validators=[Optional(), URL()])

  age = IntegerField("Age", validators=[Optional(), NumberRange(min=0, max=50)])

  notes = TextAreaField("Comments",
  validators=[Optional(), Length(min=10)])

  available = BooleanField("Is it availabile?")

