import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import {__Name__} from ".";
import MockData from "./{__name__}.mocks";

storiesOf("{__Name__}", module).add(
  "default",
  (): ReactElement => <{__Name__} {...MockData.default}></{__Name__}>
);
