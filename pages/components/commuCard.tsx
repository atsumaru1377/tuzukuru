import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Divider from "@mui/material/Divider"
import {useState} from 'react';
import Link from "next/link"
import {CommuCardType} from "../../plugins/type"

export default function MediaCard(props:CommuCardType) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };
  return (

    <Card sx={{
        m:"15px",
        position:"relative",
        borderRadius:"20px",
        display:{lg:"flex"},
        cursor:"pointer",
        filter:"drop-shadow(0 0 15px rgba(0,0,0,.1))",
        transition: "all .1s ease-out",
        "&:hover":{
          filter:"drop-shadow(0 0 10px rgba(0,0,0,.2))",
        }
    }}>
      <Link href="/community/sample">
      <CardMedia
        component="img"
        image={props.src}
        alt={props.title}
        sx={{width:{lg:"50%"},objectFit:"cover",cursor:"pointer"}}
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h3" sx={{fontSize:"24px",fontWeight:"bold"}} component="div">
          {props.title}
        </Typography>
        <div style={{maxWidth:"100%",overflowY:"scroll",display:"flex"}}>
            <Chip label="初心者" sx={{mx:"8px", color:"white"}}  color="success"></Chip>
            <Chip label="blender"sx={{mx:"8px", color:"white"}} color="warning"></Chip>
            <Chip label="SF"sx={{mx:"8px", color:"white"}} color = "info"></Chip>
            <Chip label="CG"sx={{mx:"8px", color:"white"}} color = "info"></Chip>
        </div>
        <div style={{display:"flex",paddingTop:"16px"}}>
            <Avatar alt="Remy Sharp" sx={{mx:"8px"}} src="/static/images/avatar/1.jpg" />
            <Divider sx={{mx:"8px"}} orientation="vertical" flexItem />
            <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
        </div>
      </CardContent>

    </Card>
  );
}
