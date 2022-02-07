from flask import Flask, jsonify, render_template, flash, redirect, request, session
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

boggle_game = Boggle()

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] ="hello"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
toolbar = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    if session['boggle-board']:
        boggle_board = session['boggle-board']
    else:
        session['boggle-board'] = boggle_game.make_board()
    
    return render_template('index.html', board=boggle_board)


@app.route('/get-word/<string:guess>')
def get_word():
    user_word = request.form['guess']
    session['user-guess'] = user_word
    
    return redirect('/')
