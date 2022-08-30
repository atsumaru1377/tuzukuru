import type { NextPage } from 'next';
import SiteHeader from "./components/siteHeader";
import SideBar from './components/globalNav';
import Box from "@mui/material/Card";
import Tabs from "./components/Tabs";
import Card from "./components/commuCard";
import SearchBar from "./components/searchBar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchWindow from './components/searchWindow';
import Footer from './components/footer';

const boxStyle:{[key:string]:string} = {
  paddingLeft:"280px",
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  p:"32px",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)'
}
const AccordionStyle:{[key:string]:string} = {
  magin:"32px"
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
  { src:"/static/images/community/commu_3.png",
  title:"photoshop学びたい写真好きの部屋",
  tool:"illustrator",
  feature:"丸い",
  theme1:"ゆるゆる",
  theme2:"優しい",
  theme3:"LP"},
  { src:"/static/images/community/commu_4.png",
  title:"XDでUIUXを学ぶ高校生コミュニティ",
  tool:"illustrator",
  feature:"丸い",
  theme1:"ゆるゆる",
  theme2:"優しい",
  theme3:"LP"},
]
const Home: NextPage = () => {
  return (
    <>
    <SiteHeader title="Tuzukuru 続くを作る | community top page "></SiteHeader>
      <Box>
        <SideBar page="mycommunity"/>
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
            }}>マイコミュニティ</Typography>
            <Grid container>
            {datas.map((data: CardData,index:number) => {
            return (
              <Grid item md={12}lg= {12}xl={6} key={index}>
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
            <Footer></Footer>
          </div>
        </Box>
    </Box>
    </>
  )
}

export default Home
