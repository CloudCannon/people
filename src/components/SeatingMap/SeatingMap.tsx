/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";

import React from "react";
import { ReactComponent as SeatingMapRaw } from "../../data/seating-map.svg";
import Profile, { ProfileProps } from "../Profile/Profile";
import "./SeatingMap.scss";
import Tooltip from "../Tooltip/Tooltip";

/**
 * Interface for SeatingMap props
 */
export interface SeatingMapProps {
  children?: any;
  css?: any;
  className?: string;
  seats: Record<string, any>;
  activeSeat?: string;
  onPersonSelect?: (personId: string | null) => void;
}

/**
 *  A SeatingMap component.
 */
const SeatingMap: React.FC<SeatingMapProps> = (props) => {
  // Trigger tooltip after data loaded
  const [goTooltip, setGoTooltip] = React.useState(false);
  const [
    highlightedSeat,
    setHighlightedSeat,
  ] = React.useState<ProfileProps | null>(null);

  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-name]"));
    for (const element of elements) {
      const number = (element as HTMLElement).dataset.name;

      if (number && props.seats[number]) {
        element.setAttribute("data-tooltip", "true");
        element.addEventListener("click", () => {
          props.onPersonSelect?.(number ?? null);
        });

        element.classList.add("tooltip");
        element.classList.add("seat");
      } else if (number && parseInt(number) >= 0) {
        element.classList.add("empty");
      }
    }
    setGoTooltip(true);
  }, []);

  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-name]"));
    if (props.activeSeat) {
      for (const element of elements) {
        const id = (element as HTMLElement).dataset.name;
        if (id === props.activeSeat) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      }
    }
  }, [props.activeSeat]);

  return (
    <React.Fragment>
      {goTooltip && (
        <Tooltip
          targetSelector="[data-tooltip]"
          onTargetChange={(e) => {
            if (e?.dataset.name) {
              const person = props.seats[e.dataset.name];
              setHighlightedSeat(person ?? null);
            }
          }}
        >
          {highlightedSeat && (
            <div css={css`
              background-color: rgba(254, 254, 254, 0.7);
              padding: 30px;
            `}>
              <Profile {...highlightedSeat} />
            </div>
          )}
        </Tooltip>
      )}
      <SeatingMapRaw className={props.className} />
    </React.Fragment>
  );
};

export default SeatingMap;
