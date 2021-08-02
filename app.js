const express= require("express");
const app=express();
const path=require('path');
const port= process.env.PORT || 800;


app.use('',express.static('static'));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(port,()=>{
    console.log(`This applciation started on ${port}`)
});