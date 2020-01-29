// function outer() {
    
//     function inner() {
//         console.log('Hello, I am Inner function');
//     }
//     inner();
//     console.log('Hello, I am Outer function');
// }
// outer();

// function multyadd(a, b) {
//     function sum() {
//         return a+b;
//     }

//     function sub() {
//         return a-b;
//     }

//     function times() {
//         return a*b;
//     }

//     function div() {
//         return a/b;
//     }

//     return result = sum() + sub() + times() + div();
// }

// multyadd(6, 8);
// console.log(result);


// function name(firstName, lastName, gendar) {
//     var output;
//     if(gendar === 'male') {
//         var output = 'Mr. ' +firstName+ ' '+ lastName;
//         //return output;
//     } else if(gendar === 'female') {
//         var output = 'Ms. ' +firstName+ ' '+ lastName;
//         //return output;
//     }
//     return output;
// }
// var result = name('Ahesanul', 'Mahbub', 'male');
//     console.log(result);

// var myNull = null;
// console.log(typeof myNull);

// console.log(null*5);
// console.log(undefined*10);

// console.log(0/0);
// console.log(1/0);
// var myNaN = Math.sqrt(-1);
// console.log(typeof myNaN);
// console.log(NaN == NaN);
// console.log(isNaN(myNaN));

// function bar() {
//     return foo;
//     foo = 10;
//     function foo () {}
//     var foo = `100`;
// }
// console.log(typeof bar());


/******************
* Callback 
******************/

// function Hello(name) {
//     print(name);
//     print('Hello, I\'m here..');
// }
// function print(pName){
//     console.log(pName);
// }

// Hello('AM Shovon');


/***********************************************/
// function hello(name,print){
//     print(name);
// }

// hello('AM Shovon', function(name){
//     console.log('Hey, '+name);
// });

// hello('AHESANUL', function(name) {
//     console.log('Hello, I am '+name);
// });

// hello('AHESANUL MAHBUB', function(name) {
//     console.log('Length of : '+name.length);
// });


/***********************************************/

// var myName = {
//     name: 'AM Shovon',
//     age: 20,
//     email: 'shovonbd321@gmail.com'
// }

// function nowPrint(person, callback) {
//     console.log('Person: '+person.name + '('+person.age+')');

//     if (person.age >= 18) {
//         callback(person.email);
//     }else{
//         console.log('Sorry! You are very small..');
//     }
// }
// nowPrint(myName, function(email){
//     console.log('Email sent to - '+email);
// });


/************** Array sort *********************/

// var arr = [10, 5, 22, 33, 45, 80, 20, 60, 45, 65, 6];

//small to big sorting
// arr.sort(function(a, b){
//     return a - b;
// });

//big to small sorting
// arr.sort(function(a, b){
//     return b - a;
// });
// console.log(arr);


//object sorting

// var people = [
//     {name: 'Mr. Shovon', age: 22},
//     {name: 'AM Shovon', age: 21}, 
//     {name: 'siddik', age: 25},
//     {name: 'Islamul', age: 30},
//     {name: 'Arif', age: 36},
//     {name: 'Emon', age: 20}
// ];

// people.sort(function(a, b) {
//     return a.age - b.age;
// });

// people.sort(function(a, b) {
//     if(a.name > b.name){
//         return 1;
//     } else if (a.name < b.name) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(people);


/************** Foreach *********************/

// var array = [4, 2, 1, 3, 6, 8, 7, 14];

// array.forEach(function(numbers, index, array) {
//     console.log('Array Numbers : ' +numbers + ' Index is : '+index + ' Array is : '+ array);
// });

// function loop(array, callback) {
//     for(var i=0; i< array.length; i++){
//         callback(array[i], i);
//     }
// }
// loop(array, function(element, i) {
//     console.log('Element is : '+ element + ' Index is : '+ i);
// });


/************** Filter *********************/

// var array = [4, 2, 1, 3, 6, 8, 7, 14, 21, 33, 10, 15, 22, 26, 80, 50];

// var newarr = [];
// for(var i=0; i<array.length; i++) {
//     if(array[i] %2  == 0){
//         newarr.push(array[i]);
//     }
// }
// console.log('Print '+newarr);


/**
 * Using JavaScript FILTER Function
**/

// var newarr = array.filter(function(value){
//     return value % 2 == 1;
// });
// console.log('New array : ' + newarr);

/******** CALLBACK - FUNCTION  filter number **********/

// function myfilter(array, callback) {
//     var newarr = [];

//     for(var i = 0; i < array.length; i++) {
//         if(callback(array[i])){
//             newarr.push(array[i]);
//         } 
//     }
//     return newarr;
// }
// var myArr = myfilter(array, function(element) {
//     return element % 2 == 1;
// });

// console.log('New filter array : '+myArr);



/******** Maped Array **********/

// var array = [4, 2, 1, 3, 6, 8, 7, 14, 21];

// var newarr = [];

// for (var i=0; i<array.length; i++){
//     newarr.push(array[i] + 2);
// }
// console.log('Added 2 all value : '+newarr);


/**
 * Using JavaScript MAP Function
**/

// let newarray = array.map(function(value) {
//     return value + 2;
// });
// console.log('New map array : ' +newarray);


/******** Function of Maped Array **********/


// function myMap(array, callback) {
//      var newarr = [];

//      for(var i=0; i<array.length; i++){
//          newarr.push(callback(array[i]));
//      }

//      return newarr;
// }

// var map = myMap(array, function(element) {
//     return element + 2;
// });
// console.log('My New maped array : '+map);



/******** Reduce Function  **********/

// var array = [4, 2, 1, 3, 6, 8, 7, 14, 21];

// var sum = 0;
// for (var i=0; i<array.length; i++){
//     sum =+array[i];
// }
// console.log('Result :'+sum);


// var myRed = array.reduce(function(a,b) {
//     return a+b;
// });
// console.log('All Array sum : '+myRed);



















