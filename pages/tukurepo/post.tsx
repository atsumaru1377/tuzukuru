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
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box style={boxStyle}>
            <Typography variant = "h2">つくレポを投稿する</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Home
