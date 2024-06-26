const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json())
app.use(cookieParser())

routes(app);

mongoose.connect(`mongodb+srv://thaianh110:${process.env.MONGO_DB}@cluster0.w3vfogp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        // console.log('Connect Db success!')
    })
    .catch((err) => {
        // console.log(err)
    })
app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})