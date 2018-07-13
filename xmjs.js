var convert = require('xml-js');
var xml = require('fs').readFileSync('https://marketplace.bestbuy.ca/api/offers?api_key=fa4ab3b8-4421-4a9a-9e2d-6c087e7bc9ce&max=100', 'utf8');
var result1 = convert.xml2json(xml, {compact: true, spaces: 4});

console.log(result1);