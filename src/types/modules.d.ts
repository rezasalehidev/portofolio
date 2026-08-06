declare module "aos" {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    disable?: boolean | "mobile" | "phone" | "tablet" | "desktop";
    easing?: string;
  }

  const AOS: {
    init: (options?: AosOptions) => void;
  };

  export default AOS;
}

declare module "ityped" {
  export interface ITypedOptions {
    strings: string[];
    typeSpeed?: number;
    startDelay?: number;
    showCursor?: boolean;
  }

  export function init(
    element: Element | null,
    options: ITypedOptions
  ): void;
}

declare module "smooth-scroll" {
  export interface SmoothScrollOptions {
    speed?: number;
    speedAsDuration?: boolean;
  }

  export default class SmoothScroll {
    constructor(selector: string, options?: SmoothScrollOptions);
  }
}

declare module "react-progressbar-on-scroll" {
  import { FC } from "react";

  interface ProgressBarProps {
    color?: string;
    gradient?: boolean;
    height?: number;
    gradientColor?: string;
  }

  const ProgressBar: FC<ProgressBarProps>;
  export default ProgressBar;
}

declare module "react-bootstrap/ProgressBar" {
  import { FC } from "react";

  interface ProgressBarProps {
    now: number;
    striped?: boolean;
    variant?: string;
  }

  const ProgressBar: FC<ProgressBarProps>;
  export default ProgressBar;
}

declare module "animate.css";
declare module "aos/dist/aos.css";
declare module "*.css";
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
