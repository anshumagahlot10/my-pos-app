import { Inventory } from '../types/inventory';
import { ProductCategory } from '../types/productCategory';
import axios from './api';

const POS_BASE_URL = '/posservice'; // Ensure the correct base URL

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

// Fetch product categories by company ID (updated to use path variable)
export const getProductCategoriesByCompanyId = async (companyId: string): Promise<ProductCategory[]> => {
    const response = await axios.get<ApiResponse<ProductCategory[]>>(`${POS_BASE_URL}/categories/${companyId}`);
    return response.data.data; // Extract categories from response
};

// Fetch inventories by product category ID, location ID, and company ID
export const getInventoriesByCategory = (
    categoryId: string,
    locationId: string,
    companyId: string
  ): Promise<ApiResponse<Inventory[]>> =>
    axios
      .get<ApiResponse<Inventory[]>>(
        `${POS_BASE_URL}/inventories/${categoryId}/${locationId}/${companyId}`
      )
      .then((response) => response.data);
  




