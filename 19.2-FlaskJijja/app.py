from flask import Flask
from flask import render_template
from flask import request
import stories

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')


inputs = ["place", "noun", "verb", "adjective", "plural_noun"]


@app.route('/hello')
def hello():
    return render_template('hello.html',len=len(inputs), inputs=inputs)


# @app.route('/story')
# def story():
#     return render_template('story.html')

@app.route('/story', methods=["GET", "POST"])
def story2():
    results = []
    for i in inputs:
        item = request.args[i]
        results.append(item)
    # item1 = request.args['place']
    
    return render_template('story.html', results=results)


@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/results')
def results():
    results = request.args['out_name']
    return render_template('results.html', myresults=results)
    # return render_template('results.html')

