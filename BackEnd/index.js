const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());


app.get('/', (req, res)=>{
    res.send({status:"ok", data:"sample api successfull"});
})


app.get('/posts', (req,res)=>{
    res.send([{userId:1, id:101, title:"first Post", body:"sample body of first post"},
    {userId:2, id:102, title:"second Post", body:"sample body of second post"},
    {userId:3, id:103, title:"third Post", body:"sample body of third post"},
    {userId:4, id:104, title:"fourth Post", body:"sample body of fourth post"}


])
})

app.listen(3000, ()=>{
    console.log("serve is listning on port 3000");
})