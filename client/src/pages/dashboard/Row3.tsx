import { useGetTransactionsQuery ,useGetKpisQuery,useGetProductsQuery} from '../../state/Api'
import DashboardBox from '../../components/thebox'
import { Tooltip,CartesianGrid, LineChart,ResponsiveContainer,XAxis,YAxis,Line,PieChart,Pie,Cell,ScatterChart,Scatter, ZAxis,
} from "recharts";
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header'
import { Box,Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';
import { useMemo } from 'react';
import FlexItem from '../../components/FlexItem'

type Props = {}

const Row3 = (props: Props) => {
    const {data:kpisdata}=useGetKpisQuery();
    const {data:productsdata}=useGetProductsQuery();
    const {data:transdata}=useGetTransactionsQuery();
    const {palette}=useTheme();
    const pieColors = [palette.primary[800], palette.primary[500]];
    
    const pieChartData = useMemo(() => {
      if (kpisdata) {
        const totalExpenses = kpisdata[0].totalExpenses;
        return Object.entries(kpisdata[0].expensesByCategory).map(
          ([key, value]) => {
            return [
              {
                name: key,
                value: value,
              },
              {
                name: `${key} of Total`,
                value: totalExpenses - value,
              },
            ];
          }
        );
      }
    }, [kpisdata]);
    //product columns
    const productcolumns = [
      {
        field: "_id",
        headerName: "id",
        flex: 1,
      },
      {
        field: "expense",
        headerName: "Expense",
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`,
      },
      {
        field: "price",
        headerName: "Price",
        flex: 0.5,
        renderCell: (params: GridCellParams) => `$${params.value}`,
      },
      ];
     //transaction columns  
  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];
    //console.log(transdata);
  return (
 <>
    <DashboardBox gridArea="g" >
       <Header title="Products List" text={`${productsdata?.length} product`} />
          <Box mt="0.5rem " p="0 0.5rem " height="75%" sx={
            {
              "& .MuiDataGrid-root": {
                color: palette.grey[300],
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: `1px solid ${palette.grey[800]} !important`,
              },
              "& .MuiDataGrid-columnSeparator": {
                visibility: "show",
              },
            } 
          }>
            <DataGrid rows={productsdata || []} columns={productcolumns}  hideFooter={true} columnHeaderHeight={25} rowHeight={35}/>
          </Box>
    </DashboardBox>
    <DashboardBox gridArea="h" >
      <Header title="Transactions" text={`${transdata?.length} transaction`} />
      <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transdata || []}
            columns={transactionColumns}
          />
        </Box>
    </DashboardBox>
    <DashboardBox gridArea="i" >
      <Header  title="Overall Summary and Explanation Data"text="+15%" />
      <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
        The overall summary shows a significant increase in the key performance indicators over the past quarter. The total revenue has grown by 15%, driven by a 5.2% increase in expenses across various categories. The product list and transaction data indicate a healthy market demand and efficient sales process. The visual representation of expenses by category provides a clear insight into the areas with the highest expenditures, helping in better financial planning and resource allocation.
        The pie chart below illustrates the distribution of expenses by category, highlighting the major areas where the budget is allocated. This visual aid is crucial for identifying trends and making informed decisions to optimize spending. Additionally, the scatter plot provides a correlation between product prices and their respective expenses, offering a deeper understanding of cost management.

        </Typography>
    </DashboardBox>
 </>
  )
}

export default Row3