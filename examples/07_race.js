(function () {

    window.Demo.race = function () {

        console.clear();

        /*

            Promise.race()

            Returns a new promise with the result of the first promise that's settled, whether it's resolved or rejected.

            For this demo, you can change the setTimeout time values to change the winner of the race.

        */

        // This promise will settle first and win the race (250ms)
        let promiseOne = new Promise((resolve) => { 

            setTimeout(() => {
                resolve("Promise One resolved!"); 
            }, 250);
            
        });

        // This promise will not settle in time (1000ms)
        let promiseTwo = new Promise((resolve) => { 

            setTimeout(() => {
                resolve("Promise Two resolved!"); 
            }, 1000);
            
        });

        // This promise will not settle in time 500ms)
        let promiseThree = new Promise((resolve, reject) => { 
            
            setTimeout(() => {
                reject("Three rejected!");
            }, 500);
            
        
        });

        //
        // Output the fulfilled or rejected value of the promise that settled first (promiseOne in this example)
        //

        Promise.race([promiseOne, promiseTwo, promiseThree])
            .then(result => console.log(result))
            .catch(error => console.log("REJECTED PROMISE: " + error));

    };


})();