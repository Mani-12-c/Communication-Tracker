import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Company APIs
export const fetchCompanies = () => API.get('/companies');

export const createCompany = (companyData) => API.post('/companies', companyData);

export const updateCompany = (id) => API.put(`/companies/${id}`);

export const deleteCompany = (id) => API.delete(`/companies/${id}`);

// Task APIs
export const fetchTasks = () => API.get('/tasks/');

export const createTask = (taskData) => API.post('/tasks', taskData);

// Mark a task as completed
export const markTaskComplete = (taskId) => API.put(`/tasks/${taskId}/complete`);

export const fetchMethods = () => API.get('/methods');

export const createMethod = (methodData) => API.post('/methods', methodData);