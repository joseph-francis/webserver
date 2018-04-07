const express = require('express')
const hbs = require('hbs') //handlebars

var app = express()

const port = process.env.PORT || 3000

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => { //call on next to run the server.
  res.render('maintanance.hbs', {
    header: 'Maintanance'
  })
})

hbs.registerHelper('getFullYear', () => {
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => { //with arguments
  return text.toUpperCase()
})

app.get('/', (req, res) => {

  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to home page'
  })

  //API request
  // res.send({
  //   name: 'Joseph',
  //   likes: [
  //     'biking',
  //     'cities'
  //   ]
  // })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  })
})

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Shit went wrong!!!'
  })
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})
