import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";
import MockData from "./button.mocks";

storiesOf("Button", module).add(
  "default",
  (): ReactElement => <Button {...MockData.default}></Button>
);
