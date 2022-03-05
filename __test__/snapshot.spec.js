import React from "react";
import renderer from "react-test-renderer";
import AboutComp from "../src/components/AboutComp";

import config from "../src/config";

test("Snapshot Test config Object", () => {
  expect(config).toMatchSnapshot();
});

test("Snapshot Inline Test config Object", () => {
  expect(config).toMatchInlineSnapshot(`
    Object {
      "port": 8000,
    }
  `);
});

test("use react-test-renderer Component test", () => {
  const tree = renderer.create(<AboutComp />).toJSON();

  const treeName = renderer.create(<AboutComp name="react" />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(treeName).toMatchSnapshot();
});

test("use react-test-renderer Component test Match Inline", () => {
  const tree = renderer.create(<AboutComp />).toJSON();

  const treeName = renderer.create(<AboutComp name="react" />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    <div>
      About: Component
    </div>
  `);
  expect(treeName).toMatchInlineSnapshot(`
    <div>
       About: 
      react
    </div>
  `);
});
