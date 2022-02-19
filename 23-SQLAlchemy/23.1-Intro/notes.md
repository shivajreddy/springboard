# Notes


## Adding tables
- The Model(class) has __tablename__ set to the name of the table that is going to be created. 
- Schema is designed in the very beginning and not altered. So this command **db.create_all()** is used in the very beginning, to create all the tables.
  
## Adding row's to the tables
- Once the an instance is created for the Model, it means a row(instance) is created for the table(Class). And when **db.session.add(instance)** is called, this instance(row) is added to the staging area, and finally when **db.session.commit()** is called, it will be pushed into the table, if there are no errors. Make sure to use ECHO in app.configuration to see the full details in the terminal.

## Erros and Rollback
- If a table is not properly added, the **db.session** should be rolled back using **db.session.rollback()** only then the staging area is cleared, and can be added again with fixed quiries and commited.

## Importing Models:

step1: create instance of the model class
step2: Tell sql to sync this new instance to the db -> db.session.commit()

db.session is like a staging area, like git stage

db.session.add(instance_1) -> Add instance_1 to the staging area i.e., db's sesion
db.session.add(instance_2) -> Add instance_2 to the staging area i.e., db's sesion
db.session.commit()

db.session is not same as flask's session, totally different things.


## Multiple Inserts

- Using **db.session.add_all(list_of_instances)** all the instances in the list, that is passed as the arg, will be executed, when **db.session.commit()** is called.

## Modifying an Instance

- In your python file, when you change the value of a property of the instance(row), it doesn't automatically update the row in the database. First you should add the instance you want to modify into **db.session.add(instance_21)** and the **db.session.commit()**, SQLAlchemy will automatically modify the instance_21 row with updated properties (values in the columns) because the row already exists in the table.
  
### Better Representatin

- The dunder method in the Model class **__repr__** will result in returning more appropriate responses in the terminal, when a new instance is created. Default is going to show the class name and the memory id of the instance.
- **__repr__** should be a dunder method i.e., **def __repr__(self):** , but **__tablename__** is used as the variable name for the name of the table you want to create.

## Querying Basics

- 