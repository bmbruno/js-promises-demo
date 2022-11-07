//
// Common examples of Promises being consumed
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
// Sync vs async programming
//

let conference = "CodeMash";
let year = "10000"
console.log(`${conference} ${year}}`);

function sayFullName(first, last) {
    console.log(`${first} ${last}`);
    return;
}

let firstName = "Jonathan";
let lastName = "Archer";

sayFullName(firstName, lastName);

//
// Arrow function expression example
//

// Simple function
() => console.log(something);

// With params
(firstName, lastName) => alert(`${firstName} ${lastName}`);

// With name and body
let getAge = birthYear => { return (2022 - birthYear) };


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
// Promise.race()
//

let promiseOne = new Promise(/* resolve in 500ms */);
let promiseTwo = new Promise(/* resolve in 1750ms */);
let promiseThree = new Promise(/* reject immediately */);

Promise.race([promiseOne, promiseTwo, promiseThree])
.then(result => console.log(result))
.catch(error => console.log(error));