"use client";
import { Overlay } from "./Overlay";
import { AnimatePresence } from "framer-motion";

export const AnimatedOverlay = ({
  children,
  className,
  handleClose,
  isOpen,
  backdropClassName,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          key={className}
          handleClose={handleClose}
          className={className}
          backdropClassName={backdropClassName}
          backdropProps={{
            initial: {
              backgroundColor: "rgba(0,0,0, 0)",
            },
            animate: {
              backgroundColor: "rgba(0,0,0, 0.2)",
            },
            exit: {
              backgroundColor: "rgba(0,0,0, 0)",
            },
          }}
          {...props}
        >
          {children}
        </Overlay>
      )}
    </AnimatePresence>
  );
};
