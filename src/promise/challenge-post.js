//POST is used to create resources on the server.

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        //permissions that must be taken into account
        //so that the exchange with the server is safe:
        method: 'POST', //always in uppercase
        mode: 'cors', //cors is the permission that it will have, by default it will always be in cors
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json' //necessary to indicate that what is being sent is of type json
        },
        body: JSON.stringify(data) //the JSON.stringify() method converts a JavaScript object or value to a JSON string
    });
    return response;
}

const data = {
    "title": "396",
    "price": 396,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
}

//we can use the postData as a promise and with
//.then get the response as a json object and output it to the console afterwards
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));
