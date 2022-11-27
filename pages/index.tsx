import type { NextPage } from 'next'
import SiteHeader from "./components/siteHeader"
import SideBar from './components/globalNav'
import Card from "./components/repoCard"
import Box from "@mui/material/Card"
import Tabs from "./components/Tabs"
import SearchBar from "./components/searchBar"
import Grid from "@mui/material/Grid"
import Footer from "./components/footer"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import RepoCard from "./components/tukurepoCard"
import { CommuCardType, DesignCardType, RecipeCardType } from "../plugins/type"

const datas: RecipeCardType[] = [
  {
    src: "/static/images/recipe_thumb/sample_1.png",
    title: "illustratorで柔らかいグラフィックを制作",
    tool: "illustrator",
    feature: "丸い",
    theme1: "ポスター",
    theme2: "HP",
    theme3: "LP"
  },
  {
    src: "/static/images/recipe_thumb/sample_2.png",
    title: "blenderでかわいいシューズを作る",
    tool: "blender",
    feature: "グラフィック",
    theme1: "3D",
    theme2: "CG",
    theme3: "可愛い"
  },
  {
    src: "/static/images/recipe_thumb/sample_3.png",
    title: "blenderで氷が落ちる動画を作る",
    tool: "blender",
    feature: "モデリング",
    theme1: "ゲーム",
    theme2: "3D",
    theme3: "CG"
  },
  {
    src: "/static/images/recipe_thumb/sample_4.png",
    title: "After Effectsで波打つモーション制作",
    tool: "After Effects",
    feature: "モーション",
    theme1: "HP",
    theme2: "LP",
    theme3: "動画"
  },
  {
    src: "/static/images/recipe_thumb/sample_5.png",
    title: "Cinema4DでサイバーなCGを作る",
    tool: "Cineme4D",
    feature: "モデリング",
    theme1: "3D",
    theme2: "CG",
    theme3: "動画"
  },
  {
    src: "/static/images/recipe_thumb/sample_6.png",
    title: "Photoshopでエモーショナルな夜景に加工",
    tool: "PhotoShop",
    feature: "加工",
    theme1: "Web",
    theme2: "LP",
    theme3: "写真"
  },
  {
    src: "/static/images/recipe_thumb/sample_1.png",
    title: "illustratorで柔らかいグラフィックを制作",
    tool: "illustrator",
    feature: "丸い",
    theme1: "ポスター",
    theme2: "HP",
    theme3: "LP"
  },
  {
    src: "/static/images/recipe_thumb/sample_2.png",
    title: "blenderでかわいいシューズを作る",
    tool: "blender",
    feature: "グラフィック",
    theme1: "3D",
    theme2: "CG",
    theme3: "可愛い"
  }
]
const design: DesignCardType[] = [
  { src: "/static/images/designReport/tuku_1.png" },
  { src: "/static/images/designReport/tuku_2.png" },
  { src: "/static/images/designReport/tuku_3.png" },
  { src: "/static/images/designReport/tuku_4.png" },
  { src: "/static/images/designReport/tuku_5.png" },
  { src: "/static/images/designReport/tuku_6.png" },
]
const Home: NextPage = () => {
  return (
    <>
      <SiteHeader title="Tuzukuru 続くを作る | top page"></SiteHeader>
      <Box
        sx={{
          display: "flex",
        }}>
        <SideBar />
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
            <SearchBar />
            <Tabs />
            <Typography variant="h2" sx={{
              fontSize: "1.5rem",
              fontWeight: "500",
              mt: "32px",
              mb: "16px",
              ml: "16px"
            }}>みんなのレシピ</Typography>
            <Grid container sx={{display:"flex",justifyContent:"center"}}>
              {datas.map((data: RecipeCardType, index: number) => {
                return (
                  <Grid item md={12} lg={6} xl={4} key={index}>
                    <Card
                      src={data.src}
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
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <Button role="button" href="/recipe">もっと見る</Button>
            </div>
            <Divider sx={{ my: "16px" }}></Divider>

            <Typography variant="h2" sx={{
              fontSize: "1.5rem",
              fontWeight: "500",
              mt: "32px",
              mb: "16px",
              ml: "16px"
            }}>みんなのでざレポ</Typography>
            <Grid container>
              {design.map((data: DesignCardType, index: number) => {
                return (
                  <Grid item xs={12} md={6} lg={4} xl={4} key={index}>
                    <RepoCard
                      src={data.src}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <Button role="button" href="/designreport">もっと見る</Button>
            </div>
            <Footer></Footer>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
