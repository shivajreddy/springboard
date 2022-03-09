from flask_sqlalchemy import SQLAlchemy
from config import db

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
  available = db.Column(db.Boolean, default=True)

class TestModel(db.Model):
  """Test Model"""
  __tablename__ = "test_model"
  id = db.Column(db.Integer, primary_key=True,autoincrement=True)
  name = db.Column(db.String(50))

  


