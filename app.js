const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const author_route = require('./Routes/author.js')
const connectDB = require('./db.js')
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
require('dotenv').config()
const expressLayouts = require('express-ejs-layouts')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000
const apple=1;
const orange=2
const apprun = () => {
	connectDB()
	app.listen(PORT);
}
apprun();