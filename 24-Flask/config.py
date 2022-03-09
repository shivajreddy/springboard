import os
from flask import Flask


from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
def connect_db(app):
  db.app = app
  db.init_app(app)

#* Config class, settings that are same for all environments
class Config(object):
  DEBUG = False
  TESTING = False
  SECRET_KEY = "e56b104fcb396d0a8ae83df8fd50321d05bd8c240b5fe664"

class ProductionConfig(Config):
  pass

class DevelopmentConfig(Config):
  DEBUG = True
  DB_NAME = "db-development"
  SESSION_COOKIE_SECURE = False
  SQLALCHEMY_DATABASE_URI = "postgresql://pets"

class TestingConfig(Config):
  TESTING = True
  DB_NAME = "db-testing"
  SESSION_COOKIE_SECURE = False

  #* APP CONFIGURATION
  project_root = os.path.dirname(os.path.realpath('__file__'))
  template_path = os.path.join(project_root, 'templates')
  static_path = os.path.join(project_root, 'static')
  app  = Flask(__name__, template_folder=template_path, static_folder=static_path)
  app.config['SECRET_KEY'] = "e56b104fcb396d0a8ae83df8fd50321d05bd8c240b5fe664"

  #* DATABASE CONFIGURATION
  app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://pets"
  app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
  app.config["SQLALCHEMY_ECHO"] = True





#* Application Threads
THREADS_PER_PAGE = 2

#* CSRF protection
CSRF_ENABLED = True
CSRF_SESSION_KEY = "0729951ee8a7fda35aca898022c08ff9282e4f5a52f6902c"


