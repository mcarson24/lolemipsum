'use strict';

const dict = require('./dictionary');

function translate (phrase) {
    let words = phrase.toUpperCase().split(/(?: )+/);
    let translation = '';

    words.forEach((word) => {
        if (dict[word]) {
            word = dict[word];
        }
        translation = translation + word + ' ';
    });
    return translation.trim();
}

module.exports = function (phrase) {
    let translation = '';
    let lines = phrase.split(/\n/);

    lines.forEach((line) => {
        translation += translate(line);
        if (lines.length > 1) {
            translation = translation + '\n';
        }
    });

    return translation.trim();
};
