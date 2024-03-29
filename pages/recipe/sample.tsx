import type { NextPage } from 'next'
import SiteHeader from "../components/siteHeader"
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import BreadCrumbs from "../components/breadCrumbs"
import  Typography  from '@mui/material/Typography'
import  Avatar  from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Accordion from "../components/accordion"
import TukuCard from "../components/tukurepoCard"
import RecipeCard from "../components/repoCard"
import Divider from '@mui/material/Divider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Footer from "../components/footer";
import Comment from "../components/comment";
import SearchBar from "../components/searchBar"
import Link from "next/link"
import Button from "@mui/material/Button"
import { DesignCardType , RecipeCardType } from '../../plugins/type'
import Grid from"@mui/material/Grid"

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
    <SiteHeader title="Tuzukuru 続くを作る | Recipe top page"></SiteHeader>
      <Box>
      <Box sx={{
          paddingLeft:{xs: "0",sm:"256px"},
          position: {xs:"relative",sm:"fixed"},
          height: "100%",
          overflowY: "auto",
          right: "0",
          top: "0",
          width:{xs:"100%",sm:'calc(100% - 280px)'}
        }}>
        <Box sx={{ maxWidth: "1560px", margin: "0 auto", p:{xs:'0 16px',sm:'0 88px'} }}>
        <SideBar/>
        <SearchBar/>
        <BreadCrumbs
          second = "レシピ"
          secondHref ="/recipe"
          third = "SFワールドを作る"
          thirdHref='/recipe/sample'/>
          <Box component="div"
            sx={{
              display:"flex",
              maxHeight:{xs:"720px",sm:"360px"},
              flexDirection:{xs:"column", sm:"row"},
              padding:"16px"
            }}
            elevation={0}
          >
            <Box
              elevation={0}
              component="div"
              sx={{maxWidth:"400px",height:{xs:"200px", sm:"auto"}, width:{xs:"100%", sm:"50%"},borderRadius:"15px"}}
            >
              <img src="/static/images/recipe_thumb/sample_1.png" alt = "thumbnail" style={{height:"100%", width:"100%", objectFit:"cover"}}/>
            </Box>
            <Box component="div" elevation={0} sx={{
              width:{xs:"100%", sm:"calc(80% - 320px)"},
              minWidth:{sm:"400px"},
              padding:{xs:"16px 0px", sm:"32px"}
            }}>
              <Typography variant = {"h2"} sx={{
                fontSize:{xs:"2rem", sm:"2.5rem"},
                fontWeight:"bold",
                margin:"8px"
              }}>blenderでリギング入門</Typography>
              <div style={{
                display:"flex",
                alignItems:"center"
              }}>
              <Avatar src="/static/images/sample_thumb.png"
              sx={{
                margin:"8px"
              }}/>
              <Typography sx={{
                fontSize:"1rem",
                margin:"8px"
              }}>近藤なおき</Typography>
              </div>
              <div style={{
                display:"flex",
                alignItems:"center"
              }}>
              <Chip label="初心者" component="a" href="#basic-chip" clickable color="success" sx={{color:"white", mx:"4px"}}/>
              <Chip label="blender" component="a" href="#basic-chip" clickable color="warning" sx={{color:"white",mx:"4px"}}/>
              <Chip label="Eevee" component="a" href="#basic-chip" clickable color="secondary" sx={{color:"white",mx:"4px"}}/>
              </div>
              <Typography sx={{
                fontSize:"1rem",
                mx:"4px",
                my:"16px"
              }}>Blenderのアドオンを使って、サムネイルのようなSFチックな都市を簡単に構築することができます。
              初心者の方にも簡単に制作をすることができるので、是非やってみてください。</Typography>
            </Box>
          </Box>
          <div
          style={{
            marginTop:"32px"
          }}>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mb:"16px"
                }}>レシピ</Typography>
          <Accordion />

          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>デザレポ</Typography>
          <Box component="div" elevation={0} sx={{display:{xs:"none",sm:"flex"}}}>
            <div style={{display:"flex",flexWrap:"nowrap",width:"80%",overflow:"scroll hidden",marginRight:"16px"}}>
            {designData.map((data: DesignCardType,index:number) => {
            return (
                <TukuCard
                src = {data.src}
                key={index}
                />
              );
            })}
            </div>
            <Divider orientation="vertical" flexItem/>
            <Link href="/designreport/post">
              <a>
              <Button sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"16px"}}>
                <div style={{width:"216px",height:"268px",backgroundColor:"#eeeeee",borderRadius:"15px",textAlign:"center"}}>
                  <AddCircleOutlineIcon sx={{fontSize:"32px",mt:"64px",color:"black"}}/>
                  <Typography sx={{m:"16px",color:"black"}}>あなたもでざレポを投稿しよう</Typography>
                </div>
              </Button>
              </a>
            </Link>
          </Box>
          <Box component="div" elevation={0} sx={{display:{xs:"flex",sm:"none"}}}>
            <div style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll hidden",marginRight:"16px"}}>
            <Link href="/tukurepo/post">
              <a>
              <Button sx={{display:"flex",justifyContent:"center",alignItems:"center",margin:"16px"}}>
                <div style={{width:"216px",height:"268px",backgroundColor:"#eeeeee",borderRadius:"15px",textAlign:"center"}}>
                  <AddCircleOutlineIcon sx={{fontSize:"32px",mt:"64px",color:"black"}}/>
                  <Typography sx={{m:"16px",color:"black"}}>あなたもでざレポを投稿しよう</Typography>
                </div>
              </Button>
              </a>
            </Link>
            <Divider orientation="vertical" flexItem/>
            {designData.map((data: DesignCardType,index:number) => {
            return (
                <TukuCard
                src = {data.src}
                key={index}
                />
              );
            })}
            </div>

          </Box>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>質問</Typography>
          <Typography variant = {"h3"} sx={{
            fontSize:"1.5rem",
            mt:"32px"
          }}>10件のコメント</Typography>
          <Comment/>
          <Typography variant = {"h3"} sx={{
                  fontSize:"2rem",
                  fontWeight:"bold",
                  mt:"32px"
                }}>他のレシピも見る</Typography>
          </div>
          <Grid container style={{display:"flex",flexWrap:"nowrap",width:"100%",overflow:"scroll hidden",marginRight:"16px"}}>
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
