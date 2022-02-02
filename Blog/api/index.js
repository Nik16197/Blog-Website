const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth');

dotenv.config();
app.use(express.json())
// const URL = "mongodb+srv://admin:7XzKGxggIQPsGKkF@cluster0.1zycw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Databse connected"))
    .catch(e => console.log(e))

app.use("/api/auth", authRoute)

app.listen(7000, () => { console.log("Connected to the server") })