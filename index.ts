function result(callback: any) {
    callback(() => {
        sum();
    });
}

function sum():number {
    return 5 + z;
}

try {
    result(function(error) {
        console.error(error);
    });
} catch(error) {
    console.error(error);
}

// When an function is async, this is pased for other hilo and if this function has error, the app it's creashed