import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide.js'
import userReducer from './slides/userSlide.js'
import productReducer from './slides/productSlide.js'
import orderReducer from './slides/orderSlide.js'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['product', 'user']
}
const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
    order: orderReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)