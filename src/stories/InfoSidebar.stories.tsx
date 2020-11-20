/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import ExampleImage from "./images/example-image.png";
import InfoSidebar, {
  InfoSidebarProps,
} from "../components/Sidebar/InfoSidebar";

export default {
  title: "Sidebar/InfoSidebar",
  component: InfoSidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<InfoSidebarProps> = (args) => (
  <div
    css={css`
      width: 500px;
    `}
  >
    <InfoSidebar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  person: {
    name: "Robbie Cook",
    profileImage: ExampleImage,
    title: "Legend",
    description: "Robbie is a legend."
  },
  onClose: () => {
    console.log("closed");
  },
};
