import React from "react";
import MyButton from "../../src/index";
import { storiesOf } from "@storybook/react";

storiesOf("Custom Button", module).addWithJSX("simple", () => <MyButton />);
