import React from "react";
import Card from ".";

import { storiesOf } from "@storybook/react";

storiesOf("Custom Card", module).add("simple", () => (
  <Card
    title="This is some Title"
    excerpt="lets talk about this niec day is this not good lets talk about this niec day is this not good lets talk about this niec day is this not good"
    img="https://cdn.jsdelivr.net/gh/ayonious/console-table-printer@master/static-resources/quick-print.png"
  />
));
