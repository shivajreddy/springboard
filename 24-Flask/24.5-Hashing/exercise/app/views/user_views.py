"""views related to user"""

from app import app

from flask import flash, jsonify, redirect, render_template, session

from ..forms.forms import SignUpForm, LoginForm, FeedbackForm
from ..models.User import db, User
from ..models.Feedback import Feedback


@app.route('/users/<username>', methods=["GET"])
def get_user_details(username):
  usr = User.query.filter_by(username=username).first()
  feedbacks = [i for i in Feedback.query.filter_by(username=usr.username)]

  return render_template('user_feedbacks.html', usr=usr, feedbacks=feedbacks)


@app.route('/all-users', methods=["GET"])
def get_all_users():
  users = User.query.all()

  all_feedbacks = {}
  for usr in users:
    # import pdb
    # pdb.set_trace()
    all_feedbacks[usr.username] = Feedback.query.filter_by(username=usr.username)

  return render_template('all_users.html', users=users, all_feedbacks=all_feedbacks)


#? DELETE a feedback
@app.route('/api/delete/feedback/<int:id>', methods=["DELETE", "GET"])
def delete_feedback(id):
  fb = Feedback.query.filter_by(id=id).first()

  if fb:
    db.session.delete(fb)
    db.session.commit()
    # flash(f"Deleted feedback of id {id}")
    return jsonify({"deleted":id})
  
  # flash(f"Did not find feedback of id:{id}")
  return f"no {id} found "


#? DELETE user
@app.route('/api/delete/user/<username>', methods = ["DELETE"])
def delete_user(username):
  usr = User.query.filter_by(username=username).first()


  if usr:
    usr_feedbacks = Feedback.query.all()
    for fb in usr_feedbacks:
      db.session.delete(fb)

    db.session.delete(usr)
    db.session.commit()
    return redirect('/logout')










