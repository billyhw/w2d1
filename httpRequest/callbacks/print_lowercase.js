var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  html.forEach(function(x) { console.log(x.toLowerCase()) ;});

}

getHTML(requestOptions, printLowerCase);
