from app import app
from flask import render_template
from config import db, connect_db
from app.models.Pet import TestModel

#! Routes
@app.route('/')
def route_homePage():
  db.create_all()
  return render_template('home_page.html')