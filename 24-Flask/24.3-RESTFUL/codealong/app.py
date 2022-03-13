from crypt import methods
import os
from flask import Flask, jsonify, render_template, request
from Models.Todo import db, connect_db, Todo

#! App Conifguration
project_root = os.path.dirname(os.path.realpath('__file__'))
template_path = os.path.join(project_root, 'templates')
static_path = os.path.join(project_root, 'static')
app  = Flask(__name__, template_folder=template_path, static_folder=static_path)
app.config["SECRET_KEY"] = "609b6a63b901ef5b79b85b398b524157385baddf61b7e4a4"

#! pdql db
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql:///todos"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "todossecretfuckyou"
connect_db(app)


#! Routes
@app.route('/')
def route_homePage():
  db.create_all()
  return render_template('home_page.html')


@app.route('/api/todos/')
def get_todos():
  all_todos = Todo.query.all()
  resp = [task.serialize_todo() for task in all_todos]
  return jsonify(AllToDo=resp)


@app.route('/api/todos/<int:id>')
def get_todo_id(id):
  todo = Todo.query.get(id)
  srlz = todo.serialize_todo()
  return jsonify(ToDo=srlz)


@app.route('/api/todos/new/', methods=["POST"])
def new_todo():
  new_todo = Todo(title=request.json["title"], done=request.json["done"])
  db.session.add(new_todo)
  db.session.commit()
  return (jsonify(CreatedTask=new_todo.serialize_todo()), 201)


@app.route('/api/todos/update/<int:id>/', methods=["PATCH"])
def update_todo(id):
  todo = Todo.query.get(id)
  todo.title = request.json.get("title", todo.title)
  todo.done = request.json.get("done", todo.done)

  if "title" in request.json:
    todo.title = request.json["title"]

  if "done" in request.json:
    todo.done = request.json["done"]
  
  db.session.commit()
  return (jsonify(updatedtodo=todo.serialize_todo()),200)



