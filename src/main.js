let myString = "hello user";
console.log(myString);

import * as fs from 'fs';
const content = fs.readFileSync('./maps/oval_01.map','utf8');

console.log(content);