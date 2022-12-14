import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Box from "@mui/material/Box"

import Logo from "../../public/logo.svg"
import Image from 'next/image'
import Link from 'next/link'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SideBar() {
  return (
    <Paper
    aria-label="global navigation"
    sx={{
      pl:"32px",
      pr:"16px",
      height:"100vh",
      width:"256px",
      top:0,
      left:0,
      zIndex:"1200",
      position:"fixed",
      overflow:'hidden scroll',
      display:{xs:"none",sm:"block"}
      }}>
      <div style={{height:"32px"}}></div>
      <MenuList>
        <MenuItem aria-label="logo">
        <Link href="/">
          <a>
          <img src="/logo.svg" alt= "Tuzukuru Logo" ></img>
          </a>
        </Link>
        </MenuItem>
        <Box
          sx={{
            margin:"10px"
          }}>
        </Box>

        <div style={{height:"8px"}}></div>
        <Link href ="/mypage">
        <MenuItem alia-label="マイコミュニティ">
          <ListItemText
          primaryTypographyProps={{
            fontSize:16,
            fontWeight:"bold"
          }}>マイコミュニティ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/community">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>コミュニティを探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Divider />
        <MenuItem>
          <ListItemText
          sx={{"&:hover":"none"}}
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>レシピ
          </ListItemText>
        </MenuItem>
        <Link href="/recipe">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>みんなのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/mypage">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>お気に入りのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/underConstruction">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Divider />
        <Link href="/designreport">
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>でざレポ</ListItemText>
        </MenuItem>
        </Link>
        <Link href="/designreport">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>みんなのでざレポを見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/designreport/post">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>でざレポを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Divider />
        <Link href="/underConstruction">
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>困った時は</ListItemText>
        </MenuItem>
        </Link>
        <Link href="/underConstruction">
        <MenuItem>
          <ListItemText  primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>デザインを勉強する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/underConstruction">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>ツールの使い方を見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/underConstruction">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>よくある質問</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
         </Link>
      </MenuList>
    </Paper>
  );
}
