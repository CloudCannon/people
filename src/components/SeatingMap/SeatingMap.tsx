/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { ReactComponent as SeatingMapRaw } from "../../data/seating-map.svg";
import Profile, { ProfileProps } from "../Profile/Profile";
import "./SeatingMap.scss";
import Tooltip from "../Tooltip/Tooltip";
import Seats from "../../data/seats.json";

/**
 * Interface for SeatingMap props
 */
export interface SeatingMapProps {
  children?: any;
}

/**
 *  A SeatingMap component.
 */
const SeatingMap: React.FC<SeatingMapProps> = (props) => {
  const [goTooltip, setGoTooltip] = React.useState(false);
  const [
    highlightedSeat,
    setHighlightedSeat,
  ] = React.useState<ProfileProps | null>(null);

  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-name]"));
    for (const element of elements) {
      element.setAttribute("data-tooltip", "true");
      element.classList.add("tooltip");
    }
    setGoTooltip(true);
  }, []);

  return (
    <React.Fragment>
      {goTooltip && (
        <Tooltip
          targetSelector="[data-tooltip]"
          onTargetChange={(e) => {
            if (e?.dataset.name) {
              const person = Seats[e.dataset.name as "1"];
              setHighlightedSeat(person ?? null);
            }
          }}
        >
          {highlightedSeat && <Profile {...highlightedSeat} />}
        </Tooltip>
      )}
      <SeatingMapRaw />
    </React.Fragment>
  );
};

export default SeatingMap;
