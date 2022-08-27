import type { NextPage } from 'next'
import Image from 'next/image'
import SiteHeader from "../components/siteHeader"
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
import SearchBar from "../components/searchBar"
import Link from "next/link"
import Button from "@mui/material/Button"

import Thumbnail from "../../public/static/images/sample_thumb.png"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"500px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  right:"0",
  top:"0",
  width:'calc(100% - 300px)',
  justifyContent:"center"
}

const Home: NextPage = () => {
  return (
    <>
    <SiteHeader title="Tuzukuru 続くを作る | recipe top page"></SiteHeader>
      <Box>
      <Box style={boxStyle}>
        <div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 88px"}}>
        <SideBar/>
        <SearchBar/>    
        <BreadCrumbs/>
          <div
            style={{
              display:"flex",
              maxHeight:"360px"
            }}>
            <Image src={Thumbnail} alt = "thumbnail" height={368}  objectFit="cover"/>
            <div style={{
              width:"calc(80% - 320px)",
              padding:"32px"
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
          </div>
          <div
          style={{
            marginTop:"32px"
          }}>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px"
                }}>レシピ</Typography>
          <Accordion />
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>デザレポ</Typography>
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
              <Button sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"16px"}}>
                <div style={{width:"216px",height:"268px",backgroundColor:"#eeeeee",borderRadius:"15px",textAlign:"center"}}>
                  <AddCircleOutlineIcon sx={{fontSize:"32px",mt:"64px",color:"black"}}/>
                  <Typography sx={{m:"16px",color:"black"}}>あなたもつくレポを投稿しよう</Typography>
                </div>
              </Button>
              </a>
            </Link>
          </div>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>質問</Typography>
          <Typography variant = {"h3"} sx={{
            fontSize:"1.5rem",
            mt:"32px"
          }}>10件のコメント</Typography>
          <Comment/>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>他のデザレポ</Typography>
          </div>
          <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
              <RepoCard/>
            </div>
          <Footer/>
        </div>  
        </Box>
        </Box>
    </>
  )
}

export default Home
