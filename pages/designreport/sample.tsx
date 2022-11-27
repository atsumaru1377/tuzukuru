import type { NextPage } from 'next'
import Image from 'next/image'
import SiteHeader from "../components/siteHeader"
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import BreadCrumbs from "../components/breadCrumbs"
import  Typography  from '@mui/material/Typography'
import  Avatar  from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import RepoCard from "../components/tukurepoCard"
import Footer from "../components/footer";
import SearchBar from "../components/searchBar"
import Divider from "@mui/material/Divider"
import Thumbnail from "../../public/static/images/sample_thumb.png"
import { DesignCardType, FBCommentType } from '../../plugins/type'
import FeedbackComment from "../components/feedbackComment";

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
  right:"0",
  top:"0",
  width:'calc(100% - 280px)'
}

const feedbackComments:FBCommentType[] = [
  {key:0, user : "Winnie the Pooh", time: "now or never", positive: "good", negative: "bad" },
  {key:1, user : "Winnie the Pooh", time: "now or never", positive: "good", negative: "bad" },
]

const Home: NextPage = () => {
  return (
    <>
     <SiteHeader title="Tuzukuru 続くを作る | tukurepo of sf-world"></SiteHeader>
      <Box>
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
        <Box sx={{ maxWidth: "1560px", margin: "0 auto", p:{xs:'0',sm:'0 88px'} }}>
          <SearchBar/>
          <BreadCrumbs
            second = "でざレポ"
            secondHref ="/designreport"
            third = "SFワールドを作る"
            thirdHref='/designreport/sample'/>
          <div
            style={{
              paddingBottom:"32px",
              display:"flex",
              maxHeight:"360px"
            }}>
            <img src="/static/images/recipe_thumb/sample_1.png" alt = "thumbnail" height="368" width="50%" style={{objectFit:"cover",borderRadius:"15px"}} />
            <div style={{
              width:"calc(80% - 320px)",
              minWidth:"400px",
              padding:"16px"
            }}>
              <Typography variant = {"h2"} sx={{
                fontSize:"2.5rem",
                fontWeight:"bold",
                margin:"8px"
              }}>SFワールドblenderで製作</Typography>
              <div style={{
                display:"flex",
                alignItems:"center"
              }}>
              <Avatar src="/static/images/sample_thumb.png"
              sx={{
                margin:"8px"
              }}/>
              <Typography sx={{
                fontSize:"1rem",
                margin:"8px"
              }}>近藤なおき</Typography>
              </div>
              <div style={{
                display:"flex",
                alignItems:"center"
              }}>
              <Chip label="初心者" component="a" href="#basic-chip" clickable color="success" sx={{color:"white",x:"4px"}}/>
              <Chip label="blender" component="a" href="#basic-chip" clickable color="warning" sx={{color:"white",mx:"4px"}}/>
              <Chip label="Eevee" component="a" href="#basic-chip" clickable color="secondary"sx={{color:"white",mx:"4px"}}/>
              </div>
              <Typography sx={{
                fontSize:"1rem",
                mx:"4px",
                my:"16px"
              }}>レシピを参考にSFワールドを作成しました。いまいちクオリティがわからず多くの方からフィードバックを受けたいです。よろしくお願いします！！</Typography>
            </div>
          </div>
          <div
            style={{
            }}>
          <div style ={{display:"flex"}}>
            <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginRight:"8px"}}>
                <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
            </div>
          </div>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>疑問点</Typography>
        <div style={{width:"100%",padding:"16px"}}>
                 <Typography sx={{mt:"16px"}}>疑問点1</Typography>
                 <Typography>
                    ここがわかりませんでした。
                 </Typography>
                 <Divider sx={{my:"16px"}}/>
                 <Typography>疑問点2</Typography>
                 <Typography>
                   blenderの起動の仕方がわかりませんでした。
                 </Typography>
                 <Divider sx={{my:"16px"}}/>
                 <Typography>疑問点3</Typography>
                 <Typography>
                   全体的に何をすればいいかわからず、このクオリティで良いのかを聞いてみたいです。
                 </Typography>
            </div>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
            }}>みんなのフィードバック</Typography>
            <FeedbackComment comments={feedbackComments}/>

            <Typography variant = {"h3"} sx={{
            fontSize:"2rem",
            fontWeight:"bold",
            mt:"32px"
            }}>他のでざレポ</Typography>
            <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
            {designData.map((data: DesignCardType,index:number) => {
            return (
                <RepoCard
                src = {data.src}
                key={index}
                />
              );
            })}
            </div>
          </div>
          <Footer/>
          </Box>
        </Box>
        </Box>
    </>
  )
}

export default Home
