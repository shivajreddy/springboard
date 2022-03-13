from crypt import methods
import os
from flask import Flask, jsonify, render_template, request
import mysecrets
from database import db, connect_db
from Cupcake import Cupcake

#! App Conifguration
project_root = os.path.dirname(os.path.realpath('__file__'))
template_path = os.path.join(project_root, 'templates')
static_path = os.path.join(project_root, 'static')
app  = Flask(__name__, template_folder=template_path, static_folder=static_path)
app.config["SECRET_KEY"] = mysecrets.SECRET_KEY


#! pdql db
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///cupcakes"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
connect_db(app)


#! Routes
@app.route('/', methods=["GET", "POST"])
def route_homePage():
  return render_template('home_page.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html')


#! API routes
#* GET all cookies
@app.route('/api/cupcakes/', methods=["GET"])
def get_cupcakes():
  all_cupcakes = [cake.srlz() for cake in Cupcake.query.all()]
  return (jsonify(result=all_cupcakes), 200)

#* GET cookie of id
@app.route('/api/cupcakes/<int:id>/', methods=["GET"])
def get_cupcake(id):
  cupcake = Cupcake.query.get_or_404(id)
  result = cupcake.srlz()
  return (jsonify(result=result), 200)

#* POST a new cookie
@app.route('/api/cupcakes/', methods=["POST"])
def new_cookie():
  new_cupcake = Cupcake()

  if "flavor" in request.json:
    new_cupcake.flavor = request.json["flavor"]
  if "size" in request.json:
    new_cupcake.size = request.json["size"]
  if "rating" in request.json:
    new_cupcake.rating = request.json["rating"]
  if "image" in request.json:
    new_cupcake.image = request.json["image"]
  
  db.session.add(new_cupcake)
  db.session.commit()

  return (jsonify(result=new_cupcake.srlz()), 200)

#* PATCH update a cookie of id
@app.route('/api/cupcakes/<int:id>/', methods=["PATCH"])
def update_cookie(id):
  cupcake = Cupcake.query.get_or_404(id)
  
  if "flavor" in request.json:
    cupcake.flavor = request.json["flavor"]
  if "size" in request.json:
    cupcake.size = request.json["size"]
  if "rating" in request.json:
    cupcake.rating = request.json["rating"]
  if "image" in request.json:
    cupcake.image = request.json["image"]
  
  db.session.commit()

  return (jsonify(result= cupcake.srlz()), 200)

#* DELETE a cookie of id
@app.route('/api/cupcakes/<int:id>/', methods=["DELETE"])
def delete_cookie(id):
  cupcake = Cupcake.query.get_or_404(id)
  db.session.delete(cupcake)
  db.session.commit()
  return f"DELETED {id}"

