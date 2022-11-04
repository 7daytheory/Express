const express = require('express') //express package
const app = express()
const bodyParser = require('body-parser') //body-parser package
const port = 3000

//get access to form data
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  //use Number as currently adds them as a string
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send('Thanks for posting! <br /> The result of your calculator is ' + result);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
