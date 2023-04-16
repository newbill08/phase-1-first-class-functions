let a = 2;
let b = 3;

// Extra function to be used as "receivesAFunction" callback function
function addEventListener(a,b){return a+b}


//      1) Take a callback function as an argument
//      2) Call the callback function
function receivesAFunction(addEventListener){
    addEventListener();    
} 

//      1) take no arguments
//      2) return a named function
function returnsANamedFunction(){
    return  receivesAFunction
}

//Sample of 'Anonoymous function' assigned to variable sampleVariable

/*
let sampleVariable = function() {
    console.log('Anonymous function');
};
*/

//          1) Take no arguments
//          2) Return an anonymous function

function returnsAnAnonymousFunction(){
    return function() {
        console.log('Anonymous function');
    };
}


