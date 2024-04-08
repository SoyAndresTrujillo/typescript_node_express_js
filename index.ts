import fs from 'fs';

function read(dir: string, callback: any) {
    fs.readFile(dir, (error, data) => {
        if(!data) {
            callback(error);
        } else {
            callback(data.toString());
        }
    });
}

function write(dir: string, payload: string, callback: any) {
    fs.writeFile(dir, payload, (error) => {
        if(error) {
            callback(error);
        } else {
            callback('File created');
        }
    });
}

function deleted(dir: string, callback: any) {
    fs.unlink(dir, (error) => {
        if(error) {
            callback(error);
        } else {
            callback('File deleted');
        }
    });
}

// Read file
read(__dirname + '/file.txt', console.log);

// Write file
write(__dirname + '/fileWrited.txt', 'File Created', console.log);

// Delete file
deleted(__dirname + '/fileForDelete.txt', console.log);
