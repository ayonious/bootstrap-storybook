import React from "react";
import DropDown from ".";

import { storiesOf } from "@storybook/react";

storiesOf("Custom DropDown", module).add("simple", () => (
  <DropDown data={["ami", "tumi", "she", "ich", "du", "wir"]} />
));
