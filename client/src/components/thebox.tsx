import { Box } from "@mui/material";
import {styled} from "@mui/system"

const DashboardBox = styled(Box)(({theme})=>({
  backgroundColor: theme.palette.background.light,
  borderRadius: "10px",
  boxShadow: ".25rem .20rem .25rem .20rem rgba(0,0,0,.6)",

}));

export default DashboardBox 