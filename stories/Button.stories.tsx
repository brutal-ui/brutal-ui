import React from "react";
import { Meta, Story } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { Button, ButtonProps } from "../src/components/Button/Button";

import "../src/tailwind.css";

const meta: Meta<ButtonProps> = {
  title: "Inputs/Button",
  decorators: [withDesign],
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "Button",
};
