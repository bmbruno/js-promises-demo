(function () {

    window.Demo.fullExample = function () {

        console.clear();

        /*

            This example uses promises to demonstrate asynchronous JavaScript programming.
            The global fetch() function uses promises to make a resource request and parse the result.

        */

        //
        // Async function that loads data from a server using fetch and returns JSON
        //

        async function GetTrailData(url) {

            let result = await fetch(url, { mode: 'cors' });
            let jsonData = await result.json();
            return jsonData;

        }

        //
        // Call function to get data, then output part of the data to the console
        //

        const url = "https://www.brandonbruno.com/sites/code/reactdemo/trails.json";
        let trailData = {};
        
        GetTrailData(url)
            .then(trailData => {

                trailData.forEach(element => console.log(element.name));

            });       
        
    }


})();

