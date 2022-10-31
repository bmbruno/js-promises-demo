(function () {

    window.Demo.asyncawait = function () {

        console.clear();

        /*

            async / await

            TEXT

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

