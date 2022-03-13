from Models.Todo import connect_db,db
from app import app
from Models.Todo import Todo

db.drop_all()
db.create_all()
print(db)
todo1 = Todo(title="eat chips")
todo2 = Todo(title="feed boo", done=True)
todo3 = Todo(title="take shower")
todo4 = Todo(title="exercise")

db.session.add_all([todo1,todo2,todo3,todo4])
db.session.commit()
