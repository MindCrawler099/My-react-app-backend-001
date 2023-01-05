const express = require('express');
const postCommentRouter = express.Router();

postCommentRouter.use(express.urlencoded({
    extended:true
}));
postCommentRouter.use(express.json());

postCommentRouter.route('/').post((req,res)=>{
    res.send({
        msg:'Successfully Connected'
    });
})

module.exports={
    postCommentRouter
}