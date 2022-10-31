(function () {

    window.Demo.any = function () {

        console.clear();

        /*

            Promise.any()

            TEXT

        */

        let promise = new Promise((resolve, reject) => {

            if (true) {
                resolve("RESOLVED!");
            } else {
                reject("REJECTED!");
            }
        
        });


    }


})();

