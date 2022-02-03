const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const multer = require('multer')

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post')
const categoryRoute = require('./routes/catogeries')

dotenv.config();
app.use(express.json())
// const URL = "mongodb+srv://admin:7XzKGxggIQPsGKkF@cluster0.1zycw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Databse connected"))
    .catch(e => console.log(e))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({ storage: storage });

app.use("/api/uploads", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded.")
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use('/api/category', categoryRoute)

app.listen(7000, () => { console.log("Connected to the server") })