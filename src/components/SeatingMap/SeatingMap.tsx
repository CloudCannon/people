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
            setHighlightedSeat(
              e?.dataset.name ? parseInt(e?.dataset.name) : null
            );
          }}
        >
          Hello! {highlightedSeat}
        </Tooltip>
      )}
      <SeatingMapRaw />
    </React.Fragment>
  );
};

export default SeatingMap;
