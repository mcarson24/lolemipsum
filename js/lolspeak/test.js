/* eslint-env mocha */
'use strict';

var assert = require('chai').assert;
var fs = require('fs');

var LOLSPEAK = require('./index.js');

describe('Single line phrases', function () {
  it('should be translated', function () {
    assert.equal(
      LOLSPEAK('come here kitty'),
      'COME HER KITTEH'
    );
  });
});

describe('Multi line phrases', function () {
  it('should return a multi line translation', function () {
    assert.equal(
      LOLSPEAK('hello\nworld\n\nvery nice to meet you'),
      'Y HALO THAR\nWURLD\n\nVARY NICE 2 MEET U'
    );
  });
});

describe('Punctuation', () => {
  it('should not be removed at end of sentences', () => {
    assert.equal(
      LOLSPEAK("Hello!"),
      'Y HALO THAR!'
    );
  });
  it('apostrophes should not be removed', () => {
    assert.equal(
      LOLSPEAK("you're"),
      'UR'
    );
  });
  it('should not remove non word characters in middle of strings', () => {
    assert.equal(
      LOLSPEAK('incorrect!@#,$string'),
      "INCORRECT!@#,$STRING"
    );
  })
})

describe('Full stops, commas and exclamation points', function () {
  it('should be not removed', function () {
    assert.equal(
      LOLSPEAK("don't take, this! away."),
      'DUN TAEK, DIS! AWAY.'
    );
  });
});

describe('Single line explicit phrases', function () {
  describe('"you are the ultimate winner"', function () {
    it('should return "U R TEH ULTIMATE WINNR"', function () {
      assert.equal(
        LOLSPEAK('you are the ultimate winner'),
        'U R TEH ULTIMATE WINNR'
      );
    });
  });
  describe('"I\'m pretty bored right now"', function () {
    it('should return "ME PRITEE BORED RITE NAO"', function () {
      assert.equal(
        LOLSPEAK('I\'m pretty bored right now'),
        'ME PRITEE BORED RITE NAO'
      );
    });
  });
  describe('"you have broken the build!"', function () {
    it('should return "U HAS BROKD TEH BUILD!"', function () {
      assert.equal(
        LOLSPEAK('you have broken the build!'),
        'U HAS BROKD TEH BUILD!'
      );
    });
  });
});

describe('README.md', function () {
  var README = fs.readFileSync('./README.md', 'utf-8');
  var LOLME = fs.readFileSync('./README.untranslated.md', 'utf-8');
  it('should be generated LOLSPEAK', function () {
    assert.equal(LOLSPEAK(LOLME) + '\n', README);
  });
});
