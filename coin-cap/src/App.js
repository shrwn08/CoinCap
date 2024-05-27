import './App.css';
import Header from "./Component/Header"
import MktCap from './Component/MktCap';
import {Box} from "@mui/material"
function App() {
  return (
    <Box sx={{backgroungColor:"rgb(236, 239, 241)"}}>
      <Header />
      <MktCap />
      
    </Box>
  );
}

export default App;
