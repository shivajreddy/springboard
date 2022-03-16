from flask_sqlalchemy import SQLAlchemy

#! database

db = SQLAlchemy()
def connect_db(app):
  db.app = app
  db.init_app(app)




