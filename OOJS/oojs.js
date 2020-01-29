/***************************
* Basic Object creation in JS
****************************/

// var book = {
//     name: 'JavaScript',
//     author: 'John Smith',
//     page: 200,
//
//     print: function () {
//         console.log('Book name : '+this.name, this.page);
//     }
// }
// book.publishYear = 2015;
// console.log('This is book is Publish year : '+book.publishYear);
// console.log(`This is book is Publish year : ${book.publishYear}`); //another process of print in js

// console.log(book);
// book.print();



/***************************
 * Basic Object creation in JS
 ****************************/

function Person(name,email) {
    this.name = name;
    this.email = email;
}

var p1 = new Person('Ahesanul Mahbub', 'shovonbd321@gmail.com');
var p2 = new Person('Siddik', 'siddik@gmail.com');
var p3 = new Person('Islamul', 'islamul@gmail.com');

var people = [p1,p2,p3];

// console.log(p1.name);
// console.log(p1.email);
// console.log(people);

people.forEach(function (Person) {
    console.log('Email Address : '+Person.email);
})



