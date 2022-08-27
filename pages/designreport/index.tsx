import type { NextPage } from 'next'
import SideBar from '../components/globalNav'
import Card from "../components/tukurepoCard"
import Box from "@mui/material/Card"
import Tabs from "../components/Tabs"
import SiteHeader from "../components/siteHeader"
import SearchBar from "../components/searchBar"
import Grid from "@mui/material/Grid"
import Footer from "../components/footer"
const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
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
        <div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 88px"}}>
            <SearchBar></SearchBar>
            <Tabs/>
            <Grid container>
              <Grid item md= {6} lg={4} xl={3} >
                <Card/>
              </Grid>
              <Grid item md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              <Grid item md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>            
              <Grid item  md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              <Grid item  md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              <Grid item md= {6} lg={4} xl={3} >
                <Card/>
              </Grid>
              <Grid item md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              <Grid item md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>            
              <Grid item  md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              <Grid item  md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              <Grid item  md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              <Grid item  md= {6} lg={4} xl={3}>
                <Card/>
              </Grid>
              
            </Grid>
            <Footer></Footer>
        </div>
        </Box>
      </Box>
    </>
  )
}

export default Home
