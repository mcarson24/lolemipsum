'use strict';

const dict = require('./dictionary')

function translate (phrase) {
    let translation = '';
    let words = phrase.toUpperCase().split(/(\s)+/);

    words.forEach(word => {

        let cleanWord = word.replace(/(?: |,|\.|!)+/, '');

        let punctuation = '';

        if (word.search(/(?: |,|\.|!)+$/) > 0) {
            punctuation = word[word.length - 1];
        }
        if (dict[cleanWord]) {
            word = dict[cleanWord] + punctuation;
        }

        translation += word;
    });
  return translation.trim();
}

module.exports = phrase => {
    let translation = '';
    let lines = phrase.split(/\n/);

    lines.forEach(line => {
      translation += translate(line);
        if (lines.length > 1) {
            translation += '\n';
        }
    });
    return translation.trim();
};

