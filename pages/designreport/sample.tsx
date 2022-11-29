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
import Grid from "@mui/material/Grid"

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
        <Box sx={{ maxWidth: "1560px", margin: "0 auto", p:{xs:'0 16px',sm:'0 88px'} }}>
          <SearchBar/>
          <BreadCrumbs
            second = "でざレポ"
            secondHref ="/designreport"
            third = "SFワールドを作る"
            thirdHref='/designreport/sample'/>
                    <Box component="div"
            sx={{
              display:"flex",
              maxHeight:{xs:"720px",sm:"360px"},
              flexDirection:{xs:"column", sm:"row"},
              padding:"16px"
            }}
            elevation={0}
          >
            <Box
              elevation={0}
              component="div"
              sx={{maxWidth:"400px",height:{xs:"200px", sm:"auto"}, width:{xs:"100%", sm:"50%"},borderRadius:"15px"}}
            >
              <img src="/static/images/recipe_thumb/sample_1.png" alt = "thumbnail" style={{height:"100%", width:"100%", objectFit:"cover"}}/>
            </Box>
            <Box component="div" elevation={0} sx={{
              width:{xs:"100%", sm:"calc(80% - 320px)"},
              minWidth:{sm:"400px"},
              padding:{xs:"16px 0px", sm:"32px"}
            }}>
              <Typography variant = {"h2"} sx={{
                fontSize:{xs:"2rem", sm:"2.5rem"},
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
              <Chip label="初心者" component="a" href="#basic-chip" clickable color="success" sx={{color:"white", mx:"4px"}}/>
              <Chip label="blender" component="a" href="#basic-chip" clickable color="warning" sx={{color:"white",mx:"4px"}}/>
              <Chip label="Eevee" component="a" href="#basic-chip" clickable color="secondary" sx={{color:"white",mx:"4px"}}/>
              </div>
              <Typography sx={{
                fontSize:"1rem",
                mx:"4px",
                my:"16px"
              }}>レシピを参考にSFワールドを作成しました。いまいちクオリティがわからず多くの方からフィードバックを受けたいです。よろしくお願いします！！</Typography>
            </Box>
          </Box>
          <div>
            <Grid container style={{display:"flex",flexWrap:"nowrap",overflow:"scroll",marginRight:"16px", width:"100%"}}>
              <Grid item>
                <Box component="div" elevation={0} sx={{borderRadius:"15px",marginRight:"8px", height:"250px", width:"250px"}}>
                  <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250" style={{objectFit:"cover"}}/>
                </Box>
              </Grid>
              <Grid item>
                <Box component="div" elevation={0} sx={{borderRadius:"15px",marginRight:"8px", height:"250px", width:"250px"}}>
                  <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250" style={{objectFit:"cover"}}/>
                </Box>
              </Grid>
              <Grid item>
                <Box component="div" elevation={0} sx={{borderRadius:"15px",marginRight:"8px", height:"250px", width:"250px"}}>
                  <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250" style={{objectFit:"cover"}}/>
                </Box>
              </Grid>
              <Grid item>
                <Box component="div" elevation={0} sx={{borderRadius:"15px",marginRight:"8px", height:"250px", width:"250px"}}>
                  <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250" style={{objectFit:"cover"}}/>
                </Box>
              </Grid>
              <Grid item>
                <Box component="div" elevation={0} sx={{borderRadius:"15px",marginRight:"8px", height:"250px", width:"250px"}}>
                  <img src="/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250" style={{objectFit:"cover"}}/>
                </Box>
              </Grid>
            </Grid>
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
