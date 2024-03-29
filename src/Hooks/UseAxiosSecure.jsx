import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL : 'https://bistro-boss-server-nine-bay.vercel.app'
})

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;