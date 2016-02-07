import pg from 'pg';
import Sequelize from 'sequelize';

// point to production or local host
export const db = process.env.DATABASE_URL || 'msandusky://localhost:5432/thumbscheck';
// create a new db connection and connect to it
const client = new pg.Client(db);
client.connect();

// change to this format for production
//export const sequelize = new Sequelize('postgres://localhost:5432/thumbscheck', 'krisalbert');

// Connect sequelize

export const sequelize = new Sequelize('thumbscheck', 'msandusky', null, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});


