const { Client } = require('pg');
const fs = require('fs');
var express = require('express');
var router = express.Router();
const db_info = require('../conf/postgresql.json');
const client = new Client(db_info);

function connect(){
    console.log("connect()")
    client.connect();    
}

function disconnect(){
    console.log("disconnect()")
    client.end()
}

function gen_sql_insert(header){    
    array = Array(header.length)
    for (let i = 0; i < array.length; i++) {
        array[i] = "$"+(i+1);
    }
    array = array.toString()
    var sql = 'INSERT INTO seawater ("'+header.join('","')+'") VALUES('+array+') RETURNING *';
    return sql
}

function insert(sql_insert, values){    
    // Execute INSERT command
    client.query(sql_insert, values, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {        
        console.log(res);
    }
    });
}

router.get('/', function(req, res, next) {
    console.log("/apiservice URL SELECT QUERY CONNECT TEST WEB PAGE")

    // SELECT SAMPLE
    client.query("SELECT * FROM table LIMIT 1", function(err, results){
        res.render('main',{data : "DB Connect!", apiservice : results});
    });
});

// Export functions\
module.exports = { 
    router:router,
    connect:connect,
    disconnect:disconnect,
    insert:insert,
    gen_sql_insert:gen_sql_insert
};
