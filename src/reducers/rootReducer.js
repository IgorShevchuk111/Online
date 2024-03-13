const initState = {
  selectedBasketItems: [],
  filteredItems: [],
  selectedMenuItem: "",
  data: [],
  menuVisible: false,
  selectedFilters: {
    brands: [],
    models: [],
    colors: [],
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_FILTERED_ITEMS":
      return {
        ...state,
        filteredItems: action.payload,
      };
    case "UPDATE_SELECTED_FILTERS":
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          [action.payload.filterType]: action.payload.updatedFilters,
        },
      };
    case "DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_STATE_MENU_VISIBLE":
      return {
        ...state,
        menuVisible: action.value,
      };
    case "ADD_STATE_SELECTED_MENU":
      return {
        ...state,
        selectedMenuItem: action.value,
      };
    case "ADD_STATE_BASKET_ITEMS":
      const newItem = action.value;
      const isItemExisting = state.selectedBasketItems.some(
        (item) => item.id === newItem.id
      );
      if (isItemExisting) {
        const updatedItems = state.selectedBasketItems.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: item.quantity + newItem.quantity };
          }
          return item;
        });
        return {
          ...state,
          selectedBasketItems: updatedItems,
        };
      } else {
        return {
          ...state,
          selectedBasketItems: [...state.selectedBasketItems, newItem],
        };
      }

    case "UPDATE_STATE_BASKET_ITEM":
      const updatedItemId = action.item.id;
      const updatedQuantity = action.item.quantity;

      const updatedBasket = state.selectedBasketItems.map((item) =>
        item.id === updatedItemId
          ? { ...item, quantity: updatedQuantity }
          : item
      );
      return {
        ...state,
        selectedBasketItems: updatedBasket,
      };

    case "DELETE_STATE_BASKET_ITEM":
      const updatedBasketItems = state.selectedBasketItems.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        selectedBasketItems: updatedBasketItems,
      };
    case "ADD_STATE_OPEN_ITEM":
      return {
        ...state,
        openedItem: action.value,
      };

    default:
      return state;
  }
};

export default rootReducer;
