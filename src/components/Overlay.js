"use client";
import React from "react";
import { createPortal } from "react-dom";
import { cn } from "./theme/utils/cn";
import { ResponsiveGrid } from "./theme";
import { motion } from "framer-motion";

export const Overlay = ({
  children,
  id,
  as: Component = "div",
  backdropAs: BackdropComponent = "div",
  backdropClassName = "",
  handleClose,
  className = "",
  backdropProps,
  ...props
}) => {
  const MotionBackdrop = motion(BackdropComponent);
  const MotionContentWrapper = motion(Component);

  React.useEffect(() => {
    if (window) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return createPortal(
    <MotionBackdrop
      onClick={(e) => {
        handleClose && handleClose(e);
      }}
      id={id}
      className={cn(
        `fixed w-full h-full top-0 left-0 bg-black/20`,
        backdropClassName
      )}
      {...backdropProps}
    >
      <MotionContentWrapper
        className={cn(`overlay-content-wrapper  bg-white`, className)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        {...props}
      >
        {children}
      </MotionContentWrapper>
    </MotionBackdrop>,
    document.body
  );
};
