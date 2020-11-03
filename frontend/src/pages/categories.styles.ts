import styled from "styled-components";
const flexCenter = "display: flex;justify-content: center;align-items: center";

export const CategoriesContainer = styled.div`
  ${flexCenter}
  width: 100%;
  margin-top: 30px;
`;

export const CategoriesContents = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

export const CategoryItem = styled.div`
  width: 270px;
  height: 280px;
  margin-bottom: 30px;
  box-shadow: 4px 4px 4px 0px #00000018;
  border-radius: 10px;
  cursor: pointer;
`;

export const CateImage = styled.img`
  width: 270px;
  height: 250px;
`;

export const CateBottomName = styled.div`
  ${flexCenter}
  border-radius: 10px;
  width: 270px;
  height: 30px;
  color: #000;
`;
