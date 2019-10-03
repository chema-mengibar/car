import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import Menu from ".";
import MockData from "./menu.mocks";

storiesOf("Menu", module).add(
  "default",
  (): ReactElement => <Menu {...MockData.default}></Menu>
);
