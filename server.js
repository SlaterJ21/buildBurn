'use strict'

require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/api', function(req,res,next{
  res.status(200).send('hello from API')
}))

app.get('/sauces/', function(req,res,next{
  res.sendStatus(200)
}))

app.get('/sauces/:id', function(req,res,next{
  res.status(200).send(req.params.id)
}))

app.post('/sauces', function(req,res,next{
  res.status(200).send(req.body)
}))

app.patch('/sauces/:id', function(req,res,next{
  let result = { id:req.params.id, name:req.body.name}
  res.status(200).send(result)
}))

app.delete('/sauces/:id', function(req,res,next{
  res.status(200).send(req.params.id)
}))

app.use(function(req,res,next){
  res.status(404).send({error: {message: "404 Not Found"}})
})

app.listen(port, function(){
  console.log(`Listening of port ${port}`)
})

module.exports = app
