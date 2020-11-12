import React from "react";

/**
 * Interface for Profile props
 */
export interface ProfileProps {
  name: string;
  title: string;
  slackLink: string;
}

/**
 *  A Profile component.
 */
const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.title}</p>
      <a href={props.slackLink}>Slack</a>
    </div>
  );
};

export default Profile;
