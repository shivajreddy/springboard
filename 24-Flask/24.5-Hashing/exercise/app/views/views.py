from app import app, db
from crypt import methods
from flask import flash, redirect, render_template, session

from ..forms.forms import SignUpForm, LoginForm, FeedbackForm
from ..models.User import db, User
from ..models.Feedback import Feedback



#! Routes
@app.route('/')
def route_homePage():
  db.create_all()
  if 'user_name' not in session:
    return redirect('/login')

  all_data = {
    0 : Feedback.query.all(),
    1 : session['user_name'],
  }

  return render_template('home_page.html', data=all_data)




@app.route('/feedback', methods=["GET", "POST"])
def feedback():
  if 'user_name' not in session:
    return redirect('/login')

  form = FeedbackForm()
  if form.validate_on_submit():
    title = form.title.data
    content = form.content.data
    new_feedback = Feedback(title=title, content=content, username=session['user_name'])
    db.session.add(new_feedback)
    db.session.commit()
    return redirect('/')
  
  return render_template('feedback.html', form_data=form)

