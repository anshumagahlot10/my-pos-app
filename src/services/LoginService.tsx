import api from "./api";


const LOGIN_BASE_URL = '/auth';

export interface LoginResponse {
    username: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refereshToken: string;
    userId: string;
    companyId: string;
}
export interface LoginRequest {
    username: string;
    password: string;
}

export interface ApiResponse<T> {
    accessToken: any;
    userId: any;
    data: T;
}

export const login = (loginRequest: LoginRequest): Promise<ApiResponse<LoginResponse>> =>
    api.post<ApiResponse<LoginResponse>>(LOGIN_BASE_URL + '/login', loginRequest).then(response => response.data);
