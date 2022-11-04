const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Calculator Home');
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})