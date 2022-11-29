import type { NextPage } from 'next'
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import SearchBar from "../components/searchBar"
import MyPage from "../components/breadCrumbs"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import AvatarGroup from "@mui/material/AvatarGroup"
import TukuCard from "../components/tukurepoCard"
import Comment from "../components/comment"
import Footer from "../components/footer"
import SiteHeader from "../components/siteHeader"
import { DesignCardType } from '../../plugins/type'

const designData:DesignCardType[] =[
  {src:"/static/images/designReport/tuku_1.png"},
  {src:"/static/images/designReport/tuku_2.png"},
  {src:"/static/images/designReport/tuku_3.png"},
  {src:"/static/images/designReport/tuku_4.png"},
]

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
        <Box sx={{
          paddingLeft:{xs: "0",sm:"256px"},
          position: {xs:"relative",sm:"fixed"},
          height: "100%",
          overflowY: "auto",
          right: "0",
          top: "0",
          width:{xs:"100%",sm:'calc(100% - 280px)'}
        }}>
        <Box sx={{ maxWidth: "1560px", margin: "0 auto", p:{xs:'0 16px',sm:'0 88px'} }}>
            <SearchBar/>
            <MyPage
            second = "community"
            secondHref ="/community"
            third = "blenderを諦めない"
            thirdHref='community/sample'/>
            <Box component="div" elevation={0} role="image" sx={{width:"100%",height:{xs:"120px",sm:"256px"},position:"relative",borderRadius:"15px",overflow:"hidden",backgroundImage:"url('/static/images/community/commu_1.png')",backgroundSize:"cover"}}>
            </Box>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"32px",
                  pl:"16px"
                }}>blenderを諦めない</Typography>
            <div style={{display:"flex",padding:"16px",alignItems:"center",flexWrap:"wrap"}}>
              <div style={{display:"flex"}}>
                  <Chip label="blender" color="warning" sx={{color:"white", mx:"4px"}}></Chip>
                  <Chip label="初心者歓迎" color="secondary" sx={{color:"white", mx:"4px"}}></Chip>
              </div>
              <Typography variant = {"h3"} sx={{
                  fontSize:"1rem",
                  mb:"16px",
                  mt:"16px",
                  pl:"16px",
                  mr:"16px"
                }}>358人のメンバー  1.1万人のフォロワー</Typography>
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
               {designData.map((data: DesignCardType,index:number) => {
            return (
                <TukuCard
                src = {data.src}
                key={index}
                />
              );
            })}
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
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
