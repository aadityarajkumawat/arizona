import styled from "styled-components";
import { motion } from "framer-motion";

interface NavbarStyles {
  navType: boolean;
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
  // background-color: red;
  align-items: center;
  flex-direction: ${({ navType }) => (navType ? "column" : "row")};
  position: ${({ navType }) => (navType ? "absolute" : "none")};
  top: 80px;
  width: ${({ navType }) => (navType ? "100vw" : "")};
  left: 0;
  right: 0;

  // transform: ${({ navType }) => (navType ? "translateX(-20px)" : "")};
  padding: ${({ navType }) => (navType ? "30px 0" : "")};
`;

export const ListItem = styled(motion.li)<NavbarStyles>`
  margin: ${({ navType }) => (navType ? "10px 0" : "")};
  margin-right: ${({ navType }) => (navType ? "0" : "25px")};
  margin-left: ${({ navType }) => (navType ? "0" : "25px")};
  transform: ${({ navType }) => (navType ? "translateX(-20px)" : "")};
  padding: 0 5px;
  opacity: 0;
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
