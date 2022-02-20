# Notes

## Adding tables
- The Model(class) has **tablename** set to the name of the table that is going to be created.
- Schema is designed in the very beginning and not altered. So this command `db.create_all()` is used in the very beginning, to create all the tables.

## Adding row's to the tables
- Once the an instance is created for the Model, it means a row(instance) is created for the table(Class). And when `db.session.add(instance)` is called, this instance(row) is added to the staging area, and finally when `db.session.commit()` is called, it will be pushed into the table, if there are no errors. Make sure to use ECHO in app.configuration to see the full details in the terminal.

## Erros and Rollback
- If a table is not properly added, the `db.session` should be rolled back using `db.session.rollback()` only then the staging area is cleared, and can be added again with fixed quiries and commited.

## Importing Models:
step1: create instance of the model class
step2: Tell sql to sync this new instance to the db -> db.session.commit()

db.session is like a staging area, like git stage

db.session.add(instance_1) -> Add instance_1 to the staging area i.e., db's sesion
db.session.add(instance_2) -> Add instance_2 to the staging area i.e., db's sesion
db.session.commit()

db.session is not same as flask's session, totally different things.

## Multiple Inserts
- Using `db.session.add_all(list_of_instances)` all the instances in the list, that is passed as the arg, will be executed, when `db.session.commit()` is called.

## Modifying an Instance
- In your python file, when you change the value of a property of the instance(row), it doesn't automatically update the row in the database. First you should add the instance you want to modify into `db.session.add(instance_21)` and the `db.session.commit()`, SQLAlchemy will automatically modify the instance_21 row with updated properties (values in the columns) because the row already exists in the table.

### Better Representatin
- The dunder method in the Model class `__repr__` will result in returning more appropriate responses in the terminal, when a new instance is created. Default is going to show the class name and the memory id of the instance.
- Also, when ever this instance method is called, the representation you define will be show, so it will be easy when querying.
- `__repr__` should be a dunder method i.e., `def __repr__(self):` , but `__tablename__` is used as the variable name for the name of the table you want to create.

## Querying Basics
Example: table21 is the name of the table in Model21 class. (Class Model21: **tablename**='table21')

- `Model21.query` is a method for method that can be called on all the Models class'es
- `Model21.query.all()` is = to `SELECT * FROM Model21`, but query.all() will return a list of all the rows.
- `Model21.query.get(arg)` is query syntax for SQLAlchemy. arg is the "primary-key" of the row in Model21 table. so Model21.query.get(2) will return the instance(row) in Model21 Class(table),which has id=2 (here id is the primary-key)
- `Model21.query.filter_by(col3='dog')` returns a base query SQLAlchemy object, which is pretty useless, we need the list of the results.
- `Model21.query.filter_by(col3="dog").all()` returns a list of all the rows in table21 table, where value in `col3 = 'dog'`
- `Model21.query.filter_by().first()` will return the first item in the above list. It will return "None" if there are no results.
- `Model21.query.filter_by().one()` is similar to first() but one() will return an error, instead of None if no matches are found.
- `Model21.query.filter_by().one_or_none()` This is a combination of first() and one(). This will get first record, But it returns error if the matches are more than 1, and returns None if no matches are found.
- `Model21.query.filter_by(col3="dog", col4=True).all()` returns a list of all the rows in table21 table, where value in `col3 = 'dog'` and `col4 = True`

## filter vs. filter_by
- ```filter_by``` is great when you know the exact name of the column and the value you want to filter, like **col1 = 'dog'**
- ```filter``` syntax is ```Model21.query.filter(Model21.col3 == 'value21').all()``` the == will not result in True or False, but it will return the result of that operation, in this cases shows all the rows whole col3 is equal to 'value21'
- So you can use ```Model21.query.filter(Model21.col2 != 'value1').all()``` or ```Model21.query.filter(Model21.col4 >= 10).all()``` 
- You can apply multiple filters (and operator) by ```Class.query.filter(filter1, filter2)```

## Adding Model Methods
- why add methods? A: we can modify databases based on actions we define, like user's login, logout.
- But, again, you should add the instances to session by using ```db.session.add()``` or ```db.session.add_all()``` and then ```db.session.commit()``` to update the database.

## Class Methods
- Just like how we use ```Model21.query```, this means that query is a class method (which is created from the super class db.Model), we can create our own class methods.
- This is the syntax:
    ``` python
    class Pet(db.Model):
        # create table with a name
        __tablename__ = "pets"

        # schema design
        id = db.Column(db.Integer,
                        primary_key = True,
                        autoincrement = True)
        
        name = db.Column(db.String(50),
                        nullable=False,
                        unique = True)
        
        species = db.Column(db.String(30),
                            nullable=False,
                            unique = False)

        #* Class methods
        @classmethod
        def get_by_species(cls, arg1): #cls is a good variable name, since we are referring the class.
            return cls.query.filter_by(species=arg1).all() # for column called species return all the rows, whose val in this column == arg1
    ```

## Listing and showing
- Flask-SQLAlchemy is simpler than SQLAlchemy, since the later documentation is confusing.
- Main differences
  - Flask-SQLAlchemy ties the SQLAlchemy session to Flask response ->
  - Easy to find things on SQLAlchemy API
  - Allows querying on the Class itself
  - Has extra features like ```Model21.objects.get_or_404(primary_key_21)``` this will return 404 page, if the get primary_key_21 function can't find a match.

## Deleting using SQLAlchemy
- ```Model21.query.filter(filter1).all()``` will give all the rows that satisfy **filter1** , but ```Model21.query.filter(filter1).delete()``` will delete all the rows that satisfy **filter1**
- But now instead of adding to by **db.session.add()**, we can just do ```db.session.commit()```, this will update the database.
- This is because, when we create instances, SQLAlchemy doesn't know which items(rows) should be added to the databases, so we specify by db.session.add(instace21). But when we use Model21.(some_query).delete(), this method will add this action to the session, which means it is added to the staging area, now all we have to do is db.session.commit()
- Before commiting, if you want to rollback, just call ```db.session.rollback()```. Think of it as a confirmation to deleta something, once the user presses delete on something, you can have two options - confirm delete, cancel delete. First button will commit, second button will rollback the session

## Seed Tables
- create a python file, that will serve as the seed file
- In this file, create all the place holder data. So that you can 
- First import all models that you need, drop all the tables, then create all tables needed by the models.
``` python
from models import Pet, db
from app import app

# Create all tables
db.drop_all()
db.create_all()

# If table isn't empty, empty it
Pet.query.delete()

# Add pets
whiskey = Pet(name='Whiskey', species="dog")
bowser = Pet(name='Bowser', species="dog", hunger=10)
spike = Pet(name='Spike', species="porcupine")

# Add new objects to session, so they'll persist
db.session.add(whiskey)
db.session.add(bowser)
db.session.add(spike)

# Commit--otherwise, this never gets saved!
db.session.commit()
```

## Testing SQLAlchemy
-