import React from "react";
import { Box } from "@mui/material";
import TableCoinCap from "./TableCoinCap";
function MktCap() {
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          height: "15rem",
          backgroundImage:
            "linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246))",
          color: "White",
          fontSize: "20px",
          fontWeight: 700,
          display: "flex",
          gap: "50px",
          padding: "30px",
          justifyContent: "center",
          
        }}
      >
        <Box>
        <Box>
        MARKET CAP
        </Box>
        <Box display="flex"
        justifyContent="center">
          $2.52T
        </Box>
        </Box>
        <Box>
        <Box>
        EXCHANGE VOL
        </Box>
        <Box display="flex"
        justifyContent="center">$32.12B</Box>
        </Box>
        <Box>
        <Box>ASSETS</Box>
        <Box display="flex"
        justifyContent="center">2,297</Box></Box>
        <Box >
        <Box>EXCHANGES</Box>
        <Box display="flex"
        justifyContent="center">73</Box></Box>
        <Box>
        <Box>MARKETS</Box>
        <Box display="flex"
        justifyContent="center">9,105</Box></Box>
        <Box><Box>BTC DOM INDEX</Box><Box display="flex"
        justifyContent="center">54.1%</Box></Box>
      </Box>
      <Box sx={{
        width:"70vw",
        backgroundColor:"White",
        margin: "-13rem auto 0 auto",
      }}>
        <TableCoinCap />
      </Box>
    </Box>
  );
}

export default MktCap;
