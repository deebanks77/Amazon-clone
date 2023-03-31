export const initialState = {
  user: null,
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_CART":
      const newBasket = state.filter((item) => item.id !== action.item.id);
      return { ...state, basket: newBasket };

    default:
      break;
  }
};
