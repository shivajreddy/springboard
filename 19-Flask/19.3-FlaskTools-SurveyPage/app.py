from flask import Flask, jsonify, render_template, flash, redirect, request
from flask_debugtoolbar import DebugToolbarExtension
from surveys import surveys


# app setup
app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] ="hello"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
toolbar = DebugToolbarExtension(app)


survey1 = surveys['satisfaction']
survey2 = surveys['personality']
survey = survey1

RESPONSES = []
QUESTIONS = [q.question for q in survey1.questions]

print(f"QUESTIONS = {QUESTIONS}")
print(f"RESPONSES = {RESPONSES}")

@app.route('/')
def homePage():
    return render_template('homepage.html',title = survey.title)


@app.route('/survey-home', methods=["POST"])
def surveyHome():
    return render_template('surveyHomepage.html',content=survey)


@app.route('/answer', methods=["POST"])
def answer():
    # get the response and append to DS 
    # Pull back to the question, if unanswered    
    try:
        response = request.form['radio-group']
        RESPONSES.append(response)
    except:
        return redirect(f'questions/{len(RESPONSES)}')

    # if no question filled
    if response == None:
        return redirect(f'/qeustions/{len(RESPONSES)}')

    # check if all questions filled
    if len(RESPONSES) == len(QUESTIONS):
        return redirect('/thank-you')

    # Redirect to the next question
    return redirect(f'/questions/{len(RESPONSES)}')



@app.route('/questions/<int:number>')
def surveyQuestion(number):

    print(f"number={number} DS length = {len(RESPONSES)}, DS items={RESPONSES}")

    # Redirect to thankyou page if all questions are answered
    if len(RESPONSES) == len(QUESTIONS):
        return redirect('/thank-you')

    # Bring the user back to the right question, based on len(responses)
    if number != len(RESPONSES):
        flash(f'You went to the wrong question {number}, instead answer {len(RESPONSES)}')
        return redirect(f'/questions/{len(RESPONSES)}')

    # check if query number same as as length of responses
    nextPage = number + 1
    question = survey.questions[number]
    return render_template('question.html', question=question, next = nextPage)


    # if no condition goes through
    # return render_template('question.html', question=question, next = nextPage)



@app.route('/thank-you')
def thankYouPage():
    return render_template("thankyou.html")
