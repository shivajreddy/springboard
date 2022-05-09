/** Reservation for Lunchly */

const moment = require("moment");

const db = require("../db");


/** A reservation for a party */

class Reservation {
  constructor({id, customerId, numGuests, startAt, notes}) {
    this.id = id;
    this.customerId = customerId;
    this.numGuests = numGuests;
    this.startAt = startAt;
    this.notes = notes;
  }

  /** formatter for startAt */

  getformattedStartAt() {
    return moment(this.startAt).format('MMMM Do YYYY, h:mm a');
  }

  /** given a customer id, find their reservations. */

  static async getReservationsForCustomer(customerId) {
    const results = await db.query(
          `SELECT id, 
           customer_id AS "customerId", 
           num_guests AS "numGuests", 
           start_at AS "startAt", 
           notes AS "notes"
         FROM reservations 
         WHERE customer_id = $1`,
        [customerId]
    );

    return results.rows.map(row => new Reservation(row));
  }

  // get the reservation of a given id
  static async getReservationById(reservationId){
    const results = db.query(
      // since the properties names are different
      `SELECT cusomer_id AS customerId, num_guests AS numGuests, start_at AS startAt, notes
      WHERE id=$1`
      , [reservationId]
    )
  }

  //? given a customer id, update their reservations

  async save(){
    console.log('save function starts here. Given date is ', this, this.startAt);
    if(this.id === undefined){
      const result = await db.query(
        `INSERT INTO reservations (customer_id, num_guests, start_at, notes)
        VALUES ($1, $2, $3, $4)`
        , [this.customerId, this.numGuests, this.startAt, this.notes]
      )
      this.id = result.rows[0].id;
    }
    else{
      const result = await db.query(
        `UPDATE reservations SET start_at=$2, num_guests=$3, notes=$4
        WHERE customer_id=$1`
        , [this.customerId, this.startAt, this.numGuests, this.notes]
      )
    }
    // console.log('this is added in the reservations', result.rows)
  }
}



module.exports = Reservation;
