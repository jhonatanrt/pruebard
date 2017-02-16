var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Ventana de prueba')
})

app.get('/votes', function (req, res) {
  res.send('Ventana de votos')
})

app.listen(3000)
