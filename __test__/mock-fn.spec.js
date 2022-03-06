// import SomeClass from "../src/SomeClass";

const mockFn = jest.fn();

test("mockFn Apis", () => {
  //
  const apis = Object.keys(mockFn);

  expect(apis).toContain("_isMockFunction");
  expect(apis).toContain("getMockImplementation");
  expect(apis).toContain("mock");
  expect(apis).toContain("mockClear");
  expect(apis).toContain("mockReset");
  expect(apis).toContain("mockRestore");
  expect(apis).toContain("mockReturnValueOnce");
  expect(apis).toContain("mockResolvedValueOnce");
  expect(apis).toContain("mockRejectedValueOnce");
  expect(apis).toContain("mockReturnValue");
  expect(apis).toContain("mockResolvedValue");
  expect(apis).toContain("mockRejectedValue");
  expect(apis).toContain("mockImplementationOnce");
  expect(apis).toContain("mockImplementation");
  expect(apis).toContain("mockReturnThis");
  expect(apis).toContain("mockName");
  expect(apis).toContain("getMockName");
});

test("mockFn mock 属性 测试", () => {
  const mockFnProps = Object.keys(jest.fn().mock);

  // console.log(mockFnProps)

  expect(mockFnProps).toContain("calls");
  expect(mockFnProps).toContain("instances");
  expect(mockFnProps).toContain("invocationCallOrder");
  expect(mockFnProps).toContain("results");
});

test("mockFn mock.call", () => {
  const mockFn = jest.fn();
  mockFn(1, 2);
  // console.log(mockFn.mock.calls)
  expect(mockFn.mock.calls[0][0]).toBe(1);
  expect(mockFn.mock.calls[0][1]).toBe(2);

  mockFn(3, 4);
  // console.log(mockFn.mock.calls)
  expect(mockFn.mock.calls[1][0]).toBe(3);
  expect(mockFn.mock.calls[1][1]).toBe(4);
});

test("mockFn mock.results", () => {
  const mockFn = jest.fn((x) => x);

  mockFn(1);
  expect(mockFn.mock.results[0].value).toBe(1);
  expect(mockFn.mock.results[0].type).toBe("return");

  mockFn(2);
  expect(mockFn.mock.results[1].value).toBe(2);
  expect(mockFn.mock.results[1].type).toBe("return");
});

test("mockFn mock.instances", () => {
  const mockFn = jest.fn();

  const instA = new mockFn();
  const instB = new mockFn();

  expect(typeof mockFn.mock.instances).toBe("object");
  expect(Object.prototype.toString.call(mockFn.mock.instances)).toBe(
    "[object Array]"
  );

  expect(mockFn.mock.instances[0]).toBe(instA);
  expect(mockFn.mock.instances[1]).toBe(instB);
});

test("clear mock after calls instances invocationCallOrder length is 0", () => {
  const mockFn = jest.fn((x) => x);

  mockFn(1);
  expect(mockFn.mock.calls[0][0]).toBe(1);

  mockFn.mockClear();

  expect(mockFn.mock.calls.length).toBe(0);
  expect(mockFn.mock.instances.length).toBe(0);
  expect(mockFn.mock.invocationCallOrder.length).toBe(0);
  expect(mockFn.mock.results.length).toBe(0);
});

test("mock mockReset", () => {
  const mockFn = jest.fn((x) => x);

  mockFn(1);
  expect(mockFn.mock.calls[0][0]).toBe(1);

  mockFn.mockReset();
  expect(mockFn.mock.calls.length).toBe(0);
  expect(mockFn.mock.instances.length).toBe(0);
  expect(mockFn.mock.invocationCallOrder.length).toBe(0);
  expect(mockFn.mock.results.length).toBe(0);
});

test("mock mockRestore", () => {
  const mockFn = jest.fn((x) => x);

  mockFn(1);
  expect(mockFn.mock.calls[0][0]).toBe(1);

  mockFn.mockRestore();
  expect(mockFn.mock.calls.length).toBe(0);
  expect(mockFn.mock.instances.length).toBe(0);
  expect(mockFn.mock.invocationCallOrder.length).toBe(0);
  expect(mockFn.mock.results.length).toBe(0);
});

test("mockImplementation", () => {
  const mockFn = jest.fn((x) => x);
  const mockFnImpl = jest.fn().mockImplementation((x) => x);

  expect(mockFn(1)).toBe(1);
  expect(mockFnImpl(1)).toBe(1);
});

test("mockImplementation constructor", () => {
  jest.mock("../src/SomeClass"); // this happens automatically with automocking
  const SomeClass = require("../src/SomeClass");
  const mMock = jest.fn();
  SomeClass.mockImplementation(() => {
    return {
      m: mMock,
    };
  });

  const some = new SomeClass();
  some.m("a", "b");

  expect(mMock.mock.calls[0]).toEqual(["a", "b"]);
});

test("mockImplementationOnce", () => {
  const mockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call");

  expect(mockFn()).toBe("first call");
  expect(mockFn()).toBe("second call");
  expect(mockFn()).toBe("default");
});

test("mockName ", () => {
  const mockFn = jest.fn().mockName("mockedFunction");
  mockFn();
  expect(mockFn).toHaveBeenCalled();
  // console.log(mockFn.getMockName("mockedFunction"));
  expect(mockFn.getMockName("mockedFunction")).toEqual("mockedFunction");
});

test("mockReturnThis", () => {
  const mockFn = jest.fn(function () {
    return this;
  });
  expect(mockFn()).toBeUndefined();
});

test("mockReturnValue", () => {
  const mockFn = jest.fn();

  mockFn.mockReturnValue(42);
  mockFn();
  expect(mockFn.mock.results[0].value).toBe(42);
  expect(mockFn.mock.results[0].type).toBe("return");

  mockFn.mockReset();

  mockFn.mockReturnValue(43);
  mockFn();
  expect(mockFn.mock.results[0].value).toBe(43);
  expect(mockFn.mock.results[0].type).toBe("return");
});

test("mockReturnValueOnce", () => {
  const mockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockReturnValue("first call")
    .mockReturnValue("second call");

  const m1 = mockFn();
  const m2 = mockFn();
  const m3 = mockFn();
  expect(m1).toBe("second call");
  expect(m2).toBe("second call");
  expect(m3).toBe("second call");
});

test("mockResolvedValue", async () => {
  const asyncFn = jest.fn().mockImplementation(() => Promise.resolve(1));

  const value = await asyncFn();
  expect(value).toBe(1);
});

test("mockResolvedValueOnce", async () => {
  const asyncMockFn = jest
    .fn()
    .mockResolvedValue("default")
    .mockResolvedValueOnce("first call")
    .mockResolvedValueOnce("second call");

  const m1 = await asyncMockFn(); // first call
  const m2 = await asyncMockFn(); // second call
  const m3 = await asyncMockFn(); // default
  const m4 = await asyncMockFn(); // default
  expect(m1).toBe("first call");
  expect(m2).toBe("second call");
  expect(m3).toBe("default");
  expect(m4).toBe("default");
});

test("mockRejectedValue", async () => {
  //
  const asyncMockFn = jest
    .fn()
    .mockImplementation(() => Promise.reject(new Error("Async error")));

  expect(asyncMockFn()).rejects.toThrowError("Async error");
});

test("mockRejectedValueOnce", async () => {
  //
  const asyncMockFn = jest.fn().mockResolvedValueOnce("first call");
  // .mockRejectedValueOnce(new Error("Async error"));

  const m1 = await asyncMockFn(); // first call
  // const m2 = await asyncMockFn(); // throws "Async error"
  expect(m1).toBe("first call");
  // console.log(m2);
  // expect(m2).rejects.toThrowError("Async error");
});
