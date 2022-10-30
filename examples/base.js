window.Demo = window.Demo || {

    output: [],

    log: function (message) {

        window.Demo.output.push(message);

    },

    clear: function () {

        window.Demo.output = [];

    },

    render: function () {

        let console = document.getElementById("UserConsole");
        let rendered = "";

        for (let i = 0; i <= window.Demo.output.length; i++) {
            rendered += `${window.Demo.output[i]}<br/>`;
        }

        console.innerHTML = rendered;
    }

};

