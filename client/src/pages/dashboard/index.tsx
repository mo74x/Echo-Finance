
import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/material'
import Row1 from './row1'
import Row2 from './row2'
import Row3 from './row3'

const gridTemplate = `
   "a b c"
   "a b c"
   "a b c"
   "a b f"
   "d e f"
   "d e f"
   "d h i"
   "g h i"
   "g h i"
   "g h i"
`
const gridTemplate2=`
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "d"
    "d"
    "d"
    "e"
    "e"
    "f"
    "f"
    "f"
    "g"
    "g"
    "g"
    "h"
    "h"
    "h"
    "h"
    "i"
    "i"
    "i"
    "i"
`
const Dashboard = () => {
    const ismaxscreen =useMediaQuery("(min-width:1200px)");
  return (
   <Box  width="100%" height="100%" display="grid" gap="1.2rem"
       sx={
        ismaxscreen?{

                gridTemplateColumns:"repeat(3,minmax(370px,1fr))",
               gridTemplateRows:"repeat(10,minmax(60px,1fr))",
               gridTemplateAreas:gridTemplate,
         }
       :{
               gridAutoColumns:"1fr",
               gridAutoRows:"80px",
               gridTemplateAreas:gridTemplate2,
       }}   
   >

         <Row1></Row1>
         <Row2></Row2>
         <Row3></Row3>
   </Box>
  )
}
export default Dashboard