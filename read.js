#!/usr/bin/env node
const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
read.question('Enter your name: ', (input) => {
    console.log(` Hello  ${input} !` );
    read.close
} );