(function () {

    window.Demo.promiseObject = function () {

        console.clear();

        /*

            This demonstrates how to write and use the promise

        */

        const LongRunningFunctionThatMightSucceed = () => {


        };

        const myPromise = new Promise( ( resolve, reject ) => {

            // Start a long-running process
            let result = LongRunningFunctionThatMightSucceed();



        });
        
    }


})();

