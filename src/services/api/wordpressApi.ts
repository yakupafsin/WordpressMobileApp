import { API_BASE_URL } from "@utils/constants";
import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: API_BASE_URL, // Replace with your actual URL
});

const handleRequest = async <T>(request: Promise<AxiosResponse<T>>) => {
  try {
    const response = await request;
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    throw error;
  }
};

export const get = <T>(url: string) => handleRequest<T>(api.get(url));
export const post = <T>(url: string, data: any) =>
  handleRequest<T>(api.post(url, data));
export const put = <T>(url: string, data: any) =>
  handleRequest<T>(api.put(url, data));
export const del = <T>(url: string) => handleRequest<T>(api.delete(url));
