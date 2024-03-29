import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseCart = () => {

    const {user} = useContext(AuthContext);

    const axiosSecure = UseAxiosSecure();

    const {refetch, data: carts= []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [carts, refetch];
};

export default UseCart;