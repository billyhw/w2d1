function getHTML (options, callback) {

var https = require("https");

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    var numChunks = 0;
    var dataBuffer = [];
    response.on('data', function (data) {
      numChunks += 1;
      dataBuffer.push(data) ;
      //console.log("line: ", numChunks, ":", data, "\n");
    });

    // the callback is involved if error found
    response.on('end', function () {
      console.log('Response stream complete. Total ', numChunks, ' chunks received.');
      console.log('There are ', numError, ' errors found during the streaming.');
      console.log(dataBuffer);
      });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    var numError = 0;
    response.on('error', function () {
      numError +=  1;
      callback('Error Received. Please be careful');
    });

    // Note that this is unnecessary, this will not be output.
    // response.on('finish', function () {
    //   console.log('Finish flushing data to system.');
    // })

  });
}

module.exports = getHTML;