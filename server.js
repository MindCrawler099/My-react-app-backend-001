const express = require('express');
const cors = require('cors');
const corsConfig = (req,callback)=>{
    blackList = [];
    if(blackList.indexOf(req.header('Origin'))!==1 || !req.header('Origin')){
        callback(null,true);
    }else{
        callback(new Error('There wa san error with xss'),false);
    }
}

const app = express();
const port = 4000;

app.use(cors(corsConfig));

app.use('/postcomment',require('./router/postCommentRouter').postCommentRouter);



app.listen(port,()=>{
    console.log(`App running on http://localhost:${4000}`);
})