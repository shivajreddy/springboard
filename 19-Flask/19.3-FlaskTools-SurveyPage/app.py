from flask import Flask, render_template, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from surveys import surveys


# app setup
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] ="hello"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
toolbar = DebugToolbarExtension(app)

RESPONSES = []

survey1 = surveys['satisfaction']
survey2 = surveys['personality']
survey = survey1

@app.route('/', methods=["POST", "GET"])
def homePage():
    return render_template('homepage.html',title = survey.title)

@app.route('/survey-home', methods=["POST"])
def surveyHome():
    return render_template('surveyHomepage.html',content=survey)

@app.route('/questions/<int:number>', methods=["POST"])
def surveyQuestion(number):
    if number == len(survey.questions)+1:
        return redirect('/thank-you')
    question = survey.questions[number-1]
    nextPage = number+1
    return render_template('question.html', question=question, next = nextPage)

@app.route('/thank-you')
def thankYouPage():
    return render_template("thankyou.html")

print(len(survey.questions))