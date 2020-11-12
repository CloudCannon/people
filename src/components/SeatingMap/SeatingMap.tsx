/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { ReactComponent as SeatingMapRaw } from "../../data/seating-map.svg";
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
  const [highlightedSeat, setHighlightedSeat] = React.useState<number | null>(
    null
  );

  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-name]"));
    for (const element of elements) {
      element.setAttribute("data-tooltip", "true");
      // element.classList.add("tooltip");
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
              setHighlightedSeat(parseInt(e?.dataset.name));
            }
          }}
        >
          {/* @ts-expect-error */}
          Hello! {highlightedSeat ? JSON.stringify(Seats[highlightedSeat]) : ""}
        </Tooltip>
      )}
      <SeatingMapRaw />
    </React.Fragment>
  );
};

export default SeatingMap;
