import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import{Box, Button, Typography,useTheme} from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import FlexItem from "../../components/FlexItem"
type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme()
    const [selected, setSelected] = useState("dashboard")

  return (
   <FlexItem mb="0.25rem" p=".5rem 0rem" color={palette.grey[300]} >
       
            <FlexItem gap="0.75rem">
              <AccountBalanceIcon sx={{ fontSize :"25px"}}/>
              <Typography variant="h4" color={palette.grey[300]}> ECHO-FINANCE</Typography>
            </FlexItem>

  <FlexItem gap="2rem">
    <Box sx={{"&:hover":{color: palette.primary[100]}}}>
         <Link to="/" onClick={()=>setSelected("dashboard")} style={{ color: selected === "dashboard"? "inherit":palette.grey[500],textDecoration:"inherit"}}>Dashboard</Link>
        </Box> 
        <Box sx={{"&:hover":{color: palette.primary[100]}}}>
         <Link to="/predictions" onClick={()=>setSelected("predictions")} style={{ color: selected === "predictions"? "inherit":palette.grey[500],textDecoration:"inherit"}}>Predictions</Link>
        </Box> 
  </FlexItem>
   </FlexItem>
  )

}

export default Navbar