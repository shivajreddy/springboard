/** All the config for the app */

const DB_URI = (process.env.NODE_ENV === 'test') ? 'postgresql:///hashingfollowalong_test' : "postgresql:///hashingfollowalong";

const SECRET_KEY = process.env.SECRET_KEY || 'wtfsecret';

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR
};
