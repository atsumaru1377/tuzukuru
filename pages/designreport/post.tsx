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
import ReportItemModel from '../../database/reportItemModel';
import ReportModel from '../../database/reportModel';
import { useForm, Controller } from "react-hook-form";
import { BaseSyntheticEvent } from 'react'

const boxStyle:{[key:string]:string} = {
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)',
}

const defaultValue:ReportItemModel = {
  photo_url : "",
  recipe_id : null,
  point : "",
  q_who : "",
  q_where : "",
  q_when : "",
  q_how : "",
  likes: 0,
  comments: {},
}

const Home: NextPage = () => {
  const { control, handleSubmit, reset } = useForm<ReportItemModel>({
    mode : 'onSubmit',
    defaultValues: defaultValue
  });

  const onSubmit = (data:ReportItemModel):void => {
    data.recipe_id = hash(String(data.recipe_id));
    console.log(data);
    addReport(data);
    reset();
  }

  return (
    <>
     <SiteHeader title="Tuzukuru 続くを作る | Tukurepo Post Page"></SiteHeader>
     <Box>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{padding:"0px 32px"}}>
              <Typography variant = "h2" sx={{
                  fontSize:"2rem",
                  fontWeight:"500",
                  my:"32px"
              }}>でざレポを投稿する</Typography>

              <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{width:"48%"}}>
                  <Typography  sx={{
                      fontWeight:"bold",
                      fontSize:"1.5rem",
                      my:"16px"
                  }}>作品</Typography>
                  <Button component="label" sx={{
                    width:"100%",
                    borderRadius:"15px",
                    border:"solid 1px grey"
                  }}>
                    <div style = {{height:"152px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <div style={{textAlign:"center"}}>
                      <Controller
                        control={control}
                        name="photo_url"
                        render={({field}) => (
                          <div>
                            <input {...field} type="file" accept="image/*,.png,.jpg,.jpeg,.gif,.svg" hidden/>
                          </div>
                        )}
                      />
                      <UploadFileIcon sx={{fontSize:"32px"}}/>
                      <Typography variant="body1">Click to upload or drag and drop</Typography>
                      <Typography variant="subtitle2">SVG,PNG,JPG or GIF (max 3MB)</Typography>
                      </div>
                    </div>
                  </Button>
                </div>

                <div style={{width:"48%"}}>
                  <Typography  sx={{
                    fontWeight:"bold",
                    fontSize:"1.5rem",
                    my:"16px"
                  }}>プレビュー</Typography>
                  <div style = {{height:"152px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"lightgrey",borderRadius:"15px", padding:"6px 8px"}}>
                    <div style={{textAlign:"center", height:"64px"}}>
                    <ImageIcon sx={{fontSize:"64px" ,color:"white"}}/>
                    </div>
                  </div>
                </div>
              </div>

              <Typography  sx={{
                  fontWeight:"bold",
                  fontSize:"1.5rem",
                  my:"16px"
              }}>コメント</Typography>
              <Controller
                control={control}
                name="recipe_id"
                render={({field}) => (
                  <TextField {...field} label="参考にしたレシピ" sx={{width:"100%"}}/>
                )}
              />

              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="point"
                render={({field}) => (
                  <TextField {...field} label="こだわりポイント" sx={{width:"100%"}}/>
                )}
              />


              <Typography  sx={{
                fontWeight:"bold",
                fontSize:"1.5rem",
                my:"16px"
              }}>困ったところなど</Typography>
              <Controller
                control={control}
                name="q_who"
                render={({field}) => (
                  <TextField {...field} label="誰に向けた作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />
              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="q_where"
                render={({field}) => (
                  <TextField {...field} label="どんなところで使う作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />
              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="q_when"
                render={({field}) => (
                  <TextField {...field} label="いつ見せる作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />
              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="q_how"
                render={({field}) => (
                  <TextField {...field} label="どのようにしようする作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />
              <Typography  sx={{
                fontSize:"1rem",
                mt:"32px",
                mb:"16px"
              }}>公開範囲を設定する</Typography>
              <FormControlLabel control={<Checkbox defaultChecked />} label="全体公開" />
              <div style={{width:"100%",padding:"32px 0",display:"flex",justifyContent:"center"}}>
                  <Button variant="contained" sx={{mx:"8px" ,color:"white"}} type="submit">投稿する</Button>
                  <Button variant="outlined" sx={{mx:"8px"}} type="reset">キャンセル</Button>
              </div>
            </div>
            <Footer/>
          </form>
          </Box>
        </Box>
        </Box>
    </>
  )
}

export default Home
