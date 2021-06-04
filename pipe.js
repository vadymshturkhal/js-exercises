// Напишите функцию pipe, композирующую передаваемые в нее аргументы слева направо. const pipe = (...fns) => x => ... 
// А если хоть один из аргументов окажется не функционального типа, то pipe должен выбросить ошибку. Например, если у нас есть три функции:
// И нам нужно скомпозировать их так const f = pipe(inc, twice, cube); 
// то при вызове const x = f(5); нужно ожидать, что x примет значение 1728. 
// А если мы скомпозируем const f = pipe(inc, inc); то при вызове const x = f(7); 
// значение x будет 9. Но если мы передадим не функцию в pipe, например: const f = pipe(inc, 7, cube); 
// то, не дожидаясь вызова f, сразу получим ошибку.

const pipe = (...funcs) => x => {
    for (func of funcs) {
        if (typeof func !== 'function'){
            throw new Error('All parameters must be a type of function');
        }
    }

    let res = x;
    funcs.forEach(f => res = f(res))

    return res;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const result = pipe(inc, twice, cube);

// Error
// const result = pipe(x=>x+1, x=>x*2, x=>x*x*x, 3);
console.log(result(5));