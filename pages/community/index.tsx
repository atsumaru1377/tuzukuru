import type { NextPage } from 'next'
import SiteHeader from "../components/siteHeader"
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import Tabs from "../components/Tabs"
import Card from "../components/commuCard"
import Grid from "@mui/material/Grid"

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
    <SiteHeader title="Tuzukuru 続くを作る | community top page "></SiteHeader>
      <Box>
        <SideBar/>
        <Box style={boxStyle}>
        <div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 88px"}}>
            <Tabs/>
            <Grid container>
            <Grid item md={12}lg= {12}xl={6} >
                <Card/>
            </Grid>
            <Grid item sm={12}lg= {12} xl={6}>
                <Card/>
            </Grid>
            <Grid item md={12}lg= {12}xl={6} >
                <Card/>
            </Grid>
            <Grid item sm={12}lg= {12} xl={6}>
                <Card/>
            </Grid>
            <Grid item md={12}lg= {12}xl={6} >
                <Card/>
            </Grid>
            <Grid item sm={12}lg= {12} xl={6}>
                <Card/>
            </Grid>
            <Grid item md={12}lg= {12}xl={6} >
                <Card/>
            </Grid>
            <Grid item sm={12}lg= {12} xl={6}>
                <Card/>
            </Grid>
            <Grid item md={12}lg= {12}xl={6} >
                <Card/>
            </Grid>
            <Grid item sm={12}lg= {12} xl={6}>
                <Card/>
            </Grid>
            </Grid>
          </div>
        </Box>
    </Box>
    </>
  )
}

export default Home
