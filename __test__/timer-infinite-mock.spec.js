"use strict";

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("无限的时间游戏", () => {
  test("1s 一个 setTimetout 调用，10s 后一个 setTimeout 调用", () => {
    //
    const timerInfiniteMock = require("../src/theInfiniteGame");
    const callback = jest.fn();

    timerInfiniteMock(callback);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    jest.runOnlyPendingTimers();
    expect(callback).toBeCalled();
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });

  test("advanceTimersByTime", () => {
    //
    const theGame = require("../src/theGame");
    const callback = jest.fn();

    theGame(callback);

    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(1000);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
