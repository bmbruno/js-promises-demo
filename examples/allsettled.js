(function () {

    window.Demo.allSettled = function () {

        console.clear();

        /*

            Promise.allSettled()

            Given an array of Promises, allSettled() will return the values of each when all Promises have settled.

            The 'result' parameter populated by allSettled contains an array of objects, each with the following properties:

             * status: 'fulfilled' or 'rejected'
             * value: if status == 'fulfilled', this is the value provided by the promise
             * reason: if status == 'rejected', this is the value provided by the promise

        */

        let promiseOne = new Promise((resolve) => { resolve("One resolved!"); });
        let promiseTwo = new Promise((resolve) => { resolve("Two resolved!"); });
        let promiseThree = new Promise((resolve, reject) => { reject("Three rejected!"); });
        let promiseFour = new Promise((resolve) => { resolve("Four resolved!"); });

        // Logging 'result.value' for 'fulfilled' promises only
        Promise.allSettled([promiseOne, promiseTwo, promiseThree, promiseFour])
            .then((result) => result.forEach((result) => { 
                console.log(`Status: ${result.status} | Value: ${result.value}`) ;
            }));

        // Logging 'result.reason' for 'rejected' promises only
        Promise.allSettled([promiseOne, promiseTwo, promiseThree, promiseFour])
        .then((result) => result.forEach((result) => { 
            console.log(`Status: ${result.status} | Value: ${result.reason}`) ;
        }));

    }


})();

