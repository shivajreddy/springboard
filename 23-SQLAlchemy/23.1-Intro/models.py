"""Models for Blogly."""
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String

db = SQLAlchemy()
def connect_db(app):
    db.app = app
    db.init_app(app)

#* User Model
class User(db.Model):

    __tablename__ = "users"

    def __repr__(self):
        return f"{self.id}{self.first_name}"
    
    @property
    def full_name(self):
        return f'{self.first_name}{self.last_name}'

    # Schema design
    id = db.Column(
        db.Integer,
        primary_key = True,
        autoincrement = True,
        nullable = False
    ) 

    first_name = db.Column(
        db.String(50),
        unique = True,
        nullable = False
    )

    last_name = Column(
        db.String(50),
        unique = False,
    )

    image_url = Column(
        db.String(),
    )

    # methods
    def get_full_name(self):
        return f'{self.first_name}{self.last_name}'
