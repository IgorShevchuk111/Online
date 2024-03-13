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

export const updateSelectedFilters = (filterValue, filterType) => {
  return (dispatch, getState) => {
    const selectedFilters = getState().selectedFilters[filterType];
    const updatedFilters = selectedFilters.includes(filterValue)
      ? selectedFilters.filter(
          (selectedFilter) => selectedFilter !== filterValue
        )
      : [...selectedFilters, filterValue];
    dispatch({
      type: "UPDATE_SELECTED_FILTERS",
      payload: { filterType, updatedFilters },
    });
  };
};

export const filter = () => {
  return (dispatch, getState) => {
    const { data, selectedMenuItem, selectedFilters } = getState();
    const filteredProducts = Object.values(data[selectedMenuItem] || {}).filter(
      (product) => {
        const brandMatch =
          selectedFilters.brands.length === 0 ||
          selectedFilters.brands.includes(product.brand);
        const modelMatch =
          selectedFilters.models.length === 0 ||
          selectedFilters.models.includes(product.model);
        const colorMatch =
          selectedFilters.colors.length === 0 ||
          product.color.some((color) => selectedFilters.colors.includes(color));
        return brandMatch && modelMatch && colorMatch;
      }
    );
    dispatch({
      type: "UPDATE_FILTERED_ITEMS",
      payload: filteredProducts,
    });
  };
};
