jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

test("测试 timer 模拟器(真实的模拟器不理想，太依赖与时间的流逝)", () => {
  const theGame = require("../src/theGame");
  theGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test("测试 timer 之后的断言 runAllTimers 快速执行 setTimeout", () => {
  //
  const theGame = require("../src/theGame");
  const callback = jest.fn();

  theGame(callback);
  expect(callback).not.toBeCalled();

  jest.runAllTimers();

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
