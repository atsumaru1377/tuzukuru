import type { NextPage } from 'next'
import SiteHeader from "./components/siteHeader"
import SideBar from './components/globalNav'
import Box from "@mui/material/Card"
import SearchBar from "./components/searchBar"
import Footer from "./components/footer"
import Typography from "@mui/material/Typography"
import Construction from '@mui/icons-material/ConstructionRounded'
import Link from 'next/link';
import Divider from "@mui/material/Divider"

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
        <SideBar/>
        <Box sx={{
          paddingLeft:{xs: "0px",sm:"256px"},
          position: {xs:"relative",sm:"fixed"},
          height: "100%",
          overflowY: "auto",
          right: "0",
          top: "0",
          width:{xs:"100%",sm:'calc(100% - 280px)'}
        }}>
					<Box sx={{maxWidth:"1560px",margin:"0 auto",padding:{xs:'0px',sm:'0px 88px'}}}>
					<SearchBar/>
					<Box sx={{height:"60vh", display:"flex",justifyContent:"center",alignItems:"center", boxShadow:"none"}}>
						<div>
              <Construction style={{fontSize:"180px"}}></Construction>
							<Typography variant='h4' style={{textAlign:"center"}}>製作中</Typography>
              <Divider sx={{my:"16px"}}/>
							<Link href="/"><Typography variant='h5' color="primary" style={{textAlign:"center"}}>Topへ戻る</Typography></Link>
						</div>
					</Box>
					<Footer></Footer>
					</Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
