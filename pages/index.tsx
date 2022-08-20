import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from './components/header'
import SideBar from './components/globalNav'
import Card from "./components/repoCard"
import Box from "@mui/material/Card"
import {css} from '@emotion/react'

const Home: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box
          sx={{
            display:"flex",
            pl:"280px",
            position:"fixed",
            flexWrap:"wrap",
            height:"100%",
            overflowY:"auto",
            right:0,
            top:0,
            w:"calc(100%-280px)"
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
    </>
  )
}

export default Home
