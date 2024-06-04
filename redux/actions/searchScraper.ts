import {
    SEARCH_SCRAPER_REQUEST,
    SEARCH_SCRAPER_SUCCESS,
    SEARCH_SCRAPER_FAIL
} from "../types/scraperTypes"
import axios from "axios";
import { AppDispatch } from "@/store/store"

const BACKEND_URL = 'http://127.0.0.1:8000'

type RequestData = {
    website: string,
    search_query: string
}

export const searchScraper = async (data: RequestData, dispatch: AppDispatch) => {
    dispatch({ type: SEARCH_SCRAPER_REQUEST })

    const url = `${BACKEND_URL}/scraper/search_products/`;
    await axios.post(url, data)
        .then(({ data }) => {    
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