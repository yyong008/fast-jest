"use strict";

function theGame(callback) {
  console.log("Ready... Go!");

  setTimeout(() => {
    console.log("Time's up --- stop!");
    callback && callback();
  }, 1000);
}

module.exports = theGame;
