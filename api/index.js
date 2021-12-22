//import express from 'express'
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(console.log("connected to MongoDB"))
.catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
// This is not good practice to write these operations urls inside the index.js file 

//app.use('/', (req , res) => {
//    console.log('Hey, your server is listening to browser');
//})

app.listen("5000" , ()=>{
    console.log('This is my backend server');
});