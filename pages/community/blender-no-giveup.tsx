import type { NextPage } from 'next'
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import {css} from '@emotion/react'
import SearchBar from "../components/searchBar"
import MyPage from "../components/breadCrumbs"
import Avatar from "@mui/material/Avatar"
import Image from "next/image"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import AvatarGroup from "@mui/material/AvatarGroup"
import TukuCard from "../components/tukurepoCard"
import Comment from "../components/comment"
import Footer from "../components/footer"
import SiteHeader from "../components/siteHeader"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"280px",
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
     <SiteHeader title="Tuzukuru 続くを作る | community page of blender no give up "></SiteHeader>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box style={boxStyle}>
        <div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 88px"}}>
            <SearchBar/>
            <MyPage/>
            <div style={{width:"100%",height:"256px",position:"relative",borderRadius:"15px",overflow:"hidden"}}>
              <Image src="/static/images/sample_thumb.png"　layout="fill" alt="community cover"objectFit="cover"/>
            </div>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"32px",
                  pl:"16px"
                }}>blenderを諦めない</Typography>
            <div style={{display:"flex",padding:"16px",alignItems:"center",flexWrap:"wrap"}}>
              <div style={{display:"flex"}}>
                  <Chip label="blender" color="primary" sx={{mx:"4px"}}></Chip> 
                  <Chip label="初心者歓迎"  sx={{mx:"4px"}}></Chip>
              </div>
              <Typography variant = {"h3"} sx={{
                  fontSize:"1rem",
                  mb:"16px",
                  mt:"16px",
                  pl:"16px",
                  mr:"16px"
                }}>3582人のメンバー  1.1万人のフォロワー</Typography> 
                <div style={{display:"flex"}}>
                  <Avatar sx={{mx:"16px"}}/>
                  <Divider orientation="vertical" flexItem></Divider>
                  <AvatarGroup total={24} sx={{mx:"16px"}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                </div>
            </div>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"32px",
                  pl:"16px"
                }}>概要</Typography>
            <Typography variant = {"h3"} sx={{
                  fontSize:"1rem",
                  mb:"16px",
                  pl:"16px"
                }}>blenderを初めてみたいが、どこから初めて良いか分からない人が集まるグループです。</Typography>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"32px",
                  pl:"16px"
                }}>みんなの作った報告</Typography>
               <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
                <TukuCard/>
                <TukuCard/>
                <TukuCard/>
                <TukuCard/>
                <TukuCard/>
                <TukuCard/>
                <TukuCard/>
              </div>
              <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"32px",
                  pl:"16px"
                }}>スレッド</Typography>
              <Comment/>
              <Footer/>
          </div>
        </Box>
      </Box>
    </>
  )
}

export default Home
