const express = require('express');
const app = express();
const port = 5050;

app.set('views', './views'); //add a k-v pair to an object
app.set('view engine', 'ejs');

app.listen(port, () => { console.log(`Express app listening on http://localhost:${port}`); })
