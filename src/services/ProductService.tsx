import { Product } from '../types/product';
import { ProductCategory } from '../types/productCategory';
import axios from './api';

const PRODUCT_BASE_URL = '/productservice/products';
const PRODUCT_CATEGORY_BASE_URL = '/productservice/productcategories';
export interface PaginatedProductResponse {
    content: Product[];
    pageable: any; // or define proper type for pageable
    totalElements: number;
    totalPages: number;
    last: boolean;
    // ... other pagination fields
  }
export interface ApiResponse<T> {
    data: T;
}

export const getProductsByCompanyId = (companyId: string, page: number = 1,
    size: number = 10): Promise<ApiResponse<PaginatedProductResponse>> =>
    axios.get<ApiResponse<PaginatedProductResponse>>(PRODUCT_BASE_URL, {
        params: { companyId ,page, size },
    }).then(response => response.data);

export const searchProducts = (
    searchTerm: string,
    companyId: string,
): Promise<ApiResponse<Product[]>> =>
    axios.get<ApiResponse<Product[]>>(PRODUCT_BASE_URL, {
        params: {
            searchTerm,
            companyId,
        },
    }).then(response => response.data);

export const getProductById = (id: string): Promise<ApiResponse<Product>> =>
    axios.get<ApiResponse<Product>>(`${PRODUCT_BASE_URL}/${id}`).then(response => response.data);


export const getProductCategoriesByCompanyId = (companyId: string): Promise<ApiResponse<ProductCategory[]>> =>
    axios.get<ApiResponse<ProductCategory[]>>(PRODUCT_CATEGORY_BASE_URL, {
        params: { companyId },
    }).then(response => response.data);



