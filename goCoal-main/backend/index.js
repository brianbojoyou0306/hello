require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./Routes/signup')
const authRoutes = require('./Routes/signin')


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
//routes

app.use("/api/login", authRoutes);//Login for users
app.use("/api/signup",userRoutes );

//hosting the server
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));