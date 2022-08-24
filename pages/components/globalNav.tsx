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
      pt:"10px",
      height:"100vh",
      width:"280px",
      top:0,
      left:0,
      zIndex:"1200",
      position:"fixed",
      overflow:'scroll'
      }}>
      <MenuList>
        <MenuItem>
        <Link href="/">
          <a >
          <Image src={Logo} alt= "Tuzukuru Logo" ></Image>
          </a>
        </Link>
        </MenuItem>
        <Box
          sx={{
            margin:"10px"
          }}>
        </Box>
        
        <div style={{height:"10px"}}></div>
        <MenuItem>
          <ListItemText
          primaryTypographyProps={{
            fontSize:20,
            fontWeight:"bold"
          }}>マイコミュニティ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>コミュニティを探す</ListItemText>
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
          <ListItemText>みんなのレシピ</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>キーワードで探す</ListItemText>
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
          <ListItemText
          primaryTypographyProps={{
            fontWeight:"bold"
          }}>つくレポ</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>みんなのつくレポを見る</ListItemText>
          <KeyboardArrowRightIcon/>
        </MenuItem>
        <MenuItem>
          <ListItemText>つくレポを投稿する</ListItemText>
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
