const express = require('express');
const app = express();
const port = 5050;

app.set('views', './views'); //add a k-v pair to an object
app.set('view engine', 'ejs');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'development.sqlite3'
});

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

// Model definition
const User = sequelize.define('user', {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  education: Sequelize.INTEGER
});

// create function
sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

app.listen(port, () => { console.log(`Express app listening on http://localhost:${port}`); })
