export const removeFirstOccurence = (
  arr: Array<string>,
  item: string
): Array<string> => {
  let index = arr.indexOf(item);
  if (index < 0) {
    return arr;
  }
  let firstHalf = [];
  for (let i = 0; i < index; i++) {
    firstHalf.push(arr[i]);
  }
  let otherHalf = [];
  for (let i = index + 1; i < arr.length; i++) {
    otherHalf.push(arr[i]);
  }

  let finalArr = [...firstHalf, ...otherHalf];

  return finalArr;
};

export const getStringArray = (newProducts: Array<string>) => {
  let fStr = "";

  for (let i = 0; i < newProducts.length; i++) {
    if (i !== newProducts.length - 1) {
      fStr += "'" + newProducts[i] + "', ";
    } else {
      fStr += "'" + newProducts[i] + "'";
    }
  }

  return "[" + fStr + "]";
};
