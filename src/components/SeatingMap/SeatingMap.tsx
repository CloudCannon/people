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

  const [goTooltip, setGoTooltip] = React.useState(false);

  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-name]"));
    for (const element of elements) {
      // element.setAttribute("data-tooltip", "true");
      element.classList.add('tooltip');
    }
    setGoTooltip(true);
  }, []);

  return (
    <React.Fragment>
      <div className="regular tooltip">Hover me</div>
      {goTooltip && <Tooltip targetSelector=".tooltip">Hello!</Tooltip>}
      <SeatingMapRaw />
    </React.Fragment>
  );
};

export default SeatingMap;
