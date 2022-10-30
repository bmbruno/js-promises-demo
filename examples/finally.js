(function () {

    window.Demo.finally = function () {

        /*

            Promise.finally()

            This demonstrates the use of a finally() method that executes after all other chained functions are called, regardless of their outcome.

        */


        let promise = new Promise((resolve, reject) => {

            if (true) {
                resolve("RESOLVED!");
            } else {
                reject("REJECTED!");
            }
        
        });
        
        /*
        promise
            .then(resolvedValue => console.log(resolvedValue))
            .catch(rejectedValue => console.log(rejectedValue))
            .finally(() => console.log("This function will always run."));
        */

        promise
            .then(resolvedValue => window.Demo.log(resolvedValue))
            .catch(rejectedValue => window.Demo.log(rejectedValue))
            .finally(() => window.Demo.log("This function will always run."));


        window.Demo.render();
    }


})();

