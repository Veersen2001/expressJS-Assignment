const express = require('express');
 const app = express();

 const PORT = 3030;
 const HOSTNAME ='localhost';

 
 app.get('/',(req,res)=>{
    res.send({msg:`I am Homepage`})
 })
 app.get('/about',(req,res)=>{
    counter++;
    res.send({msg:`I am About Page`})
 })
 app.get('/contact',(req,res)=>{
    counter--;
    res.send({email:`sopport@pwskills.com`});
 })

 app.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
 })