const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=dc127f6627d2f65dadd588698d44aca9&query=40.8267,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    //response.on function allows us register handle 
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()