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
    sx={{
      pl:"32px",
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
        <MenuItem>
        <Link href="/">
          <a>
          <Image src={Logo} alt= "Tuzukuru Logo" ></Image>
          </a>
        </Link>
        </MenuItem>
        <Box
          sx={{
            margin:"10px"
          }}>
        </Box>

        <div style={{height:"8px"}}></div>
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontSize:16,
            fontWeight:"bold"
          }}>マイコミュニティ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>コミュニティを探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>レシピ
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>みんなのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>キーワードで探す</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>お気に入りのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>レシピを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>つくレポ</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>みんなのつくレポを見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>つくレポを投稿する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>困った時は</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText  primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>デザインを勉強する</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>ツールの使い方を見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText primaryTypographyProps={{
            fontSize:14
          }}sx={{py:"4px"}}>よくある質問</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
