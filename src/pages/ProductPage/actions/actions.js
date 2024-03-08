import axios from "axios";

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

export const addSelectedProducts = () => {
  return (dispatch, getState) => {
    const { data, selectedMenuItem } = getState();
    let products;
    products = data[selectedMenuItem]
      ? Object.values(data[selectedMenuItem]).map((item) => ({
          ...item,
          checked: false,
        }))
      : [];
    dispatch({
      type: "SELECTED_PRODUCTS",
      payload: products,
    });
  };
};

export const handleSelect = (obj) => {
  return (dispatch, getState) => {
    const { selectedProducts } = getState();
    obj.selectAllRef.current.checked = false;
    let filteredProducts;
    if (obj.brand) {
      filteredProducts = selectedProducts.map((item) => {
        if (item.brand === obj.brand) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    }
    if (obj.model) {
      filteredProducts = selectedProducts.map((item) => {
        if (item.model === obj.model) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    }
    if (obj.color) {
      filteredProducts = selectedProducts.map((item) => {
        if (item.color.includes(obj.color)) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    }
    dispatch({
      type: "SELECTED_PRODUCTS",
      payload: filteredProducts,
    });
  };
};

export const handleSelectAll = (ref) => {
  return (dispatch, getState) => {
    const { selectedProducts } = getState();
    let updatedProducts = selectedProducts.map((item) => ({
      ...item,
      checked: ref.current.checked,
    }));
    console.log(updatedProducts, "ref");
    dispatch({
      type: "SELECTED_PRODUCTS",
      payload: updatedProducts,
    });
  };
};

export const filteredData = () => {
  return (dispatch, getState) => {
    const { selectedProducts } = getState();
    let filteredResult = selectedProducts;
    const checkedItems = selectedProducts.filter((item) => item.checked);
    if (checkedItems.length > 0) {
      filteredResult = checkedItems;
    }
    dispatch({
      type: "FILTRED_DATA",
      payload: filteredResult,
    });
  };
};
