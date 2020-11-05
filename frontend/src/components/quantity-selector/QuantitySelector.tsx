import React from "react";
import { ItemQuantityPicker, QuantityOptions } from "../../pages/cart.styles";

interface Props {}

const QuantitySelector: React.FC<Props> = () => {
  return (
    <ItemQuantityPicker>
      <QuantityOptions value="1">1</QuantityOptions>
      <QuantityOptions value="2">2</QuantityOptions>
      <QuantityOptions value="3">3</QuantityOptions>
      <QuantityOptions value="4">4</QuantityOptions>
      <QuantityOptions value="5">5</QuantityOptions>
      <QuantityOptions value="6">6</QuantityOptions>
      <QuantityOptions value="7">7</QuantityOptions>
      <QuantityOptions value="8">8</QuantityOptions>
      <QuantityOptions value="9">9</QuantityOptions>
      <QuantityOptions value="10">10</QuantityOptions>
    </ItemQuantityPicker>
  );
};
export default QuantitySelector;
