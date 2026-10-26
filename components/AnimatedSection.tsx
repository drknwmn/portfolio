import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useReducedMotion from "../hooks/useReducedMotion";

interface AnimatedSectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
  as?: "section" | "article" | "div";
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", as: Element = "section", ...sectionProps }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>();
  const reducedMotion = useReducedMotion();

  return (
    <Element
      {...sectionProps}
      ref={(element: HTMLElement | null) => { ref.current = element; }}
      className={`reveal-section ${isVisible && !reducedMotion ? "is-visible" : ""} ${className}`.trim()}
      data-reveal={isVisible || reducedMotion ? "visible" : "pending"}
    >
      {children}
    </Element>
  );
};

export default AnimatedSection;
