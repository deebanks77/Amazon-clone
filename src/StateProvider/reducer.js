export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_CART":
      const newBasket = state.basket.filter((item) => item.id !== action.id);
      return { ...state, basket: newBasket };

    case "SIGN_IN":
      localStorage.setItem("user", JSON.stringify(action.user));
      return { ...state, user: action.user };
    case "SIGN_UP":
      localStorage.setItem("user", JSON.stringify(action.user));
      return { ...state, user: action.user };
    case "SIGN_OUT":
      localStorage.removeItem("user");
      return { ...state, user: null };

    default:
      break;
  }
};
