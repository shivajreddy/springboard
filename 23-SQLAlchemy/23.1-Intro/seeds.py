"""Seed File for Blogly"""
from app import app
from models import db, connect_db
from models import User


connect_db(app)
db.drop_all()
db.create_all()

User.query.delete()
db.session.commit()

# create 2 test users
test_user_1 = User(first_name="testuser1", last_name="testUser1LastName")
test_user_2= User(first_name="testuser2", last_name="testUser2LastName")

db.session.add(test_user_1)
db.session.add(test_user_2)
db.session.commit()

#* run this is ipython