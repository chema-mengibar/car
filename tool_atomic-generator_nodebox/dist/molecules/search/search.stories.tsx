import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import Search from ".";
import MockData from "./search.mocks";

storiesOf("Search", module).add(
  "default",
  (): ReactElement => <Search {...MockData.default}></Search>
);
