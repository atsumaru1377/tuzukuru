import type { NextPage } from 'next'
import Image from 'next/image'

import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import BreadCrumbs from "../components/breadCrumbs"
import  Typography  from '@mui/material/Typography'
import  Avatar  from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Accordion from "../components/accordion"
import TukuCard from "../components/tukurepoCard"
import RepoCard from "../components/repoCard"
import Footer from "../components/footer";
import Comment from "../components/comment";
import Divider from "@mui/material/Divider"
import Link from "next/link"

import Thumbnail from "../../public/static/images/sample_thumb.png"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"280px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)'
}


const Home: NextPage = () => {
  return (
    <>
      <Box>
        <SideBar/>
        <Box style={boxStyle}>
          <BreadCrumbs/>
          <Box
            sx={{
              p:"32px",
              display:"flex",
              maxHeight:"360px"
            }}>
            <img src="../../public/static/images/sample_thumb.png" alt = "thumbnail" height="368" style={{objectFit:"cover"}} />
            <div style={{
              width:"calc(80% - 320px)",
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
              <Chip label="初心者" component="a" href="#basic-chip" clickable color="primary" sx={{mx:"4px"}}/>
              <Chip label="blender" component="a" href="#basic-chip" clickable sx={{mx:"4px"}}/>
              <Chip label="Eevee" component="a" href="#basic-chip" clickable sx={{mx:"4px"}}/>
              </div>
              <Typography sx={{
                fontSize:"1rem",
                mx:"4px",
                my:"16px"
              }}>レシピを参考にSFワールドを作成しました。いまいちクオリティがわからず多くの方からフィードバックを受けたいです。よろしくお願いします！！</Typography>
            </div>
          </Box>
          <Box
            sx={{
              p:"32px"
            }}>
          <div style ={{display:"flex"}}>
            <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginRight:"8px"}}>
                <img src="../../public/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="../../public/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="../../public/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="../../public/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
                <div style={{minWidth:"250px",borderRadius:"15px",overflow:"hidden",marginLeft:"8px",marginRight:"8px"}}>
                <img src="../../public/static/images/sample_tukurepo.jpg" alt = "tukurepo image" height="250" width="250"/>
                </div>
            </div>
          </div>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>疑問点</Typography>
        <Box sx={{width:"100%",p:"16px"}}>
                 <Typography sx={{mt:"16px"}}>疑問点1</Typography>
                 <Typography>
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                 </Typography>
                 <Divider sx={{my:"16px"}}/>
                 <Typography>疑問点2</Typography>
                 <Typography>
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                 </Typography>
                 <Divider sx={{my:"16px"}}/>
                 <Typography>疑問点3</Typography>
                 <Typography>
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                    Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
                 </Typography>
            </Box>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>みんなのフィードバック</Typography>
            <Typography variant = {"h3"} sx={{
            fontSize:"2rem",
            fontWeight:"bold",
            mt:"32px"
            }}>他のつくレポ</Typography>
            <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
                <TukuCard></TukuCard>
                <TukuCard></TukuCard>
                <TukuCard></TukuCard>
                <TukuCard></TukuCard>
                <TukuCard></TukuCard>
                <TukuCard></TukuCard>
            </div>
          </Box>
          <Box>
          <Footer/>
          </Box>
        </Box>
        </Box>
    </>
  )
}

export default Home
