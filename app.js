const express = require("express");

const app = express();

//Allow all requests from all domains & localhost
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
  next();
});

app.use(express.json());
app.use(express.urlencoded({
extended: true
}));

var ingredients = [
  {
      "id": "1",
      "text": "Assessments"
  },
  {
      "id": "2",
      "text": "Facecode"
  },
  {
      "id": "3",
      "text": "Hackathons"
  },
];


app.get('/', function(req, res) {
  console.log("GET From SERVER");
  res.send(ingredients);
});

app.post('/', function(req, res) {
  const data = Object.keys(req.body)[0];
  const ingredient = JSON.parse(data);
  console.log("POST From SERVER");
  ingredients.push(ingredient);
  res.status(200).send("Successfully posted ingredient");
});


module.exports = app;
