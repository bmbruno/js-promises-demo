(function () {

    window.Demo.race = function () {

        console.clear();

        /*

            Promise.race()

            Returns a new promise with the result of the first promise that's fulfilled, whether it's resolved or rejected.

            You can change the setTimeout millisecond values to change the winner of the race.

        */

        // This promise will fulfill first and win the race (250ms)
        let promiseOne = new Promise((resolve) => { 

            setTimeout(() => {
                resolve("Promise One resolved!"); 
            }, 250);
            
        });

        // This promise will not fulfill in time (1000ms)
        let promiseTwo = new Promise((resolve) => { 

            setTimeout(() => {
                resolve("Promise Two resolved!"); 
            }, 1000);
            
        });

        // This promise will not fulfill in time 500ms)
        let promiseThree = new Promise((resolve, reject) => { 
            
            setTimeout(() => {
                reject("Three rejected!");
            }, 500);
            
        
        });

        //
        // Output the fulfilled value of the promise that won the race (promiseOne in this example)
        //

        Promise.race([promiseOne, promiseTwo, promiseThree])
            .then(result => console.log(result))
            .catch(error => console.log("REJECTED PROMISE: " + error));

    }


})();

