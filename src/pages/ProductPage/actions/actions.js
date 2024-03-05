import axios from "axios";

export const createUniqueBrandsArray = (brand, updatedBrands) => {
  return (dispatch, getState) => {
    const { selectedMenuItem, uniqueBrandsArray, data } = getState();
    let uniqueBrands;
    const products = data[selectedMenuItem]
      ? Object.values(data[selectedMenuItem])
      : [];
    const uniqueProductsObject = products.reduce((acc, product) => {
      acc[product.brand] = product;
      return acc;
    }, {});
    const uniqueProducts = Object.values(uniqueProductsObject);
    const newData = uniqueProducts.map((item) => ({ ...item, checked: false }));
    uniqueBrands = newData;

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

export const createControlledModels = (selectedModel, selectedAllModels) => {
  return (dispatch, getState) => {
    const { selectedMenuItem, data, modelArray, uniqueBrandsArray } =
      getState();
    let model;
    // Add property checked to Object
    model = data[selectedMenuItem]
      ? Object.values(data[selectedMenuItem]).map((item) => ({
          ...item,
          checked: false,
        }))
      : [];
    //  Selected Model
    const selectedBradn = uniqueBrandsArray?.filter((item) => item.checked);
    if (selectedBradn && selectedBradn.length > 0) {
      model = model.filter((item) =>
        selectedBradn.some((selBrand) => selBrand.brand === item.brand)
      );
    }
    // Change checked to !checked
    if (selectedModel) {
      model = modelArray.map((item) =>
        item.model === selectedModel
          ? { ...item, checked: !item.checked }
          : item
      );
    } else if (selectedAllModels) {
      model = modelArray.map((item, index) => {
        return {
          ...item,
          checked: selectedAllModels[index].checked,
        };
      });
    }

    dispatch({ type: "MODELS", payload: model });
  };
};

export const filteredData = () => {
  return (dispatch, getState) => {
    const { selectedMenuItem, uniqueBrandsArray, modelArray, data } =
      getState();

    const products = data[selectedMenuItem]
      ? Object.values(data[selectedMenuItem])
      : [];

    let filteredResult = products;
    // Filter Brand
    const checkedBrands = uniqueBrandsArray?.filter((item) => item.checked);
    filteredResult = products.filter((item) =>
      checkedBrands.some((checkedBrand) => checkedBrand.brand === item.brand)
    );
    // Filter Model
    const selectedModel = modelArray?.filter((item) => item.checked);
    if (selectedModel && selectedModel.length > 0) {
      const nn = modelArray.filter((item) => item.checked);
      filteredResult = nn;
    }
    dispatch({
      type: "FILTRED_DATA",
      payload: filteredResult,
    });
  };
};

export const fetchData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        "https://online-for-us-default-rtdb.firebaseio.com/.json"
      );
      const data = response.data;
      dispatch({
        type: "DATA",
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
};
