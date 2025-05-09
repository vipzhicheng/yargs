#!/usr/bin/env node
import yargs from 'yargs';

const argv = yargs(process.argv.slice(2)).string(['x', 'y']).parse();
console.dir([argv.x, argv.y]);

/* Turns off numeric coercion:
    ./node string.js -x 000123 -y 9876
    [ '000123', '9876' ]
*/
