import type { NextPage } from 'next'
import SideBar from './components/globalNav'
import SiteHeader from "./components/siteHeader"
import Box from "@mui/material/Card"
import SearchBar from "./components/searchBar"
import MyPage from "./components/breadCrumbs"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import CommuCard from "./components/commuCard"
import RepoCard from "./components/tukurepoCard"
import RecipeCard from "./components/repoCard"
import Footer from "./components/footer"

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
      <SiteHeader title="Tuzukuru 続くを作る | my page"></SiteHeader>
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
                    <Typography variant="h2" sx={{fontWeight:"500",fontSize:"48px",minWidth:"250px"}}>近藤なおき</Typography>
                    <div style={{overflow:"scroll",paddingTop:"16px"}}>
                    <Chip label="After Effects" color = "primary" sx={{mx:"4px"}}></Chip>
                    <Chip label="blender" color = "primary" sx={{mx:"4px"}}></Chip>
                    <Chip label="ガンプラ"sx={{mx:"4px"}}></Chip>
                    </div>
                </div>
                <div style={{width:"64px"}}></div>
                <Divider orientation = "vertical" flexItem/>
                <div style={{width:"50%",maxWidth:"1000px",height:"100%",overflowX:"scroll",display:"flex",flexWrap:"nowrap"}}>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>つくレポ数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>25</Typography>
                    </div>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>レシピ数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>45</Typography>
                    </div>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>質問数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>12</Typography>
                    </div>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>いいね数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>100</Typography>
                    </div>
                    
                </div>
            </div>
            <Divider/>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  my:"32px",
                  pl:"16px"
                }}>マイコミュニティ</Typography>
            <CommuCard/>    
            <CommuCard/>    
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"64px",
                  pl:"16px"
                }}>自分のつくレポ</Typography>
                          <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
            </div>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"64px",
                  pl:"16px"
                }}>公開したレシピ</Typography>
                <div style={{
                display:"flex",
                flexWrap:"wrap"
                }}>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                    <RecipeCard/>
                </div>
            <Footer/>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
