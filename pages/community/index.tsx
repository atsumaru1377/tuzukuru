import type { NextPage } from 'next'
import Image from 'next/image'

import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import Tabs from "../components/Tabs"
import Card from "../components/commuCard"


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
const AccordionStyle:{[key:string]:string} = {
  magin:"32px"
}

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <SideBar/>
        <Box style={boxStyle}>
            <Tabs/>
            <Box>
                <Card/>
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
