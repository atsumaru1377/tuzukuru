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
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Footer from "../components/footer";
import Comment from "../components/comment";

import Link from "next/link"

import Thumbnail from "../../public/static/images/sample_thumb.png"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  p:"32px",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)'
}
const AccordionStyle:{[key:string]:string} = {
  magin:"32px"
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
            <div>
            <img src="../../public/sample_thumb.png" alt = "thumbnail" height={368}  objectFit="cover"/>
            </div>
            <div style={{
              width:"calc(80% - 320px)",
              padding:"16px"
            }}>
              <Typography variant = {"h2"} sx={{
                fontSize:"2.5rem",
                fontWeight:"bold",
                margin:"8px"
              }}>blenderでリギング入門</Typography>
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
              }}>Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
              初心者の方にも簡単に制作をすることができるので、是非やってみてください。</Typography>
            </div>
          </Box>
          <Box
            sx={{
              p:"32px"
            }}>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px"
                }}>まなぶ</Typography>
          <Accordion />
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"64px"
                }}>つくる</Typography>
          <div style ={{display:"flex"}}>
            <div style={{display:"flex",flexWrap:"nowrap",width:"80%",overflow:"scroll",marginRight:"16px"}}>
              <TukuCard/>
              <TukuCard/>
              <TukuCard/>
              <TukuCard/>
              <TukuCard/>
              <TukuCard/>
              <TukuCard/>
            </div>
            <Divider orientation="vertical" flexItem/>
            <Link href="/tukurepo/post">
              <a>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"16px"}}>
                <div style={{width:"216px",height:"268px",backgroundColor:"lightgrey",borderRadius:"15px",textAlign:"center"}}>
                  <AddCircleOutlineIcon sx={{fontSize:"32px",mt:"64px"}}/>
                  <Typography sx={{m:"16px"}}>あなたもつくレポを投稿しよう</Typography>
                </div>
              </div>
              </a>
            </Link>
          </div>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>きく</Typography>
          <Typography variant = {"h3"} sx={{
            fontSize:"1.5rem",
            mt:"32px"
          }}>10件のコメント</Typography>
          <Comment/>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>つづける</Typography>
          </Box>
          <Box>
          <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
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
