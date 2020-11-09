const searchProductsExporter = (
  setSearchQuery: (value: React.SetStateAction<Array<string>>) => void
) => {
  const searchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const array: Array<string> = [
      "Jackets",
      "Mens jackets",
      "Hoodies",
      "Hoodies for men",
      "Winter Hoodies",
      "Cardigan",
      "Black Cardigan",
      "gloves",
      "socks",
      "glasses",
    ];
    const searchRegExp = new RegExp(value, "gi");

    if (value !== "") {
      const filtered = array.filter((q) => q.match(searchRegExp));
      setSearchQuery(filtered);
    } else {
      setSearchQuery([]);
    }
  };

  return searchProducts;
};

export { searchProductsExporter };
