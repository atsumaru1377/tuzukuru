import type { NextPage } from 'next'
import SideBar from './components/globalNav'
import Card from "./components/repoCard"
import Box from "@mui/material/Card"
import {css} from '@emotion/react'
import SearchBar from "./components/searchBar"
import MyPage from "./components/breadCrumbs"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  p:"32px",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)',
}

const Home: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box style={boxStyle}>
            <Box sx={{
                padding:"32px"
            }}>
            <SearchBar/>
            <MyPage/>
            <div style={{width:"100%",display:"flex",padding:"16px",alignItems:"center"}}> 
                <Avatar sx={{width:130,height:130}}>M</Avatar> 
                <div style={{width:"32px"}}></div>
                <div style={{padding:"16px"}}>
                    <Typography variant="h2" sx={{fontWeight:"500",fontSize:"48px"}}>近藤なおき</Typography>
                    <div style={{overflow:"scroll",paddingTop:"16px"}}>
                    <Chip label="After Effects" color = "primary" sx={{mx:"4px"}}></Chip>
                    <Chip label="blender" color = "primary" sx={{mx:"4px"}}></Chip>
                    <Chip label="ガンプラ"sx={{mx:"4px"}}></Chip>
                    </div>
                </div>
                <div style={{width:"64px"}}></div>
                <Divider orientation = "vertical" flexItem/>
            </div>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
