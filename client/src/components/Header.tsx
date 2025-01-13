import React from 'react'
import FlexItem from './FlexItem'
import { Box, Typography, useTheme } from '@mui/material'
type Props = {
    title:string;
    icon?:React.ReactNode;
    subtitle?:string;
    text:string;
};
const Header = ({text,subtitle,title,icon}: Props) => {
    const {palette} = useTheme();
  return (
    <FlexItem color={palette.grey[400]} margin="1.3rem 1rem 0 1rem">
      <FlexItem>
        {icon}
        <Box width="100%" >
            <Typography variant="h4"  mb="-0.2rem" >
              {title}
            </Typography>
            <Typography variant='h6'>
              {subtitle}
            </Typography>
        </Box>
      </FlexItem>
      <Typography  variant='h4' fontWeight="700" color={palette.secondary[500]}>
        {text}
      </Typography>
    </FlexItem>
  )
}
export default Header