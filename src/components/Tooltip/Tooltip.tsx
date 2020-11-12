import React from "react";
import classnames from "classnames";
import "./ToolTip.scss";

/**
 * Interface for Tooltip props
 */
export interface TooltipProps {
  children?: any;
  targetSelector: string;
  onTargetChange?: (e: HTMLElement | SVGElement | null) => void;
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
        element.addEventListener("mouseenter", () => {
          props.onTargetChange?.(element as HTMLElement | SVGElement);
          setActive(true);
        });
        element.addEventListener("mouseleave", () => {
          props.onTargetChange?.(null);
          setActive(false);
        });
      }
    }

    const tooltipSpan = document.querySelector(".tooltip-tip") as
      | HTMLElement
      | SVGElement;

    window.onmousemove = function (e: any) {
      const x = e.clientX;
      const y = e.clientY;
      let right = false;

      if (e.clientX + 100 > window.innerWidth) {
        right = true;
      }

      if (tooltipSpan) {
        tooltipSpan.style.top = y + 20 + "px";

        if (!right) {
          tooltipSpan.style.left = x + 20 + "px";
        } else {
          tooltipSpan.style.right = 100 + "px";
        }
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
