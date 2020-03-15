const chalk = require("chalk"); // text styling lib
const clipboardy = require('clipboardy');

module.exports = {
    boldMsg: function(msg) {
        const greeting = chalk.white.bold(msg);
        console.log(greeting);
    },
    sucessMsg: function(msg) {
        const text = chalk.black.bgGreen(msg);
        console.log(text);
    },
    copyLastLine: function (text) {
        const regex = /(.*$)/g; 
        const last_line = regex.exec(text);
        clipboardy.writeSync(last_line[1]);
        return last_line[1];
    },
    is_ptbr: function(lenguage) {
        const regex = /(pt)|(br)/gi;
        return regex.test(lenguage);
    }
};

