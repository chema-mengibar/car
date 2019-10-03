import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import InputText from ".";
import MockData from "./input-text.mocks";

storiesOf("InputText", module).add(
  "default",
  (): ReactElement => <InputText {...MockData.default}></InputText>
);
