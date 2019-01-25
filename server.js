const express = require('express');
const app = express();
const port = 5050;

app.set('views', './views'); //add a k-v pair to an object
app.set('view engine', 'ejs');

// app.[VERB]([PATH], function(req,res) { // things to do })

app.get('/', (req,res) => {
  res.render('home.ejs')
})
app.get('/signup', (req,res) => {
  res.render('users/new.ejs')
})
app.get('/users', (req,res) => {
  res.render('users/index')
})
app.post('/users', (req,res) => {

  res.redirect('/users') // takes the path, not the file path
})
app.get('/new-cohort', (req,res) => {
  res.render('cohorts/new.ejs')
})
app.get('/new-course', (req,res) => {
  res.render('courses/new.ejs')
})

app.listen(port, () => { console.log(`Express app listening on http://localhost:${port}`); })
