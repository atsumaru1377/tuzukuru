import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteIcon from "@mui/icons-material/Favorite"
import Typography from '@mui/material/Typography';
import Link from "next/link"
type Card = {
  src:string
}
export default function ImgMediaCard(props:Card) {
  return (
    <Card role="tukurepo card" sx={{ minWidth: 216,m:"16px",borderRadius:"15px",cursor:"pointer",        filter:"drop-shadow(0 0 15px rgba(0,0,0,.1))",
    transition: "all .1s ease-out",
    "&:hover":{
      filter:"drop-shadow(0 0 10px rgba(0,0,0,.2))",
    }}}>
      <Link href="/designreport/sample">
      <CardMedia
        component="img"
        alt="tukurepo sample"
        height="216"
        image={props.src}
      />
      </Link>
      <CardActions sx={{
        p:"8px"
      }}>
        <Avatar
        sx={{
            width:32,height:32,
            mx:"8px"
        }}
        />
        <Button variant="text"sx={{ml:"8px"}}> 
            <ChatBubbleIcon sx={{h:"8px",w:"8px",mr:"4px"}} /> 
            <Typography sx={{fontSize:"0.8rem"}}>1000</Typography>
        </Button>
        <Button variant="text"sx={{mx:"0px"}}> 
            <FavoriteIcon sx={{h:"8px",w:"8px",mr:"4px"}}/> 
            <Typography sx={{fontSize:"0.8rem"}}>3000</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
