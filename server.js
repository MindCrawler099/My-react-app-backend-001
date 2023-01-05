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
app.use(cors(corsConfig));

const port = 4000;

app.listen(port,()=>{
    console.log(`App running on http://localhost:${4000}`);
})