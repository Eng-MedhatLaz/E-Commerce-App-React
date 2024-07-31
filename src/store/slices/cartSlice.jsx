import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    itemAmount: 0,
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      // add amount to product
      const newItem = { ...action.payload, amount: 1 };
      // check if the item is already in the cart
      const cartItem = state.cart.find((item) => {
        return item.id === action.payload.id;
      });
      // if cart item is already in the cart
      if (cartItem) {
        const newCart = [...state.cart].map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: cartItem.amount + 1 };
          } else {
            return item;
          }
        });
        state.cart = newCart;
      } else {
        state.cart.push(newItem);
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart(state) {
      state.cart = [];
    },
    increaseAmount(state, action) {
      const cartItem = state.cart.find((item) => {
        return item.id === action.payload;
      });
      const newItem = { ...cartItem, amount: 1 };

      if (cartItem) {
        const newCart = [...state.cart].map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: cartItem.amount + 1 };
          } else {
            return item;
          }
        });
        state.cart = newCart;
      } else {
        state.cart.push(newItem);
      }
    },
    decreaseAmount(state, action) {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        const newCart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: cartItem.amount - 1 };
          } else {
            return item;
          }
        });
        state.cart = newCart;
      }
      if (cartItem.amount < 2) {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload
        );
      }
    },
    updateAmount(state) {
      if (state.cart) {
        const amount = state.cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.amount;
        }, 0);
        state.itemAmount = amount;
      }
    },
    updateTotal(state) {
      const total = state.cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);
      state.total = total;
    },
  },
});

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseAmount,
  increaseAmount,
  updateAmount,
  updateTotal,
} = cartSlice.actions;
export default persistedCartReducer;
