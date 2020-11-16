import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import ExampleImage from "./images/example-image.png";
import InfoSidebar, {
  InfoSidebarProps,
} from "../components/Sidebar/InfoSidebar";
import { profile } from "console";

export default {
  title: "Sidebar/InfoSidebar",
  component: InfoSidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<InfoSidebarProps> = (args) => <InfoSidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  person: {
    name: "Robbie Cook",
    profileImage: ExampleImage,
    title: "Legend",
  },
};
