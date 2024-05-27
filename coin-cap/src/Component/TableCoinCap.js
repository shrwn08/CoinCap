import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";


function TableCoinCap() {
  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const itemPerPage = 50;
  const fetchCoinData = async () => {
    try {
      const response = await axios.get(`https://api.coincap.io/v2/assets`);

      setData(response.data.data);
      setVisibleData(response.data.data.slice(0, itemPerPage));
    } catch (error) {
      console.log("unable to get data");
    }
  };

  useEffect(() => {
    fetchCoinData();
    
  }, []);
  
const handleLoadMore =()=>{
  
  const newVisibleData = data.slice(0, itemPerPage * 2);
  
  setVisibleData(newVisibleData)
  
}
  

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Market&nbsp;Cap</TableCell>
                <TableCell align="right">VWAP(24Hr)</TableCell>
                <TableCell align="right">Supply</TableCell>
                <TableCell align="right">Volume(24Hr)</TableCell>
                <TableCell align="right">Change(24Hr)</TableCell>
              </TableRow>
            </TableHead>
            { visibleData.map((row) => (
        <TableBody>
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.rank}
            </TableCell>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 0,
                margin: 0,
              }}
            >
              <img
                src={`https://assets.coincap.io/assets/icons/${row.symbol.toLowerCase()}@2x.png`}
                alt={row.symbol}
                width="30px"
                height="30px"
              />
              <Box>
                <TableCell>
                  {row.name}
                  <p style={{ fontSize: "12px" }}>{row.symbol}</p>
                </TableCell>
              </Box>
            </Box>
  
            <TableCell align="right">
              ${parseFloat(row.priceUsd).toFixed(2)}
            </TableCell>
            <TableCell align="right">
              {row.marketCapUsd >= 1e12
                ? (row.marketCapUsd / 1e12).toFixed(2) + "t"
                : (row.marketCapUsd / 1e9).toFixed(2) + "b"}
            </TableCell>
            <TableCell align="right">
              ${parseFloat(row.vwap24Hr).toFixed(2)}
            </TableCell>
            <TableCell align="right">
              {row.supply >= 1e9
                ? (row.supply / 1e9).toFixed(2) + "b"
                : (row.supply / 1e6).toFixed(2) + "m"}
            </TableCell>
            <TableCell align="right">
              $
              {row.volumeUsd24Hr >= 1e9
                ? (row.volumeUsd24Hr / 1e9).toFixed(2) + "b"
                : (row.volumeUsd24Hr / 1e6).toFixed(2) + "m"}
            </TableCell>
            <TableCell align="right" color="green">
              {parseFloat(row.changePercent24Hr).toFixed(2)}%
            </TableCell>
          </TableRow>
        </TableBody>
      ))}
          </Table>
        </TableContainer>
      </Box>
      <Box display="flex" justifyContent="center">
      {visibleData.length < data.length && (
        <Button sx={{ borderRadius: "20px" }} variant="contained" size="medium"
        onClick={handleLoadMore}>
          Load More
        </Button>
      )}
        
      
        
      </Box>
    </Box>
  );
}

export default TableCoinCap;
