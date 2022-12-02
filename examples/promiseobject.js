(function () {

    window.Demo.promiseObject = function () {

        console.clear();

        /*

            This demonstrates how to write and use the Promise object.

        */

        //
        // Support functions
        //

        function isPrime(num) {
            for (var i = 2; i < num; i++)
                if (num % i === 0) return false;
            return num > 1;
        }

        function calculatePrimes(number) {

            let primes = [];

            for (let i = 2; i <= number; i++) {
                if (isPrime(i))
                    primes.push(i);
            }

            // Fake a random error
            if (Math.random() > 0.5)
                return -1;

            return primes;

        };

        //
        // Create a new Promise for later use
        //

        const myPromise = new Promise( ( resolve, reject ) => {

            // Start a long-running process
            let result = calculatePrimes(1000000);

            if (Array.isArray(result))
                resolve(result);
            else
                reject("Code: " + result);
        });

        console.log("Calculating some prime numbers...");

        myPromise
            .then(primes => console.log(primes))
            .catch(error => console.log("ERROR: " + error));
        
        console.log("Hanging out while that happens.");

    };


})();

