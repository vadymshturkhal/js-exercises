// Реализуйте композицию функций справа налево (без использования рекурсии), 
// которая будет подавлять ошибки, если композируемые функции будут их бросать, 
// то, исполнение функции завершается с undefined, 
// а на ошибки можно будет подписаться через f.on('error', e => { ... });.

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const err = x => {
    throw new Error("Error");
}

const compose = (...funcs) => {
    const errorCallbacks = [];

    const inner = x => {
        try {
            for (func of funcs.reverse()){
                x = func(x);
            }
            return x;
        } catch (error) {
            for (cb of errorCallbacks){
                cb(error);
            } 
        }
    }
    inner.on = (name, cb) => {
        if (name === 'error') errorCallbacks.push(cb);
    }
    return inner;
}

const result = compose(inc, twice);

const errorMessages = er => console.log(er.message);
result.on('error', errorMessages);

console.log(result(5));


// let ero => {
//     errorDetected = true;
// }

// console.log(typeof error);
