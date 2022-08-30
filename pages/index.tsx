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
import {CommuCardType,DesignCardType,RecipeCardType} from "../plugins/type"
import { getDatabase, ref, push, child, get, onValue, update} from "firebase/database";
import firebaseApp from "../firebase";

const boxStyle:{[key:string]:string} = {
  paddingLeft:"256px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)',
}

const design : DesignCardType[] = [
  {src:"/static/images/designReport/tuku_1.png"},
  {src:"/static/images/designReport/tuku_2.png"},
  {src:"/static/images/designReport/tuku_3.png"},
  {src:"/static/images/designReport/tuku_4.png"},
  {src:"/static/images/designReport/tuku_5.png"},
  {src:"/static/images/designReport/tuku_6.png"},
]

const recipeDatabase = ():RecipeCardType[] => {
  let recipeData:RecipeCardType[] = [];
  const database = getDatabase(firebaseApp);
  const recipeRef = ref(database, '/recipe/');
  onValue(recipeRef, (snapshot) => {
    const data = snapshot.val();
    for (const key in data) {
      if (data[key].available) {
        recipeData.push({
          available: true,
          src:data[key].src,
          title:data[key].title,
          tool:data[key].tool,
          feature:data[key].feature,
          theme1:data[key].theme1,
          theme2:data[key].theme2,
          theme3:data[key].theme3
        })
			}
		};
  });
  console.log(recipeData);
  return recipeData;
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
            {recipeDatabase().map((data: RecipeCardType,index:number) => {
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
            <div style={{display:"flex",justifyContent:"center",marginBottom:"16px"}}>
              <Button href="/recipe">もっと見る</Button>
            </div>
            <Divider sx={{my:"16px"}}></Divider>
            <Typography variant = "h2" sx={{
                fontSize:"1.5rem",
                fontWeight:"500",
                mt:"32px",
                mb:"16px",
                ml:"16px"
            }}>みんなのでざレポ</Typography>
            <Grid container>
              {design.map((data: DesignCardType,index:number) => {
                return (
                  <Grid item xs={12} md= {12} lg={6} xl={4} key={index}>
                    <RepoCard
                    src = {data.src}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"16px"}}>
            <Button href="/designreport">もっと見る</Button>
            </div>
            <Footer></Footer>
            </div>
        </Box>
      </Box>
    </>
  )
}

export default Home
