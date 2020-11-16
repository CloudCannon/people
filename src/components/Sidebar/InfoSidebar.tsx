/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import People from "../../data/seats.json";

/**
 * Interface for InfoSidebar props
 */
export interface InfoSidebarProps {
  children?: any;
  person: typeof People[keyof typeof People];
}

/**
 *  A InfoSidebar component.
 */
const InfoSidebar: React.FC<InfoSidebarProps> = (props) => {
  return (
    <React.Fragment>
      <aside>
        <Avatar src={props.person.profileImage} />
        <h3>{props.person.name}</h3>
        <h4>{props.person.title}</h4>
        {/* <p>{props.person.description}</p> */}
      </aside>
    </React.Fragment>
  );
};

export default InfoSidebar;
