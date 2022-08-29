import type { NextPage } from 'next'
import SiteHeader from "../components/siteHeader"
import SideBar from '../components/globalNav'
import Card from "../components/repoCard"
import Box from "@mui/material/Card"
import Tabs from "../components/Tabs"
import SearchBar from "../components/searchBar"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)',
}
type CardData = {
  src:string;
  title:string;
  tool:string;
  feature:string;
  theme1:string;
  theme2:string;
  theme3:string;
};
const datas : CardData[] = [
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
    { src:"/static/images/recipe_thumb/sample_3.png",
    title:"blenderで氷が落ちる動画を作る",
    tool:"blender",
    feature:"モデリング",
    theme1:"ゲーム",
    theme2:"3D",
    theme3:"CG"},
    { src:"/static/images/recipe_thumb/sample_4.png",
    title:"After Effectsで波打つモーション制作",
    tool:"After Effects",
    feature:"モーション",
    theme1:"HP",
    theme2:"LP",
    theme3:"動画"},
    { src:"/static/images/recipe_thumb/sample_5.png",
    title:"Cinema4DでサイバーなCGを作る",
    tool:"Cineme4D",
    feature:"モデリング",
    theme1:"3D",
    theme2:"CG",
    theme3:"動画"},
    { src:"/static/images/recipe_thumb/sample_6.png",
    title:"Photoshopでエモーショナルな夜景に加工",
    tool:"PhotoShop",
    feature:"加工",
    theme1:"Web",
    theme2:"LP",
    theme3:"写真"},
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
    { src:"/static/images/recipe_thumb/sample_3.png",
    title:"blenderで氷が落ちる動画を作る",
    tool:"blender",
    feature:"モデリング",
    theme1:"ゲーム",
    theme2:"3D",
    theme3:"CG"},
    { src:"/static/images/recipe_thumb/sample_4.png",
    title:"After Effectsで波打つモーション制作",
    tool:"After Effects",
    feature:"モーション",
    theme1:"HP",
    theme2:"LP",
    theme3:"動画"},
    { src:"/static/images/recipe_thumb/sample_5.png",
    title:"Cinema4DでサイバーなCGを作る",
    tool:"Cineme4D",
    feature:"モデリング",
    theme1:"3D",
    theme2:"CG",
    theme3:"動画"},
    { src:"/static/images/recipe_thumb/sample_6.png",
    title:"Photoshopでエモーショナルな夜景に加工",
    tool:"PhotoShop",
    feature:"加工",
    theme1:"Web",
    theme2:"LP",
    theme3:"写真"}
]
const Home: NextPage = () => {
  return (
    <>
     <SiteHeader title="Tuzukuru 続くを作る | Recipe Page"></SiteHeader>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box style={boxStyle}>
            <div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 88px"}}>
            <SearchBar/>
            <Tabs/>
            <Typography variant = "h2" sx={{
                fontSize:"1.5rem",
                fontWeight:"500",
                mt:"32px",
                mb:"16px",
                ml:"16px"
            }}>みんなのレシピ</Typography>
            <Grid container>
            {datas.map((data: CardData,index:number) => {
            return (
              <Grid item md= {12} lg={6} xl={4} key={index}>
                <Card 
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
            </div>

        </Box>
      </Box>
    </>
  )
}

export default Home
