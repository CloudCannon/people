import React from "react";
import classnames from "classnames";
import "./ToolTip.scss";

/**
 * Interface for Tooltip props
 */
export interface TooltipProps {
  children?: any;
  targetSelector: string;
}

/**
 *  A Tooltip component.
 */
const Tooltip: React.FC<TooltipProps> = (props) => {
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const targetElements = Array.from(
      document.querySelectorAll(props.targetSelector)
    );

    for (const element of targetElements) {
      if (element) {
        console.log("element", element);
        element.addEventListener("mouseenter", () => {
          setActive(true);
        });
        element.addEventListener("mouseleave", () => {
          setActive(false);
        });
      }
    }

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
    <div className={classnames({ active }, "tooltip-tip")}>
      {props.children}
    </div>
  );
};

export default Tooltip;
