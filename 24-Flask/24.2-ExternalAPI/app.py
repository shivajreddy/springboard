import imp
import os
from flask import Flask, jsonify, render_template, request
import requests
from mysecrets import key
from form1 import testform

#! App Conifguration
project_root = os.path.dirname(os.path.realpath('__file__'))
template_path = os.path.join(project_root, 'templates')
static_path = os.path.join(project_root, 'static')
app  = Flask(__name__, template_folder=template_path, static_folder=static_path)
# generate secret in python using: secrets.token_hex(24)
app.config["SECRET_KEY"] = "609b6a63b901ef5b79b85b398b524157385baddf61b7e4a4"


# data = {1 : "hi", "2": "bye", "tweets" : ["tweet1", "tweet2"], "redditposts" : [{"post1":"user1", "post2":"user2"}]}



#! Routes
@app.route('/')
def route_homePage():

  # result = requests.post('https://enxuj9pjtu5w.x.pipedream.net/', data=data) # header-> content-type: application/form-urlencoded
  # result = requests.post('https://enxuj9pjtu5w.x.pipedream.net/', json=data) # header-> content-type: application/json

  result = requests.get(f"http://www.mapquestapi.com/geocoding/v1/address?key={key}&location=Washington,DC")
  result = requests.get(f"http://www.mapquestapi.com/geocoding/v1/address", params={"key" : key, "location" : "Washington,DC"})

  print(result.json())

  return render_template('home_page.html')

@app.route('/api')
def api():
  f = testform()
  # raise
  return render_template('address.html', data=f)

@app.route('/code')
def code():
  # raise
  n = request.args['name']
  f1 = request.args['field1']
  result = requests.get(f"http://www.mapquestapi.com/geocoding/v1/address",
  params={"key" : key, "location" : f1})
  return f"<p>{result.json()}</p>"
