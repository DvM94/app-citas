const express = require('express')
const app = express()
const rtmain = require('./routes/rtmain')
const rtdates = require('./routes/rtdates')
const port = process.env.PORT || 3000

//Template engine
const exphbs = require('express-handlebars')
app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', '.hbs')

//Middleware
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

//Router
app.use('/', rtmain)
app.use('/citas', rtdates)

//404 handler
app.use((req, res, next) => res.status(404).render('error'))

//Server
app.listen(port, ()=> console.log(`Server runs on port ${port}`))