(function () {

    window.Demo.allSettled = function () {

        console.clear();

        /*

            Promise.allSettled()

            Given an array of promises, once all have settled, allSettled() collects the status and result of each promise and returns them in a new promise.

            The 'result' parameter populated by allSettled contains an array of objects, each with the following properties:

             * status: 'fulfilled' or 'rejected'
             * value: if status == 'fulfilled', this is the value provided by the promise
             * reason: if status == 'rejected', this is the value provided by the promise

        */

        let promiseOne = new Promise((resolve) => { resolve("One resolved!"); });
        let promiseTwo = new Promise((resolve) => { resolve("Two resolved!"); });
        let promiseThree = new Promise((resolve, reject) => { reject("Three rejected!"); });
        let promiseFour = new Promise((resolve) => { resolve("Four resolved!"); });

        //
        // Output the results (status, value, reason) of each settled promise
        //

        Promise.allSettled([promiseOne, promiseTwo, promiseThree, promiseFour])
            .then( results => {

                console.log("promiseOne result.status: " + results[0].status);
                console.log("promiseOne result.value: " + results[0].value);

                console.log("promiseTwo result.status: " + results[1].status);
                console.log("promiseTwo result.value: " + results[1].value);

                // 'promiseThree' was rejected, so we inspect the 'reason' instead of 'value'
                console.log("promiseThree result.status: " + results[2].status);
                console.log("promiseThree result.value: " + results[2].reason);

                console.log("promiseFour result.status: " + results[3].status);
                console.log("promiseFour result.value: " + results[3].value);

            });

        //
        // Alternatively, use forEach to iterate over the results array
        // 'promiseThree was rejected, so 'value' will be 'undefined'
        //

        Promise.allSettled([promiseOne, promiseTwo, promiseThree, promiseFour])
            .then((result) => result.forEach((result) => { 
                console.log(`Status: ${result.status} | Value: ${result.value}`) ;
            }));

    }


})();

