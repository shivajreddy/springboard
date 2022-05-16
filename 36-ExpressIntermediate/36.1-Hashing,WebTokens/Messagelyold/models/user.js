/** User class for message.ly */
const db = require('../db');
const ExpressError = require('../expressError');


/** User of the site. */

class User {

  constructor(username, password, first_name, last_name, phone, join_at, last_login_at) {
    this.username = username;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.phone = phone;
    this.join_at = join_at;
    this.last_login_at = last_login_at;
  }

  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({ username: given_username, hashed_pw: given_password, first_name: given_first_name, last_name: given_last_name, phone: given_phone }) {
    const temp_join_at = new Date();
    const temp_last_login = new Date();
    const result = await db.query(
      `INSERT INTO users (username, password, first_name, last_name, phone, join_at, last_login_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING * `,
      // RETURNING username, password, first_name, last_name, phone`,
      [given_username, given_password, given_first_name, given_last_name, given_phone, temp_join_at, temp_last_login]
    );
    const psql_result = result.rows[0];
    const new_usr = new User(psql_result.username, psql_result.password, psql_result.first_name, psql_result.last_name, psql_result.phone, psql_result.join_at, psql_result.last_login_at);
    return new_usr;
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) { }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    const result = await db.query(
      `SELECT username, first_name, last_name, phone FROM users`
    )
    return result.rows;
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) {
    const result = await db.query(
      `SELECT username, first_name, last_name, phone, join_at, last_login_at FROM users
      WHERE username=$1`
      , [username]
    )
    if (result.rowCount === 0) throw { result: `❗️No user of ${username}`, status: 404 };
    const psql_row = result.rows[0];
    const usr = new User(psql_row.username, psql_row.password, psql_row.first_name, psql_row.last_name, psql_row.phone, psql_row.join_at, psql_row.last_login_at);
    return usr;
  }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) {
    // try {
    const result = await db.query(
      `SELECT id, to_username, body, sent_at, read_at from messages
        WHERE from_username=$1`,
      [username]);
    // if (result.rowCount === 0) throw { result: `No messages from ${username}` };
    return result.rows;
    // } catch (error) {
    //   return next(error);
    // }
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username) { }

  async save() {
    const result = await db.query(
      `UPDATE users
      SET password=$2, first_name=$3, last_name=$4, phone=$5, join_at=$6, last_login_at=$7
      WHERE username=$1
      RETURNING * `,
      [this.username, this.password, this.first_name, this.last_name, this.phone, this.join_at, this.last_login_at]);

    return result.rows[0];
  }
}


module.exports = User;