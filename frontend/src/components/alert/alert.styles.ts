import styled from "styled-components";
import { motion } from "framer-motion";

export const AlertContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const AlertContents = styled(motion.div)`
  width: 350px;
  height: 35px;
  background-color: #ffe6e6;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  opacity: 0;
`;
