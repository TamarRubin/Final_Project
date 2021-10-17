const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');
const morgan = require('morgan');

const recommendedProducts = require("./routes/recommendedProducts");
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/HLS")
//     .then(() => { console.log("connected to mongo") })
//     .catch(error => console.error(error));
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use("/recommendedProducts", recommendedProducts)

app.listen(5000, () => {
    console.log("listening on port 5000")
})