const express = require('express')
const app = express()
const port = 3000

//Display information at root(3000)
// app.get('/', (req, res) => {
//   res.send('<h1>Home page</h1>');
// })

//localhost:300/contacts
// app.get('/contacts', (req, res) => {
//   res.send('<h1>Contact Chiefs Management</h1>');
// })
//
// //localhost:300/about
// app.get('/about', (req, res) => {
//   res.send('<h1>About the Chiefs</h1><br /><h2>Kansas City Chiefs</h2>');
// })
//
// //installed nodemon so it auto refreshes server anytime it changes
// app.listen(port, () => {
//   console.log(`Listening on ${port}`)
// })
