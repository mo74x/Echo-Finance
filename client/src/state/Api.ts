import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetKpisRes ,GetProductsRes,GetTransactionsRes} from "./Types";

// Create an api slice
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
   reducerPath: "main",
   tagTypes: ["Kpis","Products","Transactions"],
   endpoints: (builder) => ({
         getKpis: builder.query<Array<GetKpisRes>,void>({  
              query: () => "Kpi/kpis/",
              providesTags: ["Kpis"],
            }),
            getProducts: builder.query<Array<GetProductsRes>,void>({  
              query: () => "product/products/",
              providesTags: ["Products"],
            }),
            getTransactions: builder.query<Array<GetTransactionsRes>,void>({  
              query: () =>  "transaction/transactions/",
              providesTags: ["Transactions"],
            }),
    }),
});
export const { useGetKpisQuery ,useGetProductsQuery,useGetTransactionsQuery} = api;