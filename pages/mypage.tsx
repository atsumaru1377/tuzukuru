import type { NextPage } from 'next'
import SideBar from './components/globalNav'
import SiteHeader from "./components/siteHeader"
import Box from "@mui/material/Card"
import SearchBar from "./components/searchBar"
import MyPage from "./components/breadCrumbs"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import CommuCard from "./components/commuCard"
import RepoCard from "./components/tukurepoCard"
import RecipeCard from "./components/repoCard"
import Footer from "./components/footer"
import Grid from "@mui/material/Grid"
import {CommuCardType,DesignCardType,RecipeCardType} from "../plugins/type"

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

const commuData:CommuCardType[] =[
  { src:"/static/images/community/commu_1.png",
  title:"初心者イラレコミュニティ",
  tool:"illustrator",
  feature:"丸い",
  theme1:"ゆるゆる",
  theme2:"優しい",
  theme3:"LP"},
  { src:"/static/images/community/commu_2.png",
  title:"CADを極めたい高校生",
  tool:"illustrator",
  feature:"丸い",
  theme1:"ゆるゆる",
  theme2:"優しい",
  theme3:"LP"},
]
const designData:DesignCardType[] =[
  {src:"/static/images/designReport/tuku_1.png"},
  {src:"/static/images/designReport/tuku_2.png"},
  {src:"/static/images/designReport/tuku_3.png"},
  {src:"/static/images/designReport/tuku_4.png"},
]
const recipeData:RecipeCardType[] =[
  { src:"/static/images/recipe_thumb/sample_1.png",
  title:"illustratorで柔らかいグラフィックを制作",
  tool:"illustrator",
  feature:"丸い",
  theme1:"ポスター",
  theme2:"HP",
  theme3:"LP"},
  { src:"/static/images/recipe_thumb/sample_2.png",
  title:"blenderでかわいいシューズを作る",
  tool:"blender",
  feature:"グラフィック",
  theme1:"3D",
  theme2:"CG",
  theme3:"可愛い"},
]

const Home: NextPage = () => {
  return (
    <>
      <SiteHeader title="Tuzukuru 続くを作る。 | My Page"></SiteHeader>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box sx={{
          paddingLeft:{xs: "0",sm:"256px"},
          position: {xs:"relative",sm:"fixed"},
          height: "100%",
          overflowY: "auto",
          right: "0",
          top: "0",
          width:{xs:"100%",sm:'calc(100% - 280px)'}
        }}>
            <Box sx={{ maxWidth: "1560px", margin: "0 auto", p:{xs:'0',sm:'0 88px'} }}>
            <SearchBar/>
            <MyPage
              second = "マイページ"
              secondHref ="/mypage"
              third = ""
              thirdHref=''/>
            <Box component="div" elevation={0} sx={{width:"100%",display:{xs:"none", sm:"flex"},padding:"16px",alignItems:"center"}}>
                <Avatar sx={{width:130,height:130}}>M</Avatar>
                <div style={{width:"32px"}}></div>
                <div style={{padding:"16px"}}>
                    <Typography variant="h2" sx={{fontWeight:"500",fontSize:"48px",minWidth:"250px"}}>近藤なおき</Typography>
                    <div style={{overflow:"scroll",paddingTop:"16px"}}>
                    <Chip label="After Effects" color = "success" sx={{color:"white",margin:"4px"}}></Chip>
                    <Chip label="blender" color = "success" sx={{color:"white",margin:"4px"}}></Chip>
                    <Chip label="ガンプラ" color="secondary" sx={{color:"white",margin:"4px"}}></Chip>
                    </div>
                </div>
                <div style={{width:"64px"}}></div>
                <Divider orientation = "vertical" flexItem/>
                <div style={{width:"50%",maxWidth:"1000px",height:"100%",overflowX:"scroll",display:"flex",flexWrap:"nowrap"}}>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>でざレポ数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>25</Typography>
                    </div>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>レシピ数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>45</Typography>
                    </div>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>質問数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>12</Typography>
                    </div>
                    <div style={{minWidth:"80px",padding:"32px",textAlign:"center"}}>
                        <Typography>いいね数</Typography>
                        <Typography sx={{fontSize:32,fontWeight:"bold"}}>100</Typography>
                    </div>

                </div>
            </Box>
            <Box component="div" elevation={0} sx={{width:"100%",display:{xs:"flex", sm:"none"},padding:"16px",flexDirection:"column"}}>
              <Box component="div" elevation={0} sx={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"90%", marginBottom:"16px"}}>
                <Avatar sx={{width:60,height:60}}>M</Avatar>
                <Typography variant="h2" sx={{fontWeight:"500",fontSize:"48px",minWidth:"250px"}}>近藤なおき</Typography>
              </Box>
              <Box component="div" elevation={0} sx={{display:"flex", overflow:"scroll", alignItems:"center", width:"90%", marginBottom:"16px"}}>
                <Chip label="After Effects" color = "success" sx={{color:"white",margin:"4px"}}></Chip>
                <Chip label="blender" color = "success" sx={{color:"white",margin:"4px"}}></Chip>
                <Chip label="ガンプラ" color="secondary" sx={{color:"white",margin:"4px"}}></Chip>
              </Box>
              <Box component="div" elevation={0} sx={{display:"flex", overflow:"scroll", alignItems:"center", width:"90%", marginBottom:"16px"}}>
                <Box component="div" elevation={0} sx={{minWidth:"80px",textAlign:"center", padding:"0 16px"}}>
                  <Typography>でざレポ数</Typography>
                  <Typography sx={{fontSize:32,fontWeight:"bold"}}>25</Typography>
                </Box>
                <Box component="div" elevation={0} sx={{minWidth:"80px",textAlign:"center", padding:"0 16px"}}>
                  <Typography>レシピ数</Typography>
                  <Typography sx={{fontSize:32,fontWeight:"bold"}}>45</Typography>
                </Box>
                <Box component="div" elevation={0} sx={{minWidth:"80px",textAlign:"center", padding:"0 16px"}}>
                  <Typography>質問数</Typography>
                  <Typography sx={{fontSize:32,fontWeight:"bold"}}>12</Typography>
                </Box>
                <Box component="div" elevation={0} sx={{minWidth:"80px",textAlign:"center", padding:"0 16px"}}>
                  <Typography>いいね数</Typography>
                  <Typography sx={{fontSize:32,fontWeight:"bold"}}>100</Typography>
                </Box>

              </Box>
            </Box>
            <Divider/>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  my:"32px",
                  pl:"16px"
                }}>マイコミュニティ</Typography>
            <Grid container>
            {commuData.map((data: CommuCardType,index:number) => {
            return (
              <Grid item md={12}lg= {12}xl={6} key={index}>
                <CommuCard
                src = {data.src}
                title={data.title}
                tool={data.tool}
                feature={data.feature}
                theme1={data.theme1}
                theme2={data.theme2}
                theme3={data.theme3}
                />
              </Grid>
              );
            })}
            </Grid>

            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"64px",
                  pl:"16px"
                }}>自分のでざレポ</Typography>
                          <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll",marginRight:"16px"}}>
            {designData.map((data: DesignCardType,index:number) => {
            return (
                <RepoCard
                src = {data.src}
                key={index}
                />
              );
            })}
            </div>
            <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px",
                  mt:"64px",
                  pl:"16px"
                }}>公開したレシピ</Typography>
                <Grid container sx={{
                display:"flex",
                flexWrap:"nowrap",
                overflowY:"scroll"
                }}>
              {recipeData.map((data: RecipeCardType,index:number) => {
              return (
                <Grid item key={index}>
                  <RecipeCard
                  src = {data.src}
                  title={data.title}
                  tool={data.tool}
                  feature={data.feature}
                  theme1={data.theme1}
                  theme2={data.theme2}
                  theme3={data.theme3}
                  />
                  </Grid>
                );
              })}
              </Grid>
            <Footer/>
            </Box>
            </Box>
        </Box>
    </>
  )
}

export default Home
