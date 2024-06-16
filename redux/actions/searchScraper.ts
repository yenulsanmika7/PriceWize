import {
    SEARCH_SCRAPER_REQUEST,
    SEARCH_SCRAPER_SUCCESS,
    SEARCH_SCRAPER_FAIL,

    TRACKED_PRODUCTS_REQUEST,
    TRACKED_PRODUCTS_SUCCESS,
    TRACKED_PRODUCTS_FAIL
} from "../types/scraperTypes"
import axios from "axios";
import { AppDispatch } from "@/store/store"

const BACKEND_URL = "http://127.0.0.1:8000"

type RequestData = {
    website: string,
    search_query: string
}

export const searchScraper = async (data: RequestData, dispatch: AppDispatch) => {    
    dispatch({ type: SEARCH_SCRAPER_REQUEST })

    const url = `${BACKEND_URL}/products/search_products/`;
    await axios.post(url, data)
        .then(({ data }) => {    
            console.log(data);
            dispatch({
                type: SEARCH_SCRAPER_SUCCESS,
                payload: data.products_data,
            });
        })
        .catch((error) => {
            dispatch({
                type: SEARCH_SCRAPER_FAIL,
                error: error.response ? error.response.data : 'Could not connect to the website',
            })
        })
}

export const trackedProducts = async (data: RequestData, dispatch: AppDispatch) => {    
    dispatch({ type: TRACKED_PRODUCTS_REQUEST })

    const url = `${BACKEND_URL}/products/tracked_products/`;
    await axios.post(url, data)
        .then(({ data }) => {    
            dispatch({
                type: TRACKED_PRODUCTS_SUCCESS,
                payload: data.products_data,
            });
        })
        .catch((error) => {
            dispatch({
                type: TRACKED_PRODUCTS_FAIL,
                error: error.response ? error.response.data : 'Could not connect to the website',
            })
        })
}