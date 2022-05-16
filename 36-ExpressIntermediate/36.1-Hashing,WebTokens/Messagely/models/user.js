/** User class for message.ly */
const ExpressError = require('../expressError');
const db = require('../db');

const Message = require('./message');

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

  static async register(username, password, first_name, last_name, phone, join_at, last_login_at) {
    const result = await db.query(
      `INSERT INTO users (username, password, first_name, last_name, phone, join_at, last_login_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING username, first_name, last_name, phone, join_at, last_login_at`,
      [username, password, first_name, last_name, phone, join_at, last_login_at]
    );
    const created_user_details = result.rows[0];
    return created_user_details;
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) { }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() {
    const result = await db.query(
      `SELECT username, first_name, last_name, phone
      FROM users`
    );
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
      `SELECT username, first_name, last_name, phone, join_at, last_login_at
      FROM users
      WHERE username=$1`,
      [username]
    )
    return result.rows[0];
  };

  static async get_with_hashed_password(username) {
    const result = await db.query(
      `SELECT username, password, first_name, last_name, phone, join_at, last_login_at
      FROM users
      WHERE username=$1`,
      [username]
    )
    return result.rows[0];
  };

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) {
    const result = await db.query(
      `SELECT id FROM messages
      WHERE from_username=$1`,
      [username]
    )
    if (result.rowCount === 0) throw new ExpressError(`No Messages from ${username}`, 404);
    console.log('these are from messages', result.rows);

    // wait for all messages
    const messages = Promise.all(result.rows.map(message => Message.get(message.id)));

    return messages;
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  // static async messagesTo(username) { }
  static async messagesTo(username) {
    const result = await db.query(
      `SELECT id FROM messages
      WHERE to_username=$1`,
      [username]
    )
    if (result.rowCount === 0) throw new ExpressError(`No Messages from ${username}`, 404);
    console.log('these are from messages', result.rows);

    // wait for all messages
    const messages = Promise.all(result.rows.map(message => Message.get(message.id)));

    return messages;
  }


  async save() {
    const result = await db.query(
      `UPDATE users
      SET first_name=$2, password=$3, last_name=$4, phone=$5, join_at=$6, last_login_at=$7
      WHERE username=$1
      RETURNING *`,
      [this.username, this.first_name, this.last_name, this.phone, this.join_at, this.last_login_at]
    );
    return { status: 201, user: result.rows[0] }
  }
}


module.exports = User;