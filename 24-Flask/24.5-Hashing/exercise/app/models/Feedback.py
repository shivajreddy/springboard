from app import db
from flask_sqlalchemy import SQLAlchemy


class Feedback(db.Model):
  """table for feedback"""

  __tablename__ = 'feedbacks'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  title = db.Column(db.String(100), nullable=False)
  content = db.Column(db.Text, nullable=False)
  username = db.Column(db.Text, db.ForeignKey('users.username'))

