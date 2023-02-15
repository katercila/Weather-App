// console.log('Client side js is loaded!')

//select element 
const weatherForm = document.querySelector('form')
// grab what is typed in search box
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') //p tag in index.htb
const messageTwo = document.querySelector('#message-2')


//add event listener
//callback function runs everytime an event is called, function runs every time form is submitted
//e -> event
//How do you get information from a user using a form?

//path in src folder to -> app.js in public folder 
//form in index.hbs, when form is submitted, sends request to server to retrieve weather data 
//querySelector selects the form element and input element 
//when clicked on submit, event is triggered and callback function is executed

weatherForm.addEventListener('submit', (e) => { //addEventListener() callback function executes when event is triggered
    e.preventDefault() //prevents the default behavior of the form
    //location variable, extracts value in search bar
    const location = search.value
// before fetch, render loading message 
    messageOne.textContent = 'Loading...' //weather is being retrieved
    messageTwo.textContent = ''

fetch('http://localhost:3000/weather?address=!' + location).then((response) => {
    // fetch(/weather?address= + location).then((response) => {
        response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
            // console.log(data.error)
        } else {
            messageOne.textContent = data.location    //if things go well, render info
            messageTwo.textContent = data.forecast
           
        }
    })
})
})  



//QUESTION 2
//How do you create and wire up the search form?

//querySelector method is used to select the form element
//addEventListener method. The event listener listens for the "submit" event
//Form is submitted, the value of the input element is retrieved using the value property
//fetch method is used to make a request to a server that will provide the weather data for the specified location.
//.then method is used to handle the response from the server.