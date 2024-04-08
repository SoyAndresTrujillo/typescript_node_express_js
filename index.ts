// Async
function hola(nombre: string, callback: any) {
    setTimeout(function () {
        console.log(`Hola ${nombre}`);
        callback(nombre);
    }, 1500);
};

function talk(callback: any) {
    setTimeout(function () {
        console.log(`Talking`);
        callback();
    });
};

function bye(nombre: string, callback: any) {
    setTimeout(function () {
        console.log(`Bye ${nombre}`);
        callback();
    }, 1600);
};

// Callback hell
function conversation(nombre: string, loop: number, callback: any) {
    if (loop > 0) {
        talk(function() {
            conversation(nombre, --loop, callback);
          });
    } else {
        bye(nombre, callback);
    }
};

console.log('Init process');
hola('Nicole', function(nombre: string) {
    conversation(nombre, 5, function() {
        console.log('Finish process');
    });
});