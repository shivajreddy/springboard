from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def connect_db(app):
  db.app = app
  db.init_app(app)


class Todo(db.Model):
  """test model"""

  __tablename__ = "todostab"

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  title = db.Column(db.Text, nullable=False)
  done = db.Column(db.Boolean, default=False)

  #* serialize the model
  def serialize_todo(self):
    return {
      'id': self.id,
      'title': self.title,
      'done': self.done}



  def __repr__(self):
    return f"TODO:: id:{self.id} Title:{self.title} Done:{self.done}"
  
