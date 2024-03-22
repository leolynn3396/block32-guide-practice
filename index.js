node_modules
package-lock.json
DS_Store

//importing packages
const pg = require('pg')
const express = require('express')
const client = new pg.Client(process.eventNames.DATABASE_URL || 'postgres://localhost/the_acme_notes_db') 
const app = express()

//Connect to the database
//in terminal "createdb the_acme_notes_db"
const init = async() => {
    await client.connect();
    console.log('connected to database');
    let SQL = ``;
    await client.quiery(SQL);
    console.log('tables created');
    SQL=``;
    await client.query(SQL);
    console.log('data seeded');
};
init();