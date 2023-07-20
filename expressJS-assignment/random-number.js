const express = require('express');
 const app = express();

 const PORT = 3040;
 const HOSTNAME ='localhost';

//  let randomNumber = Math.random(); 
 app.get('/',(req,res)=>{
    res.send(`generate random number using /random`)
 })
 
 app.get('/random',(req,res)=>{
    res.send({random:Math.random()})
 })
 
 
 app.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
 })