(function () {

    window.Demo.finally = function () {

        console.clear();

        /*

            Promise.finally()

            Returns a new promise that runs after all other promises have settled. This will always execute, much like the finally of a try...catch...finally block.

        */

        let promise = new Promise((resolve, reject) => {

            if (true) {
                resolve("RESOLVED!");
            } else {
                reject("REJECTED!");
            }
        
        });

        promise
            .then(resolvedValue => console.log(resolvedValue))
            .catch(rejectedValue => console.log(rejectedValue))
            .finally(() => console.log("This function will always run."));

    }


})();