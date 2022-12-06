import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton'
import Link from "next/link"
import {useState} from 'react';

import EditIcon from '@mui/icons-material/Edit';

type Props = {
  src:string;
  title:string;
  tool:string;
  feature:string;
  theme1:string;
  theme2:string;
  theme3:string;
}

export default function MediaCard(props:Props) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };
  return (
    <Card sx={{
        m:"16px",
        position:"relative",
        borderRadius:"24px",
        maxWidth:"90vw",
        cursor:"pointer",
        boxShadow:"none",
        filter:"drop-shadow(0 0 15px rgba(0,0,0,.1))",
        transition: "all .1s ease-out",
        "&:hover":{
          filter:"drop-shadow(0 0 10px rgba(0,0,0,.2))",
        }
    }}>
      <Link href="/recipe/sample">
      <CardMedia
        component="img"
        image={props.src}
        alt="blender tutorial sample"
      />
      </Link>
      <CardContent sx={{px:"16px",pb:"0",pt:"16px"}}>
        <Typography gutterBottom variant="h5" component="div"
          sx={{whiteSpace:{md:"normal",lg:"nowrap"},
          overflowY:"scroll",
          "::-webkit-scrollbar" : {display:"none"}
          }}>

          {props.title}
        </Typography>
      </CardContent>
      <CardActions sx={{px:"16px",overflowY:"scroll", "::-webkit-scrollbar" : {display:"none"}}}>
      <Chip label="初心者" component="a" href="#basic-chip" clickable color="success" sx={{color:"white"}}/>
      <Chip label={props.tool} component="a" href="#basic-chip" clickable color="warning" sx={{color:"white"}}/>
      <Chip label={props.theme1} component="a" href="#basic-chip" clickable color="info" sx={{color:"white"}}/>
      <Chip label={props.theme2} component="a" href="#basic-chip" clickable color="secondary" sx={{color:"white"}}/>
      <Chip label={props.theme3} component="a" href="#basic-chip" clickable color="secondary" sx={{color:"white"}}/>
      <Chip label={props.feature} component="a" href="#basic-chip" clickable color="secondary" sx={{color:"white"}}/>
      </CardActions>

      <CardActions sx={{display:"flex",justifyContent:"space-between",pb:"16px"}}>
      <div>
      <Button role="button" variant="text" > <EditIcon sx={{mx:"8px"}}/> 書き込み:62</Button>
      <Button role="button" variant="text"> <FavoriteIcon sx={{mx:"8px"}}/> いいね:652</Button>
      </div>
      <IconButton onClick={handleClick}>
        <FavoriteIcon sx={{
            color:isActive?"#2196f3":"grey"
        }}/>
      </IconButton>
      </CardActions>
    </Card>
  );
}
