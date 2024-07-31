import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import productsReducer from "./slices/productsSlice";
import persistedCartReducer from "./slices/cartSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export * from "./thunks/fetchProductsThunk";
export * from "./slices/sidebarSlice";
export * from "./slices/cartSlice";
