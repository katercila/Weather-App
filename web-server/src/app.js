//npm init -y. initiates in terminal 
//downloaded express 
//run nodemon src/app.js (live server)
//after adding utils folder, npm i request@2.88.0

const path = require('path')
const express = require('express') //express is a function 
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const forecast = require('./utils/forecast')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') //path to file itself, public file where the html doc is 
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

 

//Setup handlebars and views location
app.set('view engine', 'hbs')
//tell express to use template path
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//Setup static directory to serve -> path to file
app.use(express.static(publicDirectoryPath))  


//access path to handlebar index.hbs
//run modemon src/app.js, see results on webpage 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Katerin Ercila'
    })  
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Katerin Ercila'
    })

})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpText: 'Send us a message if you have any questions!',
        title: 'Help',
        name: 'Katerin Ercila'
    })
})

//app.com/weather
app.get('/weather', (req, res)=>{
    if (!req.query.address) {
        return res.send({
            errorr: 'You must provide an address.'
        })
    }
geocode(req.query.address, (error, { latitude, longitude, location} = {}) => {
    if (error) {
        return res.send({error })
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) { 
            return res.send({ error })
        }
        res.send ({
            forecast: forecastData,
            location,
            address: req.query.address
        })
    })
})

})




//express route handler
app.get('/products', (req, res) => {
if (!req.query.search) {  //only runs when there is no search term
     return res.send({
        error: 'You must provide a search term.'
     })
}

    console.log(req.query.search)
    // req.query //
    res.send({
        products: []
    })
})

//help specific 404
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Katerin Ercila',
        errorMessage: 'Help article not found.'
    })
})

//wild card character * error for pages we dont have
app.get('*',(req, res) => {
    res.render('404', {
        title: '404',
        name: 'Katerin Ercila',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server listening on 3000')
})

 