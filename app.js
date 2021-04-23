const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors())

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
