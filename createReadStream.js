console.log("createReadStream")
//const readableStream = fs.createReadStream('file.txt', { encoding: 'utf8', highWaterMark: 1024, autoClose: true });
/*
const fs = require('fs');

const readableStream = fs.createReadStream('file.txt');

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on('end', () => {
  console.log('File reading completed.');
});

readableStream.on('error', (err) => {
  console.error(`Error occurred: ${err.message}`);
});
*/