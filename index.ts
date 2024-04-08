// Async
function hola(nombre: string, callback: any) {
    setTimeout(function () {
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 1500);
};

function bye(nombre: string, callback: any) {
    setTimeout(function () {
        console.log(`Bye ${nombre}`);
        callback();
    }, 1600);
};

console.log('Init process');
hola('Nicole', function(nombre: string) {
    bye(nombre, function() {
        console.log('Finish process');
    });
});