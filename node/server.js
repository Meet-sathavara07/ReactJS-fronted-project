const express = require('express')
const app = express()
// require('dotenv').config()


const port = process.env.PORT || 3000; 

// app.use(function(req, res, next) {
//     // res.status(400);
//     // res.send("error");
//     next();
  
// });

app.get('/', (req, res, next) => {
  res.send({a : 1})
})

app.get('/about', (req, res, next) => {
    res.send("about page")
  })
  app.get('/contact', (req, res, next) => {
    res.send("contact page")
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
