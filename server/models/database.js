import pg from 'pg';
import Sequelize from 'sequelize';

// point to production or local host
export const db = process.env.DATABASE_URL || 'postgres://localhost:5432/thumbscheck';
// create a new db connection and connect to it
const client = new pg.Client(db);
client.connect();

// change to this format for production
//export const sequelize = new Sequelize('postgres://localhost:5432/thumbscheck', 'krisalbert');

// Connect sequelize
<<<<<<< c5bb1f098b226b320b9a6474602ad1f4fbee73a8
export const sequelize = new Sequelize('thumbscheck', 'postgres', null, {
<<<<<<< a57a5468df865c657e39ec3ac41a65c1894a7e84
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
=======
=======

//export default db;
//export sequelize;

export const sequelize = new Sequelize('thumbscheck', 'honree', null, {
>>>>>>> Troubleshoot all of the db bugs; now running
 host: 'localhost',
 dialect: 'postgres',
 pool: {
   max: 5,
   min: 0,
   idle: 10000
 }
});
<<<<<<< c5bb1f098b226b320b9a6474602ad1f4fbee73a8

=======
>>>>>>> Troubleshoot all of the db bugs; now running
>>>>>>> Troubleshoot all of the db bugs; now running
