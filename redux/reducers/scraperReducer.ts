import {
    SEARCH_SCRAPER_REQUEST,
    SEARCH_SCRAPER_SUCCESS,
    SEARCH_SCRAPER_FAIL
} from "../types/scraperTypes"

interface Products {
    title: string,
    price: number,
    image_url: string,
    url: string
}

interface searchProductsAction {
    type: string,
    message?: string,
    error?: string,
    payload?: Products[],
}

type ErrorState = string | null;

const initialState = {
    message: "",
    error: null as ErrorState,
    payload: [] 
}

export const searchProductScraper = (state: typeof initialState = initialState, action: searchProductsAction): typeof initialState => {
    switch (action.type) {
        case SEARCH_SCRAPER_REQUEST: 
            return {
                ...state,
                message: "Scraper starting request successfully sent to backend",
                error: null 
            }
        case SEARCH_SCRAPER_SUCCESS:
            return {
                ...state,
                message: "Successfully retrieved scraped products list",
                error: null,
            }
        case SEARCH_SCRAPER_FAIL:
            return { 
                ...state,
                error: action.error || "",
            }
        default:
            return state
    }
}