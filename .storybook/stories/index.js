import React from "react";
import MyButton from "../../src/components/button/index";
import Card from "../../src/components/cards/index";

import CSSExample1 from "../../src/components/css/borderMarginPadding/example1/index";
import CSSExample2 from "../../src/components/css/borderMarginPadding/example2/index";
import CSSExample3 from "../../src/components/css/borderMarginPadding/example3/index";
import CSSExample4 from "../../src/components/css/borderMarginPadding/example4/index";
import CSSExample5 from "../../src/components/css/borderMarginPadding/example5/index";
import CSSExample6 from "../../src/components/css/borderMarginPadding/example6/index";
import CSSExample7 from "../../src/components/css/borderMarginPadding/example7/index";
import CSSExample8 from "../../src/components/css/borderMarginPadding/example8/index";
import CSSExample9 from "../../src/components/css/borderMarginPadding/example9/index";

import { storiesOf } from "@storybook/react";

storiesOf("Custom Button", module).addWithJSX("simple", () => <MyButton />);

storiesOf("Custom Card", module).addWithJSX("simple", () => (
  <Card
    title="This is some Title"
    excerpt="lets talk about this niec day is this not good lets talk about this niec day is this not good lets talk about this niec day is this not good"
    img="https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/quick-print.png"
  />
));

storiesOf("CSS: Margin Border Padding", module)
  .addWithJSX("example1", () => <CSSExample1 />)
  .addWithJSX("example2", () => <CSSExample2 />)
  .addWithJSX("example3", () => <CSSExample3 />)
  .addWithJSX("example4", () => <CSSExample4 />)
  .addWithJSX("example5", () => <CSSExample5 />)
  .addWithJSX("example6", () => <CSSExample6 />)
  .addWithJSX("example7", () => <CSSExample7 />)
  .addWithJSX("example8", () => <CSSExample8 />)
  .addWithJSX("example9", () => <CSSExample9 />);
