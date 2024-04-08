// Async
function hello(nombre: string) {
    return new Promise((resolve, reject) => {
        console.log(`Hola ${nombre}`);
        resolve(nombre);
    });
};

function talk(nombre: any) {
    return new Promise((resolve, reject) => {
        console.log(`Talking`);
        resolve(nombre);
    });
};

function bye(nombre: any) {
    return new Promise((resolve, reject) => {
        console.log(`Bye ${nombre}`);
        resolve(nombre);
    });
};

console.log('Init process');
hello('Nicole')
    .then(talk)
    .then(talk)
    .then(bye)
    .then(() => {
        console.log('Finish procces');
    })
    .catch((error) => {
        console.error(error);
    })