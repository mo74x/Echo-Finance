import DashboardBox from '../../components/thebox'
import { useGetKpisQuery,useGetProductsQuery } from '../../state/Api'
import { Tooltip,CartesianGrid, LineChart,ResponsiveContainer,XAxis,YAxis,Line,PieChart,Pie,Cell,ScatterChart,Scatter, ZAxis,
} from "recharts";
import { useMemo } from 'react';
import Header from '../../components/Header'
import { useTheme } from '@mui/material';
import FlexItem from '../../components/FlexItem'
import {Typography,Box} from  "@mui/material";

const Piedata = [
  { name: "Group A", value: 740 },
  { name: "Group B", value:  260},
];


const Row2 = () => {
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  
  const { palette } = useTheme();
  const pieColors = [palette.primary[700], palette.tertiary[500]];
  //operationalData for operationalExpenses
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);
  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);
 // console.log('data:' ,data)
  return (  
    <>
    <DashboardBox gridArea="d" >
    <Header title="Product Prices vs Expenses" text="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox gridArea="e" >
     <Header title="Campaigns and Targets" text="+7.8%" />
     <FlexItem mt="0.25rem" gap="1.5rem" pr="1rem">
     <PieChart width={120} height={100} 
           margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}>
        <Pie
          data={Piedata}
          stroke='none'
          innerRadius={9}
          outerRadius={38}
          paddingAngle={0}
          dataKey="value"
        >
          {Piedata.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index]} />
          ))}
        </Pie>
      </PieChart>
      <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h2" color={palette.primary[300]}>
              89.6
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign 
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 18%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 31% from last month.
            </Typography>
          </Box>
    
      </FlexItem>
    </DashboardBox>
    <DashboardBox gridArea="f" >
    <Header
          title="Operational vs Non-Operational Expenses"
          text="+5.6%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
    </DashboardBox>
    </>

  )
}

export default Row2
