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
    # session.clear()
    return render_template('index.html')


@app.route('/inputs', methods=["POST"])
def get_inputs():
    
    # print("forms fields", request.form['input-from'], request.form['input-to'], request.form['input-amount'])

    # Check if form is filled propperly without ValueError's
    if (request.form['input-from'] == "") or (request.form['input-to'] == "") or (request.form['input-amount'] == ""):
        flash("Fill the form completely")
        return redirect('/')
    try:
        int(request.form['input-amount'])
    except ValueError as e:
        flash(f"Your input '{request.form['input-amount']}' is not a valid number")
        return redirect('/')
    
    # variables for inputs
    input_from = request.form['input-from']
    input_to = request.form['input-to']
    input_amount = request.form['input-amount']

    session['input_from'] = input_from
    session['input_to'] = input_to
    session['input_amount'] = input_amount

    return redirect('/results')

    result = convert_currency(input_from,input_to,input_amount)
    return render_template('results.html', result=result)



@app.route('/results')
def results():
    input_from = session['input_from']
    input_to = session['input_to']
    input_amount = session['input_amount']
    data = [input_from, input_to, input_amount]
    # session.clear()
    return render_template('results.html', data=data)



# Function to convert the currencies
def convert_currency(from_curr,to_curr,amount_curr):
    return f"This is {from_curr} converted to {to_curr} for total amout of {amount_curr}"