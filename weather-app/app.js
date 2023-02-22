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








