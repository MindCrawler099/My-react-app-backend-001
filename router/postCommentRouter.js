const express = require('express');
const mysql = require('mysql');

const postCommentRouter = express.Router();

postCommentRouter.use(express.urlencoded({
    extended:true
}));
postCommentRouter.use(express.json());

const mysqlconnector = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'reactjs001commentsdb'
});

mysqlconnector.connect((error)=>{
    if(error){
        throw Error('The database could not be connected to');
    }else{
        console.log('Connected to database');
    }
});


postCommentRouter.route('/').post((req,res)=>{
    const dummyresponse = `${req.body.title} and ${req.body.text} and ${req.body.time}`;
    console.log(dummyresponse);

    // const createTableQuery = 'CREATE TABLE IF NOT EXISTS commentstable( commentid INT AUTO_INCREMENT PRIMARY KEY,commenttitle TEXT NOT NULL,commenttext TEXT NOT NULL,commentdate DATETIME NOT NULL)';
    // mysqlconnector.query(createTableQuery,(error)=>{
    //     console.error(`Table could not be created. Also, ${error.message}`);
    // })

    const insertPostDetailsQuery = `INSERT INTO commentstable(commenttitle,commenttext,commentdate) VALUES ( ? , ? , ? )`;
    console.log([req.body.title,req.body.text,req.body.time])
    mysqlconnector.query(insertPostDetailsQuery,[req.body.title,req.body.text,req.body.time],(error,results)=>{
        if(error){throw error}
        console.log('Inserted');
    });

}).get((req,res)=>{
    const selectAllPostsQuery = `SELECT * FROM commentstable`;
    mysqlconnector.query(selectAllPostsQuery,(error,results)=>{
        if(error) throw error;
        res.json({
            posts:results
        })
    })
})

module.exports={
    postCommentRouter
}