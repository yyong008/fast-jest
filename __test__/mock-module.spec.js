import axios from "axios";

import Users from "../src/users";

jest.mock("axios");

test("测试模拟 Mock JS ES6 模块 mockResolvedValue", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };

  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => {
    expect(data).toEqual(users);
  });
});

test("测试模拟 Mock JS ES6 模块 mockResolvedValue 用 async/await", async () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };

  axios.get.mockResolvedValue(resp);

  const data = await Users.all();

  expect(data).toEqual(users);
});
