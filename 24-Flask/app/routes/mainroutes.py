from app import app
from flask import render_template
from app.database import db

#! Routes
@app.route('/')
def route_homePage():
  return render_template('home_page.html')