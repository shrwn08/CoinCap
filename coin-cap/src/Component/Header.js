import React from 'react'
import {Avatar, Box} from "@mui/material"
function Header() {
  return (
    <>
    <Box display="flex"
    justifyContent="center">
    <Box display="flex"
        justifyContent="space-between"
        padding="10px"
        alignContent="center"
        width = "70vw">
            <Box display="flex"
                gap="20px">
                <Box>Coins</Box>
                <Box>Exchanges</Box>
                <Box>Swap</Box>
            </Box>
            <Box display="flex"
            gap="20px">
                <Box>
                USD</Box>
                <Box>English</Box>
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-search-1291-434390.png?f=webp&w=256" alt='search' width="30px" height="30px"/>
                <img alt="Setting" src="https://cdn.iconscout.com/icon/free/png-512/free-setting-2456526-2036056.png?f=webp&w=256" width = "30px" height= "30px" />
            </Box>
        </Box>
    </Box>

    </>
  )
}

export default Header;