const express = require('express')
const connectDB = require('./db/connectDB')

const app = express()
const port = 2000
const web = require("./routes/web")
const cors = require('cors')
const fileUpload = require('express-fileupload')
app.use(fileUpload())

//template engines html css views
app.set('view engine', 'ejs')

app.use(cors())

//connect db
connectDB()

app.use(express.json())

//html css link
app.use(express.static('public'))

//route load
app.use('/',web)

//server create
app.listen(port, () => {
    console.log(`server start localhost: ${port}`)
  })