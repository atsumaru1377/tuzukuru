import type { NextPage } from 'next'
import SideBar from './components/globalNav'
import SiteHeader from "./components/siteHeader"
import Box from "@mui/material/Card"
import SearchBar from "./components/searchBar"
import SearchWindow from './components/searchWindow'
import Footer from "./components/footer"
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
						<SearchWindow/>
            <Footer/>
            </Box>
            </Box>
        </Box>
    </>
  )
}

export default Home
