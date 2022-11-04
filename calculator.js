const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //console.log(__dirname) - get path to file no matter if localhost or on server
  res.sendFile(__dirname + '/index.html') //display file
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
