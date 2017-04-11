var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  var encode = function(x) {
    x = x.replace(/er/g,'0r');
    x = x.replace(/ck/g, 'x');
    x = x.replace(/you/g, 'j00');
    x = x.replace(/a/g,'4');
    x = x.replace(/e/g,'3');
    x = x.replace(/l/g,'1');
    x = x.replace(/o/g,'0');
    x = x.replace(/s/g,'5');
    x = x.replace(/t/g,'7');
    return x;
  }

  html.forEach(function(x) { console.log(encode(x)) ;});

}

getHTML(requestOptions, print1337);
