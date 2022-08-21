import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from './components/header'
import SideBar from './components/globalNav'
import Card from "./components/repoCard"
import Box from "@mui/material/Card"
import BreadCrumbs from "./components/breadCrumbs"
import  Typography  from '@mui/material/Typography'
import  Avatar  from '@mui/material/Avatar'

import Chip from '@mui/material/Chip'

import Thumbnail from "../public/static/images/sample_thumb.png"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"280px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  p:"32px",
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
            <Image src={Thumbnail} alt = "thumbnail" height={368}  objectFit="cover"/>
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
        </Box>
        <Box>
        <Typography variant = {"h3"} sx={{
                fontSize:"2rem",
                fontWeight:"bold",
                margin:"8px"
              }}>おおおおおおおおおお</Typography>
        </Box>
        </Box>
    </>
  )
}

export default Home
