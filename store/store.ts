'use client'
import { searchProductScraper } from "@/redux/reducers/scraperReducer";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        searchProducts: searchProductScraper
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;