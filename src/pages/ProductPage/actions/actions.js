import { data } from "../../../data";
import axios from "axios";

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
        const model = data.smartPhones[key];
        smartPhones.push(model);
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
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
};
