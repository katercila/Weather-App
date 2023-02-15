//Object property shorthand

const name = 'Kat'
const userAge = 27

const user = {
    name,  //shorthands syntax, same as name: name, as long as it mthces variable 
    age: userAge,
    location: 'Charlotte'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock 

//destructoring syntax
//inside curly braces -> all properties we want to extract from an object
// const {label:productLabel, stock, rating = 5} = product //label:productLabel changes the name of 'label'
// console.log(productLabel)
// console.log(stock)
// console.log(rating) //will print undefined with no value, or can set it to a value in the curly brackets 
// console.log()

//function tht takes in product object

const transaction = (type, { label, stock = 0} = {}) => {
    console.log(type, label, stock)
}
transaction('order', product) //product is being passed with stock property