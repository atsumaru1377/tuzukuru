import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from './components/header'
import SideBar from './components/globalNav'
import Card from "./components/repoCard"
import Box from "@mui/material/Card"
import BreadCrumbs from "./components/breadCrumbs"

const boxStyle = {
  display:"flex",
  paddingLeft:"280px",
  position:"fixed",
  flexWrap:"wrap",
  height:"100%",
  overflowY:"auto",
  right:0,
  top:0,
  width:'calc(100% - 280px)'
}

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <SideBar/>
        <Box style={boxStyle}>
          <BreadCrumbs/>
          <Box></Box>
        </Box>
        </Box>
    </>
  )
}

export default Home
