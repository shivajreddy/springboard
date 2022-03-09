from flask import Flask
from config import connect_db

app = Flask(__name__)


#* Import configurations from config.py
if app.config["ENV"] == "production":
  app.config.from_object("config.ProductionConfig")
elif app.config["ENV"] == "testing":
  app.config.from_object("config.TestingConfig")
elif app.config['ENV'] == 'development':
  app.config.from_object("config.DevelopmentConfig")

#* Connect DB
connect_db(app)


#* Import Routes
from app.routes import mainroutes