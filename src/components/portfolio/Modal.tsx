import classNames from "classnames";
import React from "react";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  open?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  closeOnClickBackground?: boolean;
  titleClassName?: string;
  modalContainerClassName?: string;
  modalHeaderClassName?: string;
  onClose: () => void;
  showTitle?: boolean;
}

const Modal = ({
  title,
  children,
  open,
  onClose,
  size = "sm",
  closeOnClickBackground = true,
  titleClassName,
  modalContainerClassName,
  modalHeaderClassName,
  showTitle = true,
}: ModalProps) => {
  if (!open) return null;

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full rounded-t-8 h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      aria-hidden
      onClick={closeOnClickBackground ? handleCloseModal : () => {}}
    >
      <div
        className={classNames(
          "bg-white shadow-md",
          size === "xs" && "w-1/5",
          size === "sm" && "w-1/4",
          size === "md" && "w-1/3",
          size === "lg" && "w-1/2",
          size === "xl" && "w-[70%]",
          modalContainerClassName
        )}
        aria-hidden
        onClick={(event) => event.stopPropagation()}
      >
        {showTitle ? (
          <div
            className={classNames(
              "bg-[#333333] p-30 flex justify-between items-center w-full border-b-2 border-b-primary",
              modalHeaderClassName
            )}
          >
            <p
              className={classNames(
                "font-light text-[24px] leading-7 text-white",
                titleClassName
              )}
            >
              {title}
            </p>
          </div>
        ) : (
          <></>
        )}
        {children ?? <div>Modal content</div>}
      </div>
    </div>
  );
};

export default Modal;
