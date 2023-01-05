const express = require('express');
const postCommentRouter = express.Router();

postCommentRouter.use(express.urlencoded({
    extended:true
}));
postCommentRouter.use(express.json());

postCommentRouter.route('/').post((req,res)=>{
    const dummyresponse = `${req.body.title} and ${req.body.text}`;
    console.log(dummyresponse);
    res.json({
        title:req.body.title,
        text:req.body.text
    })
})

module.exports={
    postCommentRouter
}