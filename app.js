require('dotenv').config();

//init packages
const express      = require('express');
const bodyParser   = require('body-parser');

const app = express();
const port = process.env.DEV_PORT;

//Declate routes
const exampleRoutes = require('./routes/exampleRoutes');

//Start app
app.listen(port);

//Middleware
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', (req, res) => {
  res.render("index");
});

app.use('/example', exampleRoutes);

app.use((req, res) => {
  res.status(404).render('404');
});