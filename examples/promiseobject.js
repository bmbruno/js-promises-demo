(function () {

    window.Demo.promiseObject = function () {

        console.clear();

        /*

            This demonstrates how to write and use the Promise object.

        */

        //
        // Support functions
        //

        // A largers 'baseNumber' value will significantly extend the time this fucntions takes
        function DoLotsOfWork(baseNumber) {

            let startTime = performance.now();

            // Borrowed from: https://gist.github.com/sqren/5083d73f184acae0c5b7
            let result = 0;	
            for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
                result += Math.atan(i) * Math.tan(i);
            };

            // Fake an occasional error (return negative status code)
            if (Math.random() > 0.5) {
                return -1;
            }

            let endTime = performance.now();

            // Return execution time to indicate success
            return (endTime - startTime);

        };

        //
        // Create a new Promise for later use
        //

        const myPromise = new Promise( ( resolve, reject ) => {

            // Start a long-running process
            let result = DoLotsOfWork(11);

            if (result > 0)
                resolve(result);
            else
                reject("Code: " + result);
        });

        console.log("Starting lots of work...");

        myPromise
            .then(result => console.log(result))
            .catch(error => console.log("ERROR: " + error));
        
        console.log("Hanging out while that happens.");

    };


})();

