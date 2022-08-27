import type { NextPage } from 'next'
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ImageIcon from '@mui/icons-material/Image';
import Button from "@mui/material/Button";
import Footer from "../components/footer";
import SiteHeader from "../components/siteHeader";
import {hash} from "../../database/hash";
import {addReport} from '../../database/addReport';
import Questions from '../../database/questions';
import ReportItemModel from '../../database/reportItemModel';
import ReportModel from '../../database/reportModel';

const boxStyle:{[key:string]:string} = {
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
     <SiteHeader title="Tuzukuru 続くを作る | Tukurepo Post Page"></SiteHeader>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>
        <Box style={boxStyle}>
        <div style={{maxWidth:"1560px",margin:"0 auto",padding:"0 88px"}}>
            <SearchBar></SearchBar>
            <div style={{paddingTop:"32px"}}>
            <Typography variant = "h2" sx={{
                fontSize:"1.5rem",
                fontWeight:"500",
                mb:"32px"
            }}>つくレポを投稿する</Typography>
            <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
            }}>作品</Typography>
            <Button sx={{
                width:"100%",
                borderRadius:"15px",
                border:"solid 1px grey"
            }}>
                <div style = {{height:"152px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{textAlign:"center"}}>
                    <UploadFileIcon sx={{fontSize:"32px"}}/>
                <Typography variant="body1">Click to upload or drag and drop</Typography>
                <Typography variant="subtitle2">SVG,PNG,JPG or GIF (max 3MB )</Typography>
                    </div>
                </div>
            </Button>
            <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
            }}>プレビュー</Typography>
            <div style = {{height:"152px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightgrey",borderRadius:"15px"}}>
                    <div style={{textAlign:"center"}}>
                    <ImageIcon sx={{fontSize:"64px" ,color:"white"}}/>
                    </div>
            </div>
            <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
            }}>コメント</Typography>
            <TextField label="参考にしたレシピ" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="こだわりポイント" sx={{width:"100%"}}/>
            <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
            }}>困ったところなど</Typography>
             <TextField label="誰に向けた作品ですか？" size = "medium" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="どんなところで使う作品ですか？" size = "medium" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="いつ見せる作品ですか？" size = "medium" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="どのようにしようする作品ですか？" size = "medium" sx={{width:"100%"}}/>

            <div style={{width:"100%",paddingTop:"32px",display:"flex",justifyContent:"flex-end"}}>
                <Button variant="contained"sx={{mx:"8px" ,color:"white"}}>投稿する</Button>
                <Button variant="outlined" sx={{mx:"8px"}}>キャンセル</Button>
            </div>
            </div>
            <Footer/>
          </div>
        </Box>

      </Box>
    </>
  )
}

export default Home
