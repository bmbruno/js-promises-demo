(function () {

    window.Demo.asyncawait = function () {

        console.clear();

        /*

            async / await

            TEXT

        */

        // 'async' tells the interpreter to not wait for this function - it can continue executing 
        // the rest of the program while this function does its thing
        async function GetData() {

            try {

                // Control flow pauses here and lets this promise fulfil
                let result = await longRunningFunction(8000);

                // When the promise fulfils, execution continues
                console.log(result);

            } catch (exception) {

                // If the promise rejects, control flow moves to this catch block
                console.log(exception);

            }
        }

        // This simulates a function that takes a long time to complete using a promise
        function longRunningFunction(timeToRun) {

            return new Promise((resolve, reject) => {

                console.log("longRunningFunction promise starting...");
                
                setTimeout(() => {

                    resolve("longRunningFunction promise resolved.");

                }, timeToRun);
            
            });

        }

        // Entry point
        GetData();

        console.log("Program continues to run past the async function...");

    }

})();

