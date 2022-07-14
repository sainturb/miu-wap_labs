console.log('start');
const promise = new Promise((resolve, reject) => {
    resolve('done');
});

function firstOne() {
    promise.then(console.log);
    console.log('first');
}

async function secondOne() {
    console.log(await promise);
    console.log('second');
}

firstOne();
secondOne();
console.log('end');