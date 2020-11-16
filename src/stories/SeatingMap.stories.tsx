/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import SeatingMap, { SeatingMapProps } from "../components/SeatingMap/SeatingMap";
import { profile } from "console";
import People from "../data/seats.json";


export default {
  title: "Seating Map",
  component: SeatingMap,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<SeatingMapProps> = (args) => (
  <div
    css={css`
      width: 500px;
    `}
  >
    <SeatingMap {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  seats: People,
  activeSeat: "1"
};
