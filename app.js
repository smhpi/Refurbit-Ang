const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'); 
const app = express();
app.use(express.static(__dirname));
 
app.use(bodyParser.json()); // support json encoded bodies

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
app.use(cors(corsOptions))
//***** */
const request = require('request');
var convert = require('xml-js');
request('https://marketplace.bestbuy.ca/api/offers?api_key=fa4ab3b8-4421-4a9a-9e2d-6c087e7bc9ce&max=100', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  
  console.log("Product Title:" , body.offers[0].product_title);
});

//****** */

/*
var fs = require('fs');
var xml = fs.readFileSync('https://marketplace.bestbuy.ca/api/offers?api_key=fa4ab3b8-4421-4a9a-9e2d-6c087e7bc9ce&max=100','utf8');

var result = convert.xml2json(xml, Option);
console.log(result); */
// var jsonContent = JSON.parse(result);
// console.log("Product Title:" , jsonContent);


// some data for the API
var recommendations = [
  { "cate": 1, "name": "Donuts" },
  { "id": 2, "name": "Pizza" },
  { "id": 3, "name": "Tacos" }
];
 
var books = [
  { "title": "Hitchhiker's Guide to the Galaxy" },
  { "title": "The Fellowship of the Ring" },
  { "title": "Moby Dick" }
];
 
var movies = [
  { "title": "Ghostbusters" },
  { "title": "Star Wars" },
  { "title": "Batman Begins" }
];
 
// the "index" route, which serves the Angular app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'src/index.html'))
});

// the GET "books" API endpoint
app.route('/api/books').get((req, res) => {
    res.send(books);
});
 
// the GET "movies" API endpoint
app.get('/api/movies', function (req, res) {
    res.send(movies);
});
 
// the GET "foods" API endpoint
app.get('/api/food', function (req, res) {
    res.send(foods);
});
 
// POST endpoint for creating a new food
app.post('/api/food', function (req, res) {
    // calculate the next ID
    let id = 1;
    if (foods.length > 0) {
        let maximum = Math.max.apply(Math, foods.map(function (f) { return f.id; }));
        id = maximum + 1;
    }
    let new_food = {"id": id, "name": req.body.name};
    foods.push(new_food);
    res.send(new_food);
});
 
// PUT endpoint for editing food
app.put('/api/food/:id', function (req, res) {
    let id = req.params.id;
    let f = foods.find(x => x.id == id);
    f.name = req.body.name;
    res.send(f);
});
 
// DELETE endpoint for deleting food
app.delete('/api/food/:id', function (req, res) {
    let id = req.params.id;
    let f = foods.find(x => x.id == id);
    foods = foods.filter(x => x.id != id);
    res.send(f);
});
 
// HTTP listener
app.listen(3000, () => {
    console.log('Example listening on port 3000!');
});
module.exports = app;