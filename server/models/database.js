import pg from 'pg';
import Sequelize from 'sequelize';

// point to production or local host
export const db = process.env.DATABASE_URL || 'postgres://localhost:5432/thumbscheck';
// create a new db connection and connect to it
const client = new pg.Client(db);
client.connect();

//export const sequelize = new Sequelize('postgres://localhost:5432/thumbscheck', 'krisalbert');
//var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
//client.query.on('connect', function() { console.log("database connected"); });
//client.query.on('end', function() { client.end(); });

// Connect sequelize

//export default db;
//export sequelize;

export const sequelize = new Sequelize('thumbscheck', 'krisalbert', null, {
 host: 'localhost',
 dialect: 'postgres',

 pool: {
   max: 5,
   min: 0,
   idle: 10000
 }
});

console.log('db connection', sequelize);
