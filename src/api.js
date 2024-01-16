import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => axios.get(`${API_BASE_URL}/users`);
export const getUserPosts = (userId) => axios.get(`${API_BASE_URL}/users/${userId}/posts`);
export const getUserAlbums = (userId) => axios.get(`${API_BASE_URL}/users/${userId}/albums`);
export const addUser = (userData) => axios.post(`${API_BASE_URL}/users`, userData);
export const editUser = (userId, userData) => axios.put(`${API_BASE_URL}/users/${userId}`, userData);
export const deleteUser = (userId) => axios.delete(`${API_BASE_URL}/users/${userId}`);
