from database import db


class Cupcake(db.Model):
  """cupcake model"""
  __tablename__ = "cupcakes"

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  flavor = db.Column(db.Text, nullable=False)
  size = db.Column(db.Text, nullable=False)
  rating = db.Column(db.Float, nullable=False)
  image = db.Column(db.Text, nullable=False, default="https://tinyurl.com/demo-cupcake")

  def srlz(self):
    return {
      "id" : self.id,
      "flavor" : self.flavor,
      "size" : self.size,
      "rating" : self.rating,
      "image" : self.image
    }

