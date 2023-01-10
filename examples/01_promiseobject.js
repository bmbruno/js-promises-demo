(function () {

    window.Demo.promiseObject = function () {

        console.clear();

        /*

            The Promise object

            This demonstrates how to write and use the Promise object.
            
            The Promise object accepts a single parameter: a function that itself takes two parameters:

                * resolve - a function to call when the promise succeeds
                * reject - a function to call when the promise fails
            
            The full signature for the promise object looks like:

                Promise( function ( resolveFunction, rejectFunction ) )

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