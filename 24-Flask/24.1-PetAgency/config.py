from flask import Flask


#! Config class, settings that are same for all environments
class Config(object):
  DEBUG = False
  TESTING = False
  SESSION_COOKIE_SECURE = False
  SECRET_KEY = "e56b104fcb396d0a8ae83df8fd50321d05bd8c240b5fe664"

  #* Database
  SQLALCHEMY_DATABASE_URI = "postgresql:///pets"
  SQLALCHEMY_TRACK_MODIFICATIONS = False
  SQLALCHEMY_ECHO = True

#! DEVELOPMENT ENV SETTINGS 
class DevelopmentConfig(Config):
  DEBUG = True


#! TESTING ENV SETTINGS 
class TestingConfig(Config):
  TESTING = True


#! PRODUCTION ENV SETTINGS 
class ProductionConfig(Config):
  pass


#! DATABASE CONFIGURATION
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
def connect_db(app):
  db.app = app
  db.init_app(app)
