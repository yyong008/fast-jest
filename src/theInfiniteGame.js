"use strict";

function theInfiniteGame(callback) {
  console.log("Ready... Go!");

  setTimeout(() => {
    console.log("Time's up! 10 seconds before the next game starts...");
    callback && callback();

    setTimeout(() => {
      theInfiniteGame(callback);
    }, 10000);
  }, 1000);
}

module.exports = theInfiniteGame;
