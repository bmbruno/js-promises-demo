(function () {

    window.Demo.networkExample = function () {

        console.clear();

        /*

            Asynchronous network example

            This example uses promises to demonstrate asynchronous JavaScript programming.
            The global fetch() function uses promises to make a resource request and parse the result.
            
            Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

        */

        //
        // Async function that loads data from a server using fetch() and returns JSON
        // GetTrailData is marked 'async' and will execute while allowing other code to continue
        //

        async function GetTrailData(url) {

            // Each line with 'await' will pause and wait for the promise function to settle
            let result = await fetch(url, { mode: 'cors' });
            let jsonData = result.json();
            return jsonData;

        }

        //
        // Get data, then output part of the data to the console
        //

        const url = "https://www.brandonbruno.com/sites/code/reactdemo/trails.json";
        
        GetTrailData(url)
            .then(trailData => {

                trailData.forEach(element => console.log(`Name: ${element.name}; Length: ${element.length} miles`));

            });
        
    }

})();