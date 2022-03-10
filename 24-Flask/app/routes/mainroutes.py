from app import app
from flask import render_template, redirect
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

@app.route('/pet-info/<int:pet_id>/')
def pet_info(pet_id):
  pet = Pet.query.get(pet_id)
  return render_template("pet_info.html", pet=pet)


@app.route('/add-pet/', methods=["GET", "POST"])
def add_pet():
  newpetform = PetForm()
  if newpetform.validate_on_submit():
    new_pet = Pet(name= newpetform.name.data,
    species=newpetform.species.data,
    photo_url=newpetform.photo_url.data,
    age=newpetform.age.data,
    notes=newpetform.notes.data,
    available=newpetform.available.data)
    db.session.add(new_pet)
    db.session.commit()
    print("passed")
    return redirect('/')
  else:
    print("failed")
    return render_template('new_pet_form.html', form=newpetform) 


@app.route('/pet-edit/<int:pet_id>/')
def pet_edit(pet_id):
  pet = Pet.query.get(pet_id)
  pet_form = PetForm(obj=pet)
  if pet_form.validate_on_submit():
    name= pet_form.name.data
    species=pet_form.species.data
    photo_url=pet_form.photo_url.data
    age=pet_form.age.data
    notes=pet_form.notes.data
    available=pet_form.available.data
    pet.name = name
    pet.species = species
    pet.photo_url = photo_url
    pet.age = age
    pet.notes = notes
    pet.available = available
    db.session.add(pet)
    db.session.commit()
    print("passed")
    return redirect('/')
    
  else:
    return render_template("pet_edit.html", pet=pet_form)


# @app.route('/seed')
def app_seeds():
  from app.seed import test_pet1, test_pet2, test_pet3
  db.drop_all()
  db.create_all()
  db.session.add(test_pet1)
  db.session.add(test_pet2)
  db.session.add(test_pet3)
  db.session.commit()
  return "<h1>SEEDING FINISHED</h1>"