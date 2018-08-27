console.log("Hello World");


var express = require('express');

var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
var jsonParser = bodyParser.json()


/*
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/logs', function(request, response) {
    console.log("here")
    console.log(request.body)
    response.end("success")
})
*/

app.post('/logs', jsonParser, function (req, res) {
    console.log(req.body.log)
    if (!req.body) return res.sendStatus(400)
  })

app.listen(3000, () => console.log('Example app listening on port 8080!'))