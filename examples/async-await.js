(function () {

    window.Demo.asyncawait = function () {

        console.clear();

        /*

            async / await

            'async' and 'await' provide a different syntax for working with promises; they primarily help solve
            the problem of 'thenable hell' and long promise chains.

        */

        // 'async' tells the interpreter to not wait for this function - it can continue executing 
        // the rest of the program while this function does its thing
        async function GetData() {

            try {

                // Control flow pauses here and lets this promise fulfil
                let result = await longRunningFunction(6000);

                // When the promise fulfils, execution continues here
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

        // Control flow resumes here while the promise waits to fulfill
        console.log("Program continues to run past the async function...");

    }

})();

