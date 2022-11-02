(function () {

    window.Demo.any = function () {

        console.clear();

        /*

            Promise.any()

            Given an array of promises, any() will return the first fulfilled promise.

        */

        // This promise will fulfill second (1500ms) and has no impact on any()
        let promiseOne = new Promise((resolve) => { 

            setTimeout(() => {
                resolve("Promise One resolved!"); 
            }, 1500);
            
        });

        // This promise will fulfill first (750ms) and trigger any() to resolve
        let promiseTwo = new Promise((resolve) => { 

            setTimeout(() => {
                resolve("Promise Two resolved!"); 
            }, 750);
            
        });

        // This will reject right away, but won't have any effect on any(), since it only cares about fulfilled promises
        let promiseThree = new Promise((resolve, reject) => { reject("Three rejected!"); });

        //
        // Output the results (status, value, reason) of each settled promise
        //

        Promise.any([promiseOne, promiseTwo, promiseThree])
            .then(result => console.log(result));


    }


})();

