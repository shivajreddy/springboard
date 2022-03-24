from flask import Flask, flash, redirect, render_template, session


#* Define the WSGI applicatin object
app = Flask(__name__)

#* Configurations
app.config.from_object('config')

#* Connect Databaase
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
def connect_db(app):
  db.app = app
  db.init_app(app)
connect_db(app)


from .views import views, auth_views, user_views