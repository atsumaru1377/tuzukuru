import Box from '@mui/material/Box';
import {styled , alpha } from "@mui/material/styles"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "./iconButton"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "20px",
    backgroundColor: alpha(theme.palette.common.white, 1),
    filter:"drop-shadow(0 0 15px rgba(0,0,0,.1))",
    marginLeft: "0",
    width:"calc(100% - 72px)",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'calc(100% - 72px)',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));
  
export default function ScrollableTabsButtonAuto() {
  return (
    <Box sx={{width:"100%",mt:"32px",ml:"32px"}}>
    <Box sx={{ bgcolor: 'white',py:"16px",pr:"16px",pl:"32px",display:'flex',justifyContent:"space-between",alignItems:'center'}}>
        <Search sx={{mr:"16px"}}>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="コミュニティ、レシピを探す…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{width:"100%",height:"48px"}}
            />
        </Search>
        <IconButton/>
    </Box>    
    </Box>
  );
}
