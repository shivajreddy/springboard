from flask import Flask, jsonify, render_template, flash, redirect, request, session
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
    session['responses'] = []
    session_responses = session['responses']
    return render_template('surveyHomepage.html',content=survey)


@app.route('/answer', methods=["POST"])
def answer():
    # get the response and append to DS 
    # Pull back to the question, if unanswered
    session_responses = session['responses']
    
    if 'radio-group' in request.form.keys():
        response = request.form['radio-group']
        session_responses.append(response)
        session['responses'] = session_responses
    else:
        response = None

    # if no question filled
    if response == None:
        print("it is supposed to flash ")
        flash(f'You need to respond to this question before going to next')
        return redirect(f'/questions/{len(session_responses)}')

    # check if all questions filled
    if len(session_responses) == len(QUESTIONS):
        return redirect('/thank-you')

    # Redirect to the next question
    return redirect(f'/questions/{len(session_responses)}')



@app.route('/questions/<int:number>')
def surveyQuestion(number):
    session_responses = session.get('responses',[])
    print(f"number={number} DS length = {len(RESPONSES)}, DS items={RESPONSES}")

    # Redirect to thankyou page if all questions are answered
    if len(session_responses) == len(QUESTIONS):
        return redirect('/thank-you')

    # Bring the user back to the right question, based on len(responses)
    if number != len(session_responses):
        flash(f'You went to the wrong question {number}, instead answer {len(session_responses)}')
        return redirect(f'/questions/{len(session_responses)}')

    # check if query number same as as length of responses
    nextPage = number + 1
    question = survey.questions[number]
    return render_template('question.html', question=question, next = nextPage)


    # if no condition goes through
    # return render_template('question.html', question=question, next = nextPage)



@app.route('/thank-you')
def thankYouPage():
    return render_template("thankyou.html")
