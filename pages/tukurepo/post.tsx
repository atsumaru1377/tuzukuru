import type { NextPage } from 'next'
import SideBar from '../components/globalNav'
import Box from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import {css} from '@emotion/react'
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
import { useForm, Controller } from "react-hook-form";

const boxStyle:{[key:string]:string} = {
  position:"fixed",
  height:"100%",
  overflowY:"auto",
  right:"0",
  top:"0",
  width:'calc(100% - 280px)',
}

const Home: NextPage = () => {
  const { control, handleSubmit } = useForm({
    mode : 'onSubmit',

    defaultValues: {
        recipe_id : 0,
        point : "",
        questions : {
          comment : "",
          post_date : 20220830,
          author : ""
        },
        likes: 0,
        comments: {
          who : "",
          where : "",
          when : "",
          how : ""
        },
    },
  });

  return (
    <>
     <SiteHeader title="Tuzukuru 続くを作る | tukurepo post page"></SiteHeader>
      <Box
        sx={{
          display:"flex",
        }}>
        <SideBar/>

        <Box style={boxStyle}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{padding:"32px"}}>
              <Typography variant = "h2" sx={{
                  fontSize:"1.5rem",
                  fontWeight:"500",
                  my:"32px"
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
              <Controller
                control={control}
                name="recipe_id"
                render={({field}) => (
                  <TextField label="参考にしたレシピ" sx={{width:"100%"}}/>
                )}
              />

              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="point"
                render={({field}) => (
                  <TextField label="こだわりポイント" sx={{width:"100%"}}/>
                )}
              />


              <Typography  sx={{
                fontSize:"1rem",
                my:"16px"
              }}>困ったところなど</Typography>
              <Controller
                control={control}
                name="comments.who"
                render={({field}) => (
                  <TextField label="誰に向けた作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />
              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="comments.where"
                render={({field}) => (
                  <TextField label="どんなところで使う作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />
              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="comments.when"
                render={({field}) => (
                  <TextField label="いつ見せる作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />
              <div style={{height:"16px",width:"100%"}}></div>
              <Controller
                control={control}
                name="comments.how"
                render={({field}) => (
                  <TextField label="どのようにしようする作品ですか？" size = "medium" sx={{width:"100%"}}/>
                )}
              />

              <div style={{width:"100%",paddingTop:"32px",display:"flex",justifyContent:"flex-end"}}>
                  <Button variant="contained" sx={{mx:"8px" ,color:"white"}} type="submit">投稿する</Button>
                  <Button variant="outlined" sx={{mx:"8px"}}>キャンセル</Button>
              </div>
            </div>
            <Footer/>
          </form>
        </Box>

      </Box>
    </>
  )
}

export default Home
