import defaultExport, { foo, bar } from "../src/partials";

jest.mock("../src/partials.js", () => {
  const originalModule = jest.requireActual("../src/partials");
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked string"),
    foo: "mocked foo",
  };
});

test("测试模拟一部分", () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).not.toBe("default string");
  expect(defaultExportResult).toBe("mocked string");
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).not.toBe("foo");
  expect(foo).toBe("mocked foo");

  expect(bar()).toBe("bar");
});
