const geocode = require('./utils/geocode') //this goes into geocode.js
const forecast = require('./utils/forecast')



const address = process.argv[2]

//if statement if there is no address
if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {     //only geocode if an address is provided data is an object
       
    if (error) {
          return console.log(error)
        } 
    
      
        forecast(latitude, longitude, (error, forecastData) => {   //getting this info from geocode.js 
            if (error) {
            return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
          })
    })
}

console.log(process.argv)
// const url = 'http://api.weatherstack.com/current?access_key=dc127f6627d2f65dadd588698d44aca9&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
// //grabs properties ex: current, daily, hourly
// if (error){
//     console.log('Unable to connect to weather service!')
// } else if (response.body.error) {
//     console.log('Unable to find location')

// } else {
//     console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
// }
// })
 
// Accept location via command line argument 







