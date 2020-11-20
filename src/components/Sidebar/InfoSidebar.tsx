/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import People from "../../data/seats.json";
import { Button, Tooltip } from "antd";
import CloseIcon from "./close.svg";

/**
 * Interface for InfoSidebar props
 */
export interface InfoSidebarProps {
  children?: any;
  person: Partial<typeof People[keyof typeof People]> | null;
  onClose?: () => void;
  className?: string;
}

/**
 *  A InfoSidebar component.
 */
const InfoSidebar: React.FC<InfoSidebarProps> = (props) => {
  return (
    <React.Fragment>
      <aside
        className={props.className}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {props.onClose && (
          <Button
            shape="circle"
            onClick={() => props.onClose?.()}
            css={css`
              margin: 0 0 0 auto;
            `}
            size="large"
            icon={
              <div
                css={css`
                  width: 20px;
                  height: 20px;
                  margin: 0 auto;

                  mask: url(${CloseIcon}) no-repeat 0 0 / contain;
                  -webkit-mask: url(${CloseIcon}) no-repeat 0 0 / contain;
                  background-image: unset;
                  background-color: black;
                  background-repeat: no-repeat;
                  background-size: contain;
                  will-change: mask, -webkit-mask;
                `}
              />
            }
          />
        )}

        {props.person ? (
          <React.Fragment>
            <Avatar size={200} src={props.person.profileImage} />
            <h3
              css={css`
                margin: 30px 0 0 0;
                font-size: 1.2rem;
              `}
            >
              {props.person.name}
            </h3>
            <p
              css={css`
                margin: 10px 0 0 0;
                font-size: 1.05rem;
              `}
            >
              {props.person.title}
            </p>
            <p
              css={css`
                margin: 25px 0 0 0;
                font-size: 1rem;
              `}
            >
              {props.person.description}
            </p>
          </React.Fragment>
        ) : null}
        {/* <p>{props.person.description}</p> */}
      </aside>
    </React.Fragment>
  );
};

export default InfoSidebar;
