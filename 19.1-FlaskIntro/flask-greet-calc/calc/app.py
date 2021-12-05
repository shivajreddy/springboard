# Put your app in here.
import re
from flask import Flask
from flask import request
from flask.wrappers import Request
app = Flask(__name__)
from operations import add as add_operation
from operations import sub as sub_operation
from operations import mult as mult_operation
from operations import div as div_operation

# Routes
@app.route('/welcome')
def welcome_page():
    return "welcome"

@app.route('/welcome/home')
def home_page():
    return "Welcome Home"

@app.route('/welcome/back')
def welcome_back():
    return "Welcom Back"

# Calc Routes
# @app.route('/add')
# def operation_1():
#     a = int(request.args['a'])
#     b = int(request.args['b'])
#     result = add_operation(a,b)
#     return f'{result}'

# @app.route('/sub')
# def operation_2():
#     a = int(request.args['a'])
#     b = int(request.args['b'])
#     result = sub_operation(a,b)
#     return f'{result}'

# @app.route('/mult')
# def operation_3():
#     a = int(request.args['a'])
#     b = int(request.args['b'])
#     result = mult_operation(a,b)
#     return f'{result}'

# @app.route('/div')
# def operation_4():
#     a = int(request.args['a'])
#     b = int(request.args['b'])
#     result = div_operation(a,b)
#     return f'{result}'

# One Route for all
@app.route('/math/<operation>')
def mega_operation(operation):
    a = int(request.args['a'])
    b = int(request.args['b'])

    if operation == "add":
        result = add_operation(a,b)
        return f'{result}'

    if operation == "sub":
        result = sub_operation(a,b)
        return f'{result}'

    if operation == "mult":
        result = mult_operation(a,b)
        return f'{result}'

    if operation == "div":
        result = div_operation(a,b)
        return f'{result}'

