import React from "react";
import { SubItem } from "./navbar.styles";
import { Link } from "react-router-dom";

interface Props {
  categoryHandler: (categoryName: string) => void;
  categoryName: string;
}

const SubItem1: React.FC<Props> = ({ categoryHandler, categoryName }) => {
  return (
    <SubItem layout onClick={() => categoryHandler(categoryName)}>
      <Link to="/categories">{categoryName}</Link>
    </SubItem>
  );
};
export default SubItem1;
