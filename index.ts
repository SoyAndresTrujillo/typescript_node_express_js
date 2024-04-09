const { Transform } = require("stream");
const { createReadStream } = require("fs");

const upperCaseTransform = new Transform({
  transform(chunk: any, encoding: any, callback: any) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readableStream = createReadStream(__dirname + "/file.txt");

readableStream.pipe(upperCaseTransform).pipe(process.stdout);