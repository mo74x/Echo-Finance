 export interface ExpensesByCategory {
    salaries: number;
    services: number;
    supplies: number;
 }
 export interface Month {
    id: string;
    month: string;
    revenue: number;
    expenses: number;
    nonOperatingExpenses: number;
    OpratingExpenses: number;
 }  
 export interface Day {
    id: string;
    date: string;
    revenue: number;
    expenses: number;

 }  
export interface GetKpisRes {
    id: string ;
    _id: string;
    __v: number;
    totalRevenue: number;
    totalProfit: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
    createdAt: string;
    updatedAt: string;
}
export interface GetProductsRes {
    id: string ;
    _id: string;
    __v: number;
    price: number;
    expense: number;
    transactions: Array<string>;
    createdAt: string;
    updatedAt: string;
}
export interface GetTransactionsRes {
   id: string ;
   _id: string;
   __v: number;
   buyer: string;
   amount: number;
   productId: Array<string>;
   createdAt: string;
   updatedAt: string;
}