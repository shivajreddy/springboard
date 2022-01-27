from flask import Flask, render_template, request
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)

# debug toolbar
app.config["SECRET_KEY"] = "WTF"
app.debug = True
toolbar = DebugToolbarExtension(app)

# URL routing
# Home Page
@app.route('/')
def home():
    p = story.prompts
    return render_template('home.html', content=p)

@app.route('/story')
def storyResult():
    res = story.generate(request.args)
    return render_template('story.html',res=res)
