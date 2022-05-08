const db = require("../db");
const ExpressError = require('../expresserror');

class MyDog {

  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static async getAll() {
    const result = await db.query(
      `SELECT * FROM dogs`
    )
    const dogs = result.rows.map(row => new MyDog(row.id, row.name, row.age));
    return dogs;
  }

  static async getDog(id) {
    const result = await db.query(
      `SELECT * FROM dogs
      WHERE id=$1`, [id]
    )
    const row = result.rows[0];
    if (!row) {
      throw new ExpressError(`no dog with id ${id}`, 404)
    };
    return new MyDog(row.id, row.name, row.age);
  }

  static async newDog(given_name, given_age) {
    const results = await db.query(
      `INSERT INTO dogs (name, age)
      VALUES ($1, $2)
      RETURNING id, name, age`, [given_name, given_age]
    )
    if (results.rowCount === 0) {
      throw new ExpressError('couldnt create new dog', 404)
    };
    const {
      id,
      name,
      age
    } = results.rows[0];
    const newdog = new MyDog(id, name, age);
    return newdog;
  }

  async speak() {
    console.log(`${this.name} has id of ${this.id}, and age is ${this.age}`);
  }

  async remove() {
    const result = await db.query(
      `DELETE FROM dogs
      WHERE id=$1
      RETURNING *`
      , [this.id]
    )
    return result.rows[0]
  }

  async save() {
    const result = await db.query(
      `UPDATE dogs
      SET name=$1, age=$2
      WHERE id=$3
      RETURNING *`
      , [this.name, this.age, this.id]
    )
  }

}


module.exports = MyDog;