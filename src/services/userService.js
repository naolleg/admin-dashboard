import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust baseUrl as needed
    endpoints: (builder) => ({
    
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
    }),
});

export const { useGetUsersQuery, useAddUserMutation } = userApi; 