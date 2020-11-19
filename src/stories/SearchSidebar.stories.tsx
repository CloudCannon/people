/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import ExampleImage from "./images/example-image.png";
import SearchSidebar, {
  SearchSidebarProps,
} from "../components/Sidebar/SearchSidebar";
import { profile } from "console";

export default {
  title: "Sidebar/SearchSidebar",
  component: SearchSidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<SearchSidebarProps> = (args) => (
  <div
    css={css`
      width: 500px;
    `}
  >
    <SearchSidebar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
};
