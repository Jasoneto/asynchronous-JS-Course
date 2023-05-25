const promise = new Promise(function (resolve, reject) {
    resolve('hey! todo okay')
})

const cows = 15;

const countCows = new Promise (function (resolve, reject) { //Promise with 'P' in uppercase
    if (cows > 10) {
        resolve (`We have ${cows} cows on the farm`);
    } else {
        reject('there is no cows on the farm');
    }
});

countCows.then((result) => { //'.then' to nest chained requests.
    console.log(result);
}).catch((error) => { //the reserved word '.catch' allow to capture the reject and show the error.
    console.log(error);
}).finally(() => console.log('finally')); //We use '.finally' when all execution is finished, which is waiting for a promise
