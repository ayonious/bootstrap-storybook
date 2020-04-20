import React from "react";
import MyButton from "../../src/components/button/index";
import Card from "../../src/components/cards/index";
import { storiesOf } from "@storybook/react";

storiesOf("Custom Button", module).addWithJSX("simple", () => <MyButton />);

storiesOf("Custom Card", 
module).addWithJSX("simple", () => 
<Card title= "This is some Title" 
      excerpt="lets talk about this niec day is this not good lets talk about this niec day is this not good lets talk about this niec day is this not good" 
      img="https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/quick-print.png" 
/>);
