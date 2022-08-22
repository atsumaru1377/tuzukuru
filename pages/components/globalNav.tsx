import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import {styled , alpha } from "@mui/material/styles"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Logo from "../../public/logo.svg"
import LogoType from "../../public/LogoType.svg"
import Image from 'next/image'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SideBar() {
  return (
    <Paper
    sx={{
      pt:"10px",
      height:"100vh",
      width:"280px",
      top:0,
      left:0,
      zIndex:"1200",
      position:"fixed",
      overFlowY:"auto"}}>
      <MenuList>
        <MenuItem>
          <Image src={Logo} alt= "Tuzukuru Logo" ></Image>
          <div style = {{width:"12px"}}></div>
          <Image src={LogoType} alt= "Tuzukuru LogoType" ></Image>
        </MenuItem>
        <MenuItem>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
        </MenuItem>
        <Divider/>
        <MenuItem>
          <ListItemText>マイコミュニティ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>コミュニティを探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>レシピ
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>みんなのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>キーワードを探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>お気に入りのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>つくレポ</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>困った時は</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>デザインを勉強する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>ツールの使い方を見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>よくある質問</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
