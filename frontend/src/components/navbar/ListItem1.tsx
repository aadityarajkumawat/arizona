import React from "react";
import { ListItem } from "./navbar.styles";

interface Props {
  x: number;
  opacity: number;
  mul: number;
  setNavOpen: boolean;
  navLinkName?: string;
  className?: string;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onClick?: () => void;
}

const ListItem1: React.FC<Props> = ({
  x,
  opacity,
  mul,
  setNavOpen,
  className,
  onHoverStart,
  onHoverEnd,
  onClick,
  children,
}) => {
  return (
    <ListItem
      className={className}
      animate={{ x, opacity }}
      transition={{ duration: 0.5, delay: 1 * mul }}
      navType={setNavOpen}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {children}
    </ListItem>
  );
};
export default ListItem1;
