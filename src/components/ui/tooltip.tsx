import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren } from "react";

export const TooltipProvider = ({ children }: PropsWithChildren) => {
  return (
    <Tooltip.Provider delayDuration={150} skipDelayDuration={200}>
      {children}
    </Tooltip.Provider>
  );
};

export const TooltipRoot = Tooltip.Root;
export const TooltipTrigger = Tooltip.Trigger;
export const TooltipPortal = Tooltip.Portal;
export const TooltipContent = Tooltip.Content;
export const TooltipArrow = Tooltip.Arrow;
