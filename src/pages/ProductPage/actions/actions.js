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

export const filteredData = () => {
  return (dispatch, getState) => {
    const { selectedMenuItem, uniqueBrandsArray } = getState();
    const data = getState()?.data;
    const products = [];
    if (data[selectedMenuItem]) {
      Object.keys(data[selectedMenuItem]).forEach((key) => {
        const obj = data[selectedMenuItem][key];
        products.push(obj);
      });
    }

    let filteredResult = products;

    const checkedBrands = uniqueBrandsArray?.filter((item) => item.checked);

    filteredResult = products.filter((item) =>
      checkedBrands.some((checkedBrand) => checkedBrand.brand === item.brand)
    );

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
      const smartPhones = [];
      const laptops = [];
      Object.keys(data.smartPhones).forEach((key) => {
        const obj = data.smartPhones[key];
        smartPhones.push(obj);
      });
      Object.keys(data.laptops).forEach((key) => {
        const model = data.laptops[key];
        laptops.push(model);
      });
      dispatch({
        type: "SMARTPHONES_DATA",
        payload: smartPhones,
      });
      dispatch({
        type: "LAPTOPS_DATA",
        payload: laptops,
      });
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
