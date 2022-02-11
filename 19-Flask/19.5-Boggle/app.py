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
    # already in a game
    if 'boggle-board' in session.keys():
        boggle_board = session['boggle-board']
        return render_template('index.html', board=boggle_board)
    # opening the app for first time
    else:
        session.clear()
        session['boggle-board'] = boggle_game.make_board()
        boggle_board = session['boggle-board']
        return render_template('index.html', board=boggle_board)

@app.route('/get-word', methods=["POST"])
def get_word():
    user_word = request.form['guess']
    session['user-guess'] = user_word
    flash(user_word)
    return redirect('/')

# respond to ajax request with a result
@app.route('/req/<string:userWord>')
def front_req(userWord):
    boggle_board = session['boggle-board']
    r = boggle_game.check_valid_word(boggle_board,userWord)

    # wrapping the result into an object and sending it using jsonify
    result = {"result":r}

    return jsonify(result)
    
