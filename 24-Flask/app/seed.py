
#* seed file
from app.database import db, connect_db
from app.models.Pet import Pet



test_pet1 = Pet(name="pet1",
species="dog",
age=1,
notes="notes1",
available=True)

test_pet2 = Pet(name="pet1",
species="cat",
age=2,
notes="notes2",
available=False)

test_pet3 = Pet(name="pet1",
species="dog",
age=3,
notes="notes3",
available=True)