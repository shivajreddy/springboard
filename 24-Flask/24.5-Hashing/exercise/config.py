# Statement for enabling the development environment
DEBUG = True

# Define the application directory
import os
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

#! App config
SECRET_KEY = "9300fc4812151896704dae76fce737de5610ce7e9d7f56b0"

#! DB config
SQLALCHEMY_DATABASE_URI = 'postgresql:///feedback'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

