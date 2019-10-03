import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import MenuItem from ".";
import MockData from "./menu-item.mocks";

storiesOf("MenuItem", module).add(
  "default",
  (): ReactElement => <MenuItem {...MockData.default}></MenuItem>
);
