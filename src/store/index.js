import { createStore } from 'redux';
import { cartReducer } from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store);
