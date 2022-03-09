from app import app
from flask import render_template
from config import db, connect_db
from app.models.Pet import TestModel, Pet
from app.forms.add_pet import PetForm


#! Routes
@app.route('/')
def route_homePage():
  # db.create_all()

  petform = PetForm()
  all_pets = Pet.query.all()

  return render_template('home_page.html', pets=all_pets)

@app.route('/new-pet/')
def new_pet():
  newpetform = PetForm()
  return render_template('new_pet_form.html', form=newpetform) 


@app.route('/seed')
def app_seeds():
  from app.seed import test_pet1, test_pet2, test_pet3
  db.drop_all()
  db.create_all()
  db.session.add(test_pet1)
  db.session.add(test_pet2)
  db.session.add(test_pet3)
  db.session.commit()
  return "<h1>SEEDING FINISHED</h1>"