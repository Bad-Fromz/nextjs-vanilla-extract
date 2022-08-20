import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  label: "Secondary",
};
