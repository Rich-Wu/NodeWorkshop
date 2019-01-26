const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
const port = 5050;

app.set('views', './views'); //add a k-v pair to an object
app.set('view engine', 'ejs');

const user = require('./models/user'); // user.userModel
const cohort = require('./models/cohort'); // cohort.cohortModel

// app.[VERB]([PATH], function(req,res) { // things to do })

app.get('/', (req,res) => {
  res.render('home.ejs')
})

app.get('/signup', (req,res) => {
  res.render('users/new.ejs')
})

app.get('/users', (req,res) => {
  let users = []
  user.userModel.findAll().then((user) => {
    for (u of user) {
      users.push(u);
    }
  }).then(() => {
    res.render('users/index.ejs', {users:users})
  })
})

app.post('/users', (req,res) => {
  let params = req.body
  // Create function
  // force: true will drop the table if it already exists
  user.userModel.sync({force: false}).then(() => {
    // Table created
    return user.userModel.create({
      name: params.name,
      password: params.password,
      email: params.email,
      education: params.education
    });
  });
  res.redirect('/users') // takes the path, not the file path
})

app.get('/new-cohort', (req,res) => {
  res.render('cohorts/new.ejs')
})

app.get('/cohorts', (req,res) => {
  let cohorts = []
  cohort.cohortModel.findAll().then((cohort) => {
    for (c of cohort) {
      cohorts.push(c);
    }
  }).then(() => {
    res.render('cohorts/index.ejs', {cohorts:cohorts})
  })
})

app.post('/cohorts', (req,res) => {
  let params = req.body
  // Create function
  // force: true will drop the table if it already exists
  cohort.cohortModel.sync({force: false}).then(() => {
    // Table created
    return cohort.cohortModel.create({
      name: params.name,
      startDate: params.startDate,
      endDate: params.endDate,
      courseId: params.courseId
    });
  });
  res.redirect('/cohorts')
})

app.get('/new-course', (req,res) => {
  res.render('courses/new.ejs')
})

app.listen(port, () => { console.log(`Express app listening on http://localhost:${port}`); })
