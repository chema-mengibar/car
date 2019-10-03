import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import InputTextarea from ".";
import MockData from "./input-textarea.mocks";

storiesOf("InputTextarea", module).add(
  "default",
  (): ReactElement => <InputTextarea {...MockData.default}></InputTextarea>
);
