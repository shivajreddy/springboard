from flask_sqlalchemy import SQLAlchemy
from database import db


class Pet(db.Model):

  """Pet table"""

  __tablename__ = "pets"

  id = db.Column(db.Integer,
  primary_key=True,
  autoincrement=True)

  name = db.Column(db.String(), nullable=False)
  species = db.Column(db.String(), nullable=False)
  photo_url = db.Column(db.String())
  age = db.Column(db.Integer)
  notes = db.Column(db.String())
  available = db.Column(db.String(db.Boolean), default=True)


  


