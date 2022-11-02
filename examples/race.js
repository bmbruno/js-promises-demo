(function () {

    window.Demo.allSettled = function () {

        console.clear();

        /*

            Promise.race()

            SHORT VERSION: settles the first promise that's fulfilled, whether it's rejected or resolved

        */

        let promiseOne = new Promise((resolve) => { resolve("One resolved!"); });
        let promiseTwo = new Promise((resolve) => { resolve("Two resolved!"); });
        let promiseThree = new Promise((resolve, reject) => { reject("Three rejected!"); });
        let promiseFour = new Promise((resolve) => { resolve("Four resolved!"); });

        //
        // Output the results (status, value, reason) of each settled promise
        //

        Promise.race([]);

    }


})();

