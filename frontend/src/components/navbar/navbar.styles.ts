import styled from "styled-components";
import { motion } from "framer-motion";

interface NavbarStyles {
  navType: boolean;
}

interface DropDownStyled {
  listener: boolean;
}

interface SearchInputI {
  queryRes: boolean;
}

export const NavbarParentContainer = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px 0px #00000006;
`;

export const NavbarChildContainer = styled.div`
  width: 80%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BrandName = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const NavLinks = styled(motion.ul)<NavbarStyles>`
  height: ${({ navType }) => (navType ? "calc(100vh - 80px)" : "100%")};
  list-style: none;
  display: flex;
  background-color: #fff;
  align-items: center;
  flex-direction: ${({ navType }) => (navType ? "column" : "row")};
  position: ${({ navType }) => (navType ? "absolute" : "none")};
  top: 80px;
  width: ${({ navType }) => (navType ? "100vw" : "")};
  left: 0;
  right: 0;
  // transform: ${({ navType }) => (navType ? "translateX(-20px)" : "")};
  padding: ${({ navType }) => (navType ? "30px 0" : "")};

  .category {
    border-bottom-left-radius: ${({ navType }) => (navType ? "15px" : "0")};
    border-bottom-right-radius: ${({ navType }) => (navType ? "15px" : "0")};
  }
`;

export const ListItem = styled(motion.li)<NavbarStyles>`
  margin: ${({ navType }) => (navType ? "10px 0" : "")};
  margin-right: ${({ navType }) => (navType ? "0" : "10px")};
  margin-left: ${({ navType }) => (navType ? "0" : "10px")};
  transform: ${({ navType }) => (navType ? "translateX(-20px)" : "")};
  padding: 0 5px;

  & > a {
    color: #222;
    text-decoration: none;
  }
  opacity: 0;
  padding: 8px 10px;
  border-radius: 15px;
  &:hover {
    background-color: #eee;
  }
`;

export const HamMenu = styled.div`
  width: 45px;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 5px;
  border-radius: 4px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #eee;
    cursor: pointer;
    & > span {
      transition: all 0.5s ease;
      width: 35px;
    }
  }
`;

export const Ham = styled.span`
  width: 30px;
  height: 2px;
  background-color: #222;
`;

export const MidHam = styled.span`
  margin: 6px 0;
  width: 30px;
  height: 2px;
  background-color: #222;
`;

export const SearchComponent = styled(motion.li)<NavbarStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  margin-right: ${({ navType }) => (navType ? "0" : "30px")};
`;

export const SearchInputField = styled(motion.input)<SearchInputI>`
  width: 0px;
  height: 30px;
  border: none;
  background-color: #eee;
  padding: 5px 15px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: ${({ queryRes }) => (!queryRes ? "20px" : "0px")};

  &:active {
    outline: 0;
  }

  &:focus {
    outline: 0;
  }
`;

export const CloseInputField = styled(motion.div)<SearchInputI>`
  width: 30px;
  height: 30px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: ${({ queryRes }) => (!queryRes ? "20px" : "0px")};
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 15px;
    left: 0;
    height: 2px;
    border-radius: 1px;
    top: 13px;
    background-color: #6e6e6e;
    transform: rotate(45deg);
    left: 2px;
  }

  &::after {
    transform: rotate(-45deg);
    right: 2px;
  }
`;

export const CategoryDropDownList = styled(motion.ul)<DropDownStyled>`
  position: absolute;
  margin-top: 1rem;
  // left: 0;
  width: 120px;
  right: 0;
  background-color: #eee;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 5px;
  top: 19px;
  border-radius: 10px;
  border-top-right-radius: 0;
  box-shadow: 0px 4px 4px 0px #00000012;
  opacity: 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const SubItem = styled(motion.li)`
  width: 100%;
  text-align: center;
  margin: 5px 0;
  margin-top: 0px;
  border-bottom: 1px solid #00000010;
  padding: 5px 0;
  &:last-child {
    border-bottom: none;
  }
  & > a {
    text-decoration: none;
    color: #222;

    &:hover {
      color: #22222250;
    }
  }
`;

export const SearchResults = styled.ul`
  position: absolute;
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 30px;
  background-color: #eee;
  list-style: none;
`;

export const SearchResItem = styled.li`
  width: 100%;
  margin: 8px 0;
`;
