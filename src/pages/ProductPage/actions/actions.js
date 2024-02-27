import { data } from "../../../data";

export const addBrand = (brand) => {
  return (dispatch, getState) => {
    const state = getState();
    const brandExists = state.brands.includes(brand);
    let updatedBrands;
    if (brand === "") {
      updatedBrands = [];
    } else {
      updatedBrands = brandExists
        ? state.brands.filter((existingBrand) => existingBrand !== brand)
        : [...state.brands, brand];
    }
    dispatch({
      type: "ADD_BRAND",
      payload: updatedBrands,
    });
  };
};

export const filteredData = (brands) => {
  return (dispatch, getState) => {
    const { selectedMenuItem } = getState();

    let filteredResult;
    if (brands.length > 0) {
      filteredResult = data[selectedMenuItem]?.models.filter((item) =>
        brands.includes(item.brand)
      );
    } else {
      filteredResult = data[selectedMenuItem]?.models;
    }
    dispatch({
      type: "FILTRED_DATA",
      payload: filteredResult,
    });
  };
};

export const addProductModels = () => {
  return (dispatch, getState) => {
    const { selectedMenuCategory } = getState();
    const models = selectedMenuCategory?.map(({ model }, index) => {
      return { name: model, checked: false, key: index };
    });
    dispatch({ type: "UPDATE_PRODUCT_MODELS", payload: models });
  };
};
