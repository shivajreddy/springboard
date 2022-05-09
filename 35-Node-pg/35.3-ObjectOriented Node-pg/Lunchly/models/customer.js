/** Customer for Lunchly */

const db = require("../db");
const Reservation = require("./reservation");
const ExpressError = require('../expresserror');

/** Customer of the restaurant. */

class Customer {
  constructor({ id, firstName, lastName, phone, notes, prefix }) {
    this.id = id;
    // this.prefix = this.prefix || "pfx.";
    this.firstName = firstName;
    this.lastName = lastName;
    // this.fullName = this.firstName + " " + this.lastName;
    // for prefix
    // this.fullName = this.prefix + this.firstName + " " + this.lastName;
    this.phone = phone;
    this.notes = notes;
  }

  /** find all customers. */

  static async all() {
    const results = await db.query(
      `SELECT id, 
         first_name AS "firstName",  
         last_name AS "lastName", 
         phone, 
         notes
       FROM customers
       ORDER BY last_name, first_name`
    );
    return results.rows.map(c => new Customer(c));
  }

  /** get a customer by ID. */

  static async get(id) {
    const results = await db.query(
      `SELECT id, 
         first_name AS "firstName",  
         last_name AS "lastName", 
         phone, 
         notes 
        FROM customers WHERE id = $1`,
      [id]
    );

    const customer = results.rows[0];

    if (customer === undefined) {
      const err = new Error(`No such customer: ${id}`);
      err.status = 404;
      throw err;
    }

    return new Customer(customer);
  }

  /** get all reservations for this customer. */

  async getReservations() {
    return await Reservation.getReservationsForCustomer(this.id);
  }

  /** save this customer. */

  async save() {
    if (this.id === undefined) {
      const result = await db.query(
        `INSERT INTO customers (first_name, last_name, phone, notes)
             VALUES ($1, $2, $3, $4)
             RETURNING id`,
        [this.firstName, this.lastName, this.phone, this.notes]
      );
      this.id = result.rows[0].id;
    } else {
      await db.query(
        `UPDATE customers SET first_name=$1, last_name=$2, phone=$3, notes=$4
             WHERE id=$5`,
        [this.firstName, this.lastName, this.phone, this.notes, this.id]
      );
    }
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  /** search for customers using first or last name or part of the name */

  static async searchCustomer(searchTerm) {
    const result = await db.query(
      `SELECT * FROM customers
      WHERE first_name LIKE $1
      OR last_name LIKE $1`
      , ['%'+searchTerm+'%']
    )
    // console.log('this is the query result for', searchTerm, result.rows);
    if(result.rowCount === 0){
      return false;
    }
    return result.rows[0];
  }

  /** top 10 customers with most reviews */

  static async bestCustomers(){
    const result = await db.query(
      `SELECT COUNT(id), customer_id
      FROM reservations
      GROUP BY customer_id
      ORDER BY COUNT(id) DESC
      LIMIT 10`
    )
    return result.rows;
  }


}

module.exports = Customer;
