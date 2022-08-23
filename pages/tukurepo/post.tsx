import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from '../components/header'
import SideBar from '../components/globalNav'
import Card from "../components/tukurepoCard"
import Box from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import {css} from '@emotion/react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ImageIcon from '@mui/icons-material/Image';
import Button from "@mui/material/Button"

const boxStyle:{[key:string]:string} = {
  position:"fixed",
  height:"100%",
  overflowY:"auto",
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
            <div style={{height:"100%",  padding:"32px"}}>
            <Typography variant = "h2" sx={{
                fontSize:"1.5rem",
                fontWeight:"500",
                my:"32px"
            }}>つくレポを投稿する</Typography>
            <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
            }}>作品</Typography>
            <Button sx={{
                width:"100%",
                borderRadius:"15px",
                border:"solid 1px grey"
            }}>
                <div style = {{height:"152px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{textAlign:"center"}}>
                    <UploadFileIcon sx={{fontSize:"32px"}}/>
                <Typography variant="body1">Click to upload or drag and drop</Typography>
                <Typography variant="subtitle2">SVG,PNG,JPG or GIF (max 3MB )</Typography> 
                    </div>
                </div>
            </Button>
            <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
            }}>プレビュー</Typography>
            <div style = {{height:"152px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightgrey",borderRadius:"15px"}}>
                    <div style={{textAlign:"center"}}>
                    <ImageIcon sx={{fontSize:"64px" ,color:"white"}}/>
                    </div>
            </div>
            <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
            }}>プレビュー</Typography>
            
            </div>

        </Box>
      </Box>
    </>
  )
}

export default Home
