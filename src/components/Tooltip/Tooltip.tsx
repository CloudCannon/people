import React from "react";
import classnames from "classnames";
import "./ToolTip.scss";

/**
 * Interface for Tooltip props
 */
export interface TooltipProps {
  children?: any;
  active: boolean;
}

/**
 *  A Tooltip component.
 */
const Tooltip: React.FC<TooltipProps> = (props) => {
  React.useEffect(() => {
    const tooltipSpan = document.querySelector(".tooltip-tip") as
      | HTMLElement
      | SVGElement;

    window.onmousemove = function (e: any) {
      const x = e.clientX,
        y = e.clientY;
      if (tooltipSpan) {
        tooltipSpan.style.top = y + 20 + "px";
        tooltipSpan.style.left = x + 20 + "px";
      }
    };
  }, []);
  return (
    <div className={classnames({ active: props.active }, "tooltip-tip")}>
      Tooltip component
    </div>
  );
};

export default Tooltip;
