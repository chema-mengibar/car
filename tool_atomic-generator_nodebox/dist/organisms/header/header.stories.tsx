import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import Header from ".";
import MockData from "./header.mocks";

storiesOf("Header", module).add(
  "default",
  (): ReactElement => <Header {...MockData.default}></Header>
);
