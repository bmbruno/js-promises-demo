//
// Common examples of Promises being consumed - this is NONFUNCTIONAL code
//

GetDataFromServer("https://example.com/api/getPerson")
    .then(result => processResult(result))
    .then(data => updatePage(data))
    .catch(error => handleError(error));

async function LoadData(url) {
    try {
        let result = await GetDataFromServer(url);
        let data = await updatePage(data);
    } catch (error) {
        console.log(error);
    }
}

//
// Sync programming
//

let conference = "CodeMash";
let year = "10000"
console.log(`${conference} ${year}}`);


let url = "http://example.com/content";
let content = GetContentFromServer(url);
console.log(content);

//
// Async concept
//

let url = "http://example.com/content";
let content = GetContentFromServer(url);
console.log(content);

//
// Arrow function expression example
//

// Simple function
() => alert("Hello, world!");

// With params
(firstName, lastName) => alert(`${firstName} ${lastName}`);

// With name and body
let getAge = birthYear => { return (2022 - birthYear) };


//
// Top-level global objects
//

eval()
isFinite()
isNaN()
parseFloat()
parseInt()
Object
Function
Number
BigInt
Math
Date
Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
BigInt64Array
BigUint64Array
Promise
Generator
GeneratorFunction
AsyncFunction
AsyncGenerator
AsyncGeneratorFunction

//
// The Promise object (signature)
//

Promise( function )

Promise( function(resolve, reject) { } )

Promise( (resolve, reject) => { } )

//
// Callback
//

function getData(url, callback) {

    // Might take some time
    let data = loadFromServer(url);

    // Handle the result
    callback(data);
}

function processResult(data) {

    console.log("Status: " + data.status);
    /* do something interesting */
}

getData("http://example.com/getdata", processResult);

//
// Fetch example
//

let response = await fetch("http://testdata.local/codemash.json");
let data = await response.json();
console.log(data);

//
// Promise.finally()
//

let promise = new Promise(/* resolve or reject */);

promise
    .then(resolvedValue => console.log(resolvedValue))
    .catch(rejectedValue => console.log(rejectedValue))
    .finally(() => console.log("This function will always run."));

//
// Promise.any()
//

let promiseOne = new Promise(/* resolve in 1500ms */);
let promiseTwo = new Promise(/* resolve in 500ms */);
let promiseThree = new Promise(/* reject immediately */);

Promise.any([promiseOne, promiseTwo, promiseThree])
    .then(result => console.log(result));

//
// Promise.allSettled()
//

let promiseOne = new Promise((resolve) => { resolve("One resolved!"); });
let promiseTwo = new Promise((reject) => { reject("Two rejected!"); });

Promise.allSettled([promiseOne, promiseTwo, promiseThree, promiseFour])
    .then( results => {

        // Resolved promise has a VALUE 
        console.log(results[0].status + " " + result[0].value);

        // Rejected promise has a REASON
        console.log(results[0].status + " " + result[0].reason);

    });

//
// Promise.race()
//

let promiseOne = new Promise(/* resolve in 500ms */);
let promiseTwo = new Promise(/* resolve in 1750ms */);
let promiseThree = new Promise(/* reject immediately */);

Promise.race([promiseOne, promiseTwo, promiseThree])
.then(result => console.log(result))
.catch(error => console.log(error));

//
// Promise States
//

Promise.PromiseState: "pending", "fulfilled", "rejected"
Promise.PromiseResult: undefined