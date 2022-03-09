import os
from flask import Flask


from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
def connect_db(app):
  db.app = app
  db.init_app(app)

#! Config class, settings that are same for all environments
class Config(object):
  DEBUG = False
  TESTING = False
  SESSION_COOKIE_SECURE = False
  SECRET_KEY = "e56b104fcb396d0a8ae83df8fd50321d05bd8c240b5fe664"

  #* Database
  SQLALCHEMY_DATABASE_URI = "postgresql://pets"
  SQLALCHEMY_TRACK_MODIFICATIONS = False
  SQLALCHEMY_ECHO = True


class DevelopmentConfig(Config):
  DEBUG = True


class TestingConfig(Config):
  TESTING = True


class ProductionConfig(Config):
  pass
