const XMLHttpRequest = require('xmlhttprequest'); //To call the addon we previously install in the console with 'npm i xmlhttprequest'.
const API = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); //'true is the value to enable th Url we'll use.
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText)) //with JSON we transform the text we received from the server into an object
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null); //null 'cause we are not returning any data
        }
    }
    xhttp.send();
}

//using the implementation fetch we can call for a request in a 'modern' and easiest way than the code above.
