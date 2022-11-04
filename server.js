const express = require('express')
const app = express()
const port = 3000

//Display information at root of :3000
app.get('/', (req, res) => {
  console.log(req); //View request on cline
  console.log(res);  // view response on cline
  res.send('<h1>Example Response</h1>');
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
