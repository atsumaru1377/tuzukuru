import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from '../components/header'
import SideBar from '../components/globalNav'
import Card from "../components/tukurepoCard"
import Box from "@mui/material/Card"
import Tabs from "../components/Tabs"
import SiteHeader from "../components/siteHeader"
import {css} from '@emotion/react'

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

const Home: NextPage = () => {
  return (
    <>
     <SiteHeader title="Tuzukuru 続くを作る | tukurepo top page"></SiteHeader>
      <Box
        sx={{
          display:"flex"
        }}>
        <SideBar/>
        <Box style={boxStyle}>
            <Tabs/>
            <Box sx={{
              display:"flex",
              flexWrap:"wrap",
              justifyContent:"center"
            }}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
