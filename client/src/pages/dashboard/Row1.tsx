import { useGetKpisQuery } from '../../state/Api'
import DashboardBox from '../../components/thebox'
import { AreaChart,LineChart,Bar,BarChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer ,Line, Legend} from 'recharts'
import { useMemo } from 'react';
import { useTheme } from '@mui/material';
import Header from '../../components/Header'
type Props = {}

function Row1({}: Props) {
      const {palette} = useTheme();
     const { data }= useGetKpisQuery();
      console.log(data)
  const reveenueExpenses = useMemo(() => {   
       return (data && data[0].monthlyData.map(({month,revenue,expenses})=>{
          return {
            name: month.substring(0,3),
            revenue: revenue,
            expenses: expenses,
          }
       } )
    )
  }, [data]);

  const reveenueProfit = useMemo(() => {   
    return (data && data[0].monthlyData.map(({month,revenue,expenses})=>{
       return {
         name: month.substring(0,3),
         revenue: revenue,
         profit: revenue-expenses,
       }
    } )
 )
}, [data]);
const revenue = useMemo(() => {
  return (
    data &&
    data[0].monthlyData.map(({ month, revenue }) => {
      return {
        name: month.substring(0, 3),
        revenue: revenue,
      };
    })
  );
}, [data]);
  return (
  <>
    <DashboardBox gridArea="a" >
      <Header title='Revenue & Expenses' text='+8%' icon={null} subtitle="365 Collection for the year"
      ></Header>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={reveenueExpenses}
          margin={{ 
            top: 10,
            right: 27,
            left: -10,
            bottom: 60,
          }}
        >
          <defs> 
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[300]} stopOpacity={0.5}/>
              <stop offset="92%" stopColor={palette.primary[300]} stopOpacity={0.5}/>
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={palette.primary[500]} stopOpacity={0.5}/>
              <stop offset="95%" stopColor={palette.primary[500]} stopOpacity={0.5}/>
             </linearGradient>
          </defs>

          <XAxis dataKey="name"style={ {fontSize:"10px" }}tickLine={false}  />
          <YAxis style={ {fontSize:"10px" }} tickLine={false}   axisLine={{strokeWidth:'0'}} domain={[7000,25000]}/>
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorRevenue)" dot={true} />
          <Area type="monotone" dataKey="expenses" stroke={palette.primary.main} fillOpacity={1} fill="url(#colorExpenses)" dot={true}/>

        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox gridArea="b">
    <Header title='Profit && Revenue' text='+9.6%' icon={null} subtitle="top line represents revenue, bottom line represents expenses"></Header>
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={reveenueProfit}
          margin={{ 
            top: 20,
            right: 0,
            left: -10,
            bottom: 58,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
          <XAxis dataKey="name"style={ {fontSize:"10px" }}tickLine={false}  />
          <YAxis style={ {fontSize:"10px" }} tickLine={false}   axisLine={false} yAxisId="right"/>
          <YAxis style={ {fontSize:"10px" }} tickLine={false} orientation='right'  axisLine={false} yAxisId="left"/>
         
          <Tooltip />
          <Legend verticalAlign="top" height={20} wrapperStyle={
             {margin: '0 0 10px 0'}
          } />
          <Line yAxisId="left" type="monotone" dataKey="profit" stroke={palette.tertiary[500]}/>
          <Line  yAxisId="right" type="monotone" dataKey="revenue" stroke={palette.primary.main} />
          
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
    <DashboardBox gridArea="c" >
    <Header title="Revenue Month by Month" subtitle="graph representing the revenue month by month" text="+4%"
        />
          <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize: "10px" }}/>
            <YAxis  axisLine={false} tickLine={false} style={{ fontSize: "10px" }}/>
            <Tooltip />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
    </DashboardBox>
  </>
  )
}

export default Row1