var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(s){
    return s.split("").reverse().join("");
}

function printReverse (html) {
  html.forEach(function(x) { console.log(reverse(x)) ;});
}

getHTML(requestOptions, printReverse);
