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
      let offscreenX = false;
      let offscreenY = false;

      if (e.clientX + 100 > window.innerWidth) {
        offscreenX = true;
      }
      if (e.clientY + 200 > window.innerHeight) {
        offscreenY = true;
      }

      if (tooltipSpan) {
        if (!offscreenY) {
          tooltipSpan.style.top = y + 20 + "px";
          tooltipSpan.style.bottom = '';
        } else {
          tooltipSpan.style.top = '';
          tooltipSpan.style.bottom = 20 + "px";
        }

        if (!offscreenX) {
          tooltipSpan.style.left = x + 20 + "px";
          tooltipSpan.style.right = "";
        } else {
          tooltipSpan.style.left = "";
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
