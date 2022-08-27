import type { NextPage } from 'next'
import SiteHeader from "./components/siteHeader"
import SideBar from './components/globalNav'
import Card from "./components/repoCard"
import Box from "@mui/material/Card"
import Tabs from "./components/Tabs"
import SearchBar from "./components/searchBar"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
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
     <SiteHeader title="Tuzukuru 続くを作る | top page"></SiteHeader>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box style={boxStyle}>
            <div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 32px"}}>
            <SearchBar/>
            <Tabs/>
            <div style={{display:"flex",justifyContent:"center",width:"100%",height:"100%"}}>
            <Box sx={{
              display:"flex",
              flexWrap:"wrap",
              justifyContent:"center",
              border:"0px",
              boxShadow:"none"
            }}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </Box>
            </div>
            </div>
        </Box>

      </Box>
    </>
  )
}

export default Home
