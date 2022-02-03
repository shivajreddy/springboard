
from crypt import methods
from flask import Flask, jsonify, render_template, flash, redirect, request, session
from flask_debugtoolbar import DebugToolbarExtension

# from forex_python import CurrencyRates

# app configureation
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] ="hello"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
toolbar = DebugToolbarExtension(app)


@app.route('/')
def homePage():
    return render_template('index.html')


@app.route('/inputs', methods=["POST"])
def get_inputs():

    input_from = request.form['input-from']
    input_to = request.form['input-to']
    input_amount = request.form['input-amount']
    print([input_from,input_to, input_from])
    return redirect('/results')


@app.route('/results')
def results():
    return render_template('results.html')
