import axios from 'axios';

/*
    This file contains the functions that make the API calls to the backend.
    The functions use the axios library to make the requests to the backend server.
    The functions are used in the components to fetch the data from the backend.
*/

const BASE_URL = 'http://localhost:5001/api/teas';

export const fetchAllTeas = async () => {
    const response = await axios.get(`${BASE_URL}/search`);
    return response.data.products;
};

export const fetchTeaById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};


export const fetchTeasByType = async (type) => {
    const response = await axios.get(`${BASE_URL}/type/${type}`);
    return response.data.products;
};

