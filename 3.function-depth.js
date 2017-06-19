

/*

    how to create function-obj in.js-lang?

    2-ways

    way-1 : function declaration / Named function

    => func-obj will get created at context-creation phase.
    => always get hoisted with func-obj 

    way-2 : function expression / Anonymous function

    => func-obj will get created at context-execution phase
    => will not get hoisted with func-obj , we shud invoke after expression 
    => to create func-obj based on input params or conditions

*/

//-------------------------------------------------------

// way-1 : function declaration

//console.log(add(12,13));

//function add(n1, n2) {
//   return n1 + n2;
//}

//console.log(add(12,13));

//-------------------------------------------------------

// way - 2 : function expression

//console.log(add(12, 13));

//var add = function(n1, n2) {
// return n1 + n2;
// }

//console.log(add(12, 12));


//-------------------------------------------------------

// 1. Functions as values

function sayHello() {
    console.log('Hello There..');
}

//sayHello();

var sayHi = sayHello;
//sayHi();

//-------------------------------------------------------

// 2. Function as args

function greet(arg) {
    if (arg) {
        if (typeof arg === 'function') {
            arg();
            return;
        }
    }
    console.log('Hello...');
}

//greet();
greet(function () { console.log('Ola....') });

// // e.g

var arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
arr.sort();
arr.sort(function (a, b) { return a - b; });
//console.log(arr);


//-------------------------------------------------------

// Function as a return

function teach() {
    console.log('teaching...');
   
    function learn() {
        console.log('learn...');
    }

    function homework() {
        console.log('Do Home Work');

    }

    return homework;
}

var learnFunc = teach();
//learnFunc();

//learnFunc();
//learnFunc();



//-------------------------------------------------------


function giveBack(a,b,c) {
    console.dir(arguments);
    return arguments[2];
}

 console.log(giveBack(1));


function sum() {
    var i = 0,
        len = arguments.length,
        result = 0;
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;
}

//-------------------------------------------------------

function abc() {
    console.log('No args');
}
// var abc = new Function('...');

function abc(a) {
    console.log('One arg');
}
// var abc = new Function('...');

// abc();

//-------------------------------------------------------

// No block scope till ES-5

 function f() {

     {
         let i = 1000;    
     }

     console.log("I value is "+i);

 }

 f();


//-------------------------------------------------------


 //function f() {
 //    k = 100;
 //}
 
 //f();

 //console.log(k);


  function outer(){  // global

         var x=100;
        function inner(){
            x=400;
            console.log('x: '+x);
          
        }
        console.log('X Value is: '+x);
        return inner;

  }

  var obj=outer();
  obj();












