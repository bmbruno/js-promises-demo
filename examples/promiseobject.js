(function () {

    window.Demo.promiseObject = function () {

        console.clear();

        /*

            This demonstrates how to write and use the Promise object.

        */

        //
        // Support function(s)
        //

        function DoLotsOfWork() {

            // Simulate an HTTP 200 or 404 status code
            return (Math.random() > 0.5) ? 200 : 404;

        };

        //
        // Create a new Promise 
        //

        // The Promise() object takes a function with two params: resolve, reject
        let myPromise = new Promise( ( resolve, reject ) => {

            // Start a process without a definitive completion time
            // This might be a network call, for example
            let result = DoLotsOfWork();

            // We determine what is considered a success or failure
            // This could be anything; for example, if HTTP 200 was returned from a network call
            if (result == 200)
                resolve(result);
            else
                reject("HTTP " + result);
        });

        //
        // Execute the promise (note the order of output in the console)
        //

        console.log("Starting some task that will take time...");

        myPromise
            .then(status => console.log("OK - " + status))
            .catch(error => console.log("ERROR - " + error));
        
        console.log("Hanging out while that happens.");

    };


})();

