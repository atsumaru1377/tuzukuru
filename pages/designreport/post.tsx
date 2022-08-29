import type { NextPage } from 'next'
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ImageIcon from '@mui/icons-material/Image';
import Button from "@mui/material/Button";
import Footer from "../components/footer";
import SiteHeader from "../components/siteHeader"
import SearchBar from "../components/searchBar"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
                fontSize:"2rem",
                fontWeight:"500",
                mb:"32px"
            }}>でざレポを投稿する</Typography>
            <Typography  sx={{
              fontWeight:"bold",
                fontSize:"1.5rem",
                my:"16px"
            }}>作品</Typography>
            <div style={{display:"flex"}}>
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
              fontWeight:"bold",
                fontSize:"1.5rem",
                my:"16px"
            }}>プレビュー</Typography>
            <div style = {{height:"152px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightgrey",borderRadius:"15px"}}>
                    <div style={{textAlign:"center"}}>
                    <ImageIcon sx={{fontSize:"64px" ,color:"white"}}/>
                    </div>
            </div>
            </div>
            <Typography  sx={{
                fontWeight:"bold",
                fontSize:"1.5rem",
                my:"16px"
            }}>コメント</Typography>
            <TextField label="参考にしたレシピ" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="こだわりポイント" sx={{width:"100%"}}/>
            <Typography  sx={{
                fontWeight:"bold",
                fontSize:"1.5rem",
                my:"16px"
            }}>困ったところなど</Typography>
             <TextField label="誰に向けた作品ですか？" size = "medium" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="どんなところで使う作品ですか？" size = "medium" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="いつ見せる作品ですか？" size = "medium" sx={{width:"100%"}}/>
            <div style={{height:"16px",width:"100%"}}></div>
            <TextField label="どのようにしようする作品ですか？" size = "medium" sx={{width:"100%"}}/>
            <Typography  sx={{
                fontSize:"1rem",
                mt:"32px",
                mb:"16px"
            }}>公開範囲を設定する</Typography>
            <FormControlLabel control={<Checkbox defaultChecked />} label="全体公開" />
            <div style={{width:"100%",padding:"32px 0",display:"flex",justifyContent:"center"}}>
                <Button variant="contained"size="large"sx={{mx:"8px" ,color:"white"}}>投稿する</Button>
                <Button variant="outlined"size="large" sx={{mx:"8px"}}>キャンセル</Button>
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
