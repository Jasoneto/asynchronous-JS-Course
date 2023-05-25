const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //To call the addon we previously install in the console with 'npm i xmlhttprequest' and don't forget to use '.XMLHttpRequest' at the final.
const API = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); //'true is the value to enable th Url we'll use.
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) { //the state will be constantly changing
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText)) //with JSON we transform the text we received from the server into an object
            } else { //we need the else in the second if 'cause we need a response from the state of the server or know if the client has an error, we need that the error will sending to the user.
                const error = new Error('Error' + urlApi);
                return callback(error, null); //null 'cause we are not returning any data
            }
        }
    }
    xhttp.send();
}

//using the implementation fetch we can call for a request in a 'modern' and easiest way than the code above.
//Now we'll use 'FETCH DATA':

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});
// we can rectify the information in the console with the route, like: node ssrc/callback/fakeApi.js
