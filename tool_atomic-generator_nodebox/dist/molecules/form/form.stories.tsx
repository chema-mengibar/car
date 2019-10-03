import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import Form from ".";
import MockData from "./form.mocks";

storiesOf("Form", module).add(
  "default",
  (): ReactElement => <Form {...MockData.default}></Form>
);
