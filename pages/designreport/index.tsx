import type { NextPage } from 'next'
import SideBar from '../components/globalNav'
import Card from "../components/tukurepoCard"
import Box from "@mui/material/Card"
import Tabs from "../components/Tabs"
import SiteHeader from "../components/siteHeader"
import SearchBar from "../components/searchBar"
import Grid from "@mui/material/Grid"
import Footer from "../components/footer"
import Typography from "@mui/material/Typography"
const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)'
}
type designReport = {
  src:string;
}
const datas : designReport[] = [
  {src:"/static/images/designReport/tuku_1.png"},
  {src:"/static/images/designReport/tuku_2.png"},
  {src:"/static/images/designReport/tuku_3.png"},
  {src:"/static/images/designReport/tuku_4.png"},
  {src:"/static/images/designReport/tuku_5.png"},
  {src:"/static/images/designReport/tuku_6.png"},
  {src:"/static/images/designReport/tuku_7.png"},
  {src:"/static/images/designReport/tuku_8.png"},
  {src:"/static/images/designReport/tuku_9.png"},
  {src:"/static/images/designReport/tuku_10.png"},
  {src:"/static/images/designReport/tuku_11.png"},
  {src:"/static/images/designReport/tuku_12.png"},
  {src:"/static/images/designReport/tuku_13.png"},
  {src:"/static/images/designReport/tuku_14.png"},
  {src:"/static/images/designReport/tuku_15.png"},
  {src:"/static/images/designReport/tuku_16.png"},
]
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
            <Typography variant = "h2" sx={{
                fontSize:"1.5rem",
                fontWeight:"500",
                mt:"32px",
                mb:"16px",
                ml:"16px"
            }}>みんなのでざレポ</Typography>
            <Grid container>
              {datas.map((data: designReport,index:number) => {
              return (
                <Grid item xs={12} md= {12} lg={6} xl={4} key={index}>
                  <Card 
                  src = {data.src}
                  />
                </Grid>
                );
              })}
            </Grid>
            <Footer></Footer>
        </div>
        </Box>
      </Box>
    </>
  )
}

export default Home
