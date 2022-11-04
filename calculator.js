const express = require('express')
const app = express()
const bodyParser = require('body-parser') //body-parser package
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  //console.log(__dirname) - get path to file no matter if localhost or on server
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  res.send('Thanks for posting!');
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
