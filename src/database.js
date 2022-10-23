// var mysql = require('mysql');
import mysql from 'mysql2'

export const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'parcialii'
});

conn.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + conn.threadId);
});