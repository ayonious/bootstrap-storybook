import React from "react";

import CSSExample1 from "../example1";
import CSSExample2 from "../example2";
import CSSExample3 from "../example3";
import CSSExample4 from "../example4";
import CSSExample5 from "../example5";
import CSSExample6 from "../example6";
import CSSExample7 from "../example7";
import CSSExample8 from "../example8";
import CSSExample9 from "../example9";

import { storiesOf } from "@storybook/react";

storiesOf("CSS: Margin Border Padding", module)
  .add("example1", () => <CSSExample1 />)
  .add("example2", () => <CSSExample2 />)
  .add("example3", () => <CSSExample3 />)
  .add("example4", () => <CSSExample4 />)
  .add("example5", () => <CSSExample5 />)
  .add("example6", () => <CSSExample6 />)
  .add("example7", () => <CSSExample7 />)
  .add("example8", () => <CSSExample8 />)
  .add("example9", () => <CSSExample9 />);
