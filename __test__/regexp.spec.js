test("测试", () => {
  //
  let regexp = new RegExp("abc", "gi");
  expect(regexp).toMatchInlineSnapshot(`/abc/gi`);
  expect(regexp.dotAll).toMatchInlineSnapshot(`false`);
  expect(regexp.exec).toMatchInlineSnapshot(`[Function]`);
  expect(regexp.flags).toMatchInlineSnapshot(`"gi"`);
  expect(regexp.global).toMatchInlineSnapshot(`true`);
  expect(regexp.ignoreCase).toMatchInlineSnapshot(`true`);
  expect(regexp.lastIndex).toMatchInlineSnapshot(`0`);
  expect(regexp.multiline).toMatchInlineSnapshot(`false`);
  expect(regexp.source).toMatchInlineSnapshot(`"abc"`);
  expect(regexp.sticky).toMatchInlineSnapshot(`false`);
  expect(regexp.test).toMatchInlineSnapshot(`[Function]`);
  expect(regexp.unicode).toMatchInlineSnapshot(`false`);
});
test("测试： test RegExp 对象", () => {
  const regexp = new RegExp("foo", "g");
  expect(Object.prototype.toString.call(regexp)).toBe("[object RegExp]");
  console.log("regexp", regexp, regexp.__proto__, regexp.__proto__.__proto__);
  expect(regexp.lastIndex).toBe(0);
});

test("测试： toMatch", () => {
  expect("name").not.toMatch(/N/);
  expect("first name").toMatch(/name/);
});

test("测试空参数正则：", () => {
  const reg = new RegExp();
  expect(reg).toStrictEqual(/(?:)/);
});

test("正则：原型属性 flags", () => {
  //
  var regexp = new RegExp("global", "gi");

  console.log(regexp.flags); // true
  expect(regexp.flags).toBe("gi");
  expect(regexp.flags).not.toBe("g");
});

test("正则：原型属性 prototype.global", () => {
  var regexp = new RegExp("global", "g");

  console.log(regexp.global); // true
  expect(regexp.global).toBe(true);
  expect(regexp.global).not.toBe(false);
});

test("正则：测试原型属性 dotAll", () => {
  // TODO: 增加 dotAll 测试用例
});
