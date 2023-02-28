import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: [
        "User",
        "Users",
        "Customers",
        "Transactions",
        "Geography",
        "Admins",
        "Performance",
        "Dashboard",
    ],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getUsers: build.query({
            query: () => `user/users`,
            providesTags: ["Users"],
        })
    })
});

export const { useGetUserQuery, useGetUsersQuery } = api;