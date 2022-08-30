import type { NextPage } from 'next'
import SiteHeader from "./components/siteHeader"
import SideBar from './components/globalNav'
import Box from "@mui/material/Card"
import SearchBar from "./components/searchBar"
import Footer from "./components/footer"
import Typography from "@mui/material/Typography"
import Link from 'next/link';
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
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
     <SiteHeader title="Tuzukuru 続くを作る | top page"></SiteHeader>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar page="404"/>
        <Box style={boxStyle}>
					<div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 88px"}}>
					<SearchBar/>
					<Box sx={{height:"60vh", display:"flex",justifyContent:"center",alignItems:"center", boxShadow:"none"}}>
						<div style={{textAlign:"center"}}>
							<Typography variant='h3' sx={{fontSize:"4rem"}} >404</Typography>
							<Typography variant='h4'sx={{fontSize:"2rem"}}>not found</Typography>
							<Divider sx={{my:"16px"}}/>
              <div style={{display:"flex",justifyContent:"center"}}>
							<Button href="/" color="primary" sx={{margin:"0 auto",fontSize:"1rem"}}>Topへ戻る</Button>
              </div>
						</div>
					</Box>
					<Footer></Footer>
					</div>
        </Box>
      </Box>
    </>
  )
}

export default Home
