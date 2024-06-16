import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

interface GetProductByIdRequest {
    url: any;
    params: {
      id: string;
    };
}

export const fetchAmazonProductByID = async (product_id: string) => {
    try {
        const config: GetProductByIdRequest = {
          url: '/get_search_product',
          params: {
            id: product_id
          }
        };
        const response = await api.get(config);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from the backend:', error);
        throw error;
      }
};

export const trackProduct = async (productId: string, email: string) => {
    try {
        const response = await api.get(`/amazon_scraper/tracked_product=${productId}&user_email=${email}`);
        return response.data;
    } catch (error) {
        console.error(`Error while adding product (${productId}) to TrackedProduct database as Tracked product:`, error);
        throw error;
    }
};

export const getTrackedProducts = async () => {
    try {
        const response = await api.get(`/amazon_scraper/all_tracked_products`);
        return response.data;
    } catch (error) {
        console.error(`No tracked Products`, error);
        throw error;
    }
};

