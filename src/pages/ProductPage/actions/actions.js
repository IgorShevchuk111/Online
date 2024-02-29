import { data } from "../../../data";

export const createUniqueBrandsArray = (brand, updatedBrands) => {
  return (dispatch, getState) => {
    const { selectedMenuItem, uniqueBrandsArray } = getState();
    const uniqueBrandss = {};
    let uniqueBrands;
    data[selectedMenuItem]?.models.forEach((element) => {
      uniqueBrandss[element.brand] = { brand: element.brand, checked: false };
    });
    uniqueBrands = Object.values(uniqueBrandss);
    if (brand) {
      uniqueBrands = uniqueBrandsArray.map((item) =>
        item.brand === brand ? { ...item, checked: !item.checked } : item
      );
    } else if (updatedBrands) {
      uniqueBrands = uniqueBrandsArray.map((item, index) => {
        return {
          ...item,
          checked: updatedBrands[index].checked,
        };
      });
    }
    dispatch({ type: "UNIQUE_BRANDS_ARRAY", payload: uniqueBrands });
  };
};

export const filteredData = () => {
  return (dispatch, getState) => {
    const { selectedMenuItem } = getState();
    const { uniqueBrandsArray } = getState();
    let filteredResult = data[selectedMenuItem]?.models;

    const checkedBrands = uniqueBrandsArray?.filter((item) => item.checked);
    filteredResult = data[selectedMenuItem]?.models.filter((item) =>
      checkedBrands.some((checkedBrand) => checkedBrand.brand === item.brand)
    );

    dispatch({
      type: "FILTRED_DATA",
      payload: filteredResult,
    });
  };
};
