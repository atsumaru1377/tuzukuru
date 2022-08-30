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

type Page = {
  page:string
}

export default function SideBar(props:Page) {
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
      overflow:'scroll'
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
          }}
          style={{"color":props.page==="mycommunity"?"#2196f3":"black"}}
          >マイコミュニティ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/community">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}
          style={{"color":props.page==="community"?"#2196f3":"black"}}>コミュニティを探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Divider />
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>レシピ
          </ListItemText>
        </MenuItem>
        <Link href="/recipe">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}
          style={{"color":props.page==="recipe"?"#2196f3":"black"}}>みんなのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/mypage">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}
          style={{"color":props.page==="mypage"?"#2196f3":"black"}}>お気に入りのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/underConstruction">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}
          style={{"color":props.page==="recipePost"?"#2196f3":"black"}}>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Divider />
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>でざレポ</ListItemText>
        </MenuItem>
        <Link href="/designreport">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}
          style={{"color":props.page==="design"?"#2196f3":"black"}}>みんなのでざレポを見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        </Link>
        <Link href="/designreport/post">
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}
          style={{"color":props.page==="designPost"?"#2196f3":"black"}}
          >でざレポを投稿する</ListItemText>
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
