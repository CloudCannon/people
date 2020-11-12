import React from "react";
import { ReactComponent as SeatingMapRaw } from "../../data/seating-map.svg";
import ReactTooltip from "react-tooltip";
import "./SeatingMap.scss";
import Tooltip from "../Tooltip/Tooltip";

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
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const seats = Array.from(document.querySelectorAll(".tooltip"));
    for (const seat of seats) {
      seat.setAttribute("data-tip", "hello!");
      seat.setAttribute("data-for", "main");
      console.log(seat);

      seat.addEventListener("mouseenter", () => {
        setActive(true);
      });
      seat.addEventListener("mouseleave", () => {
        setActive(false);
      });
    }
  }, []);

  return (
    <React.Fragment>
      <div className="regular tooltip">Hover me</div>
      <Tooltip targetSelector=".tooltip" />
      <SeatingMapRaw />
    </React.Fragment>
  );
};

export default SeatingMap;
