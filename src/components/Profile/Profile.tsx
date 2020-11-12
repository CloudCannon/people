import React from "react";
import "./Profile.scss";
import Person from "./person.svg";
import { profile } from "console";

/**
 * Interface for Profile props
 */
export interface ProfileProps {
  name: string;
  title: string;
  profileImage?: string;
  slackLink: string;
}

/**
 *  A Profile component.
 */
const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div>
      <picture>
        {props.profileImage ? (
          <img
            className="profileImage"
            src={props.profileImage}
            width="80px"
            height="80px"
          />
        ) : (
          <img
            className="profileImage"
            src={Person}
            width="80px"
            height="80px"
          />
        )}
      </picture>
      <h3>{props.name}</h3>
      <p>{props.title}</p>
      {/* <a href={props.slackLink}>Slack</a> */}
    </div>
  );
};

export default Profile;
