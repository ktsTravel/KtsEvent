const express = require("express");
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts')
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('layout', './Layouts/index')

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/javascript', express.static(__dirname + 'public/javascript'))


app.use(expressLayouts)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get('/', (req, res) => {
	res.render('Home/LandingPage')
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})