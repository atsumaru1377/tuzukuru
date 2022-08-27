import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton'

import {useState} from 'react';

import EditIcon from '@mui/icons-material/Edit';

export default function MediaCard() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(current => !current);
    };
  return (
    <Card sx={{
        width : {lg:"40%",sm:"70%",xs:"95%"},
        m:"24px",
        position:"relative",
        borderRadius:"24px",
        pb:"0"
    }}>
      <CardMedia
        component="img"
        height="50%"
        image="/static/images/sample_thumb.png"
        alt="blender tutorial sample"
      />
      <CardContent sx={{px:"16px",pb:"0"}}>
        <Typography gutterBottom variant="h5" component="div">
          Blneder リギング入門講座
        </Typography>
      </CardContent>
      <CardActions sx={{px:"16px"}}>
      <Chip label="初心者" component="a" href="#basic-chip" clickable color="success" sx={{color:"white"}}/>
      <Chip label="blender" component="a" href="#basic-chip" clickable color="warning" sx={{color:"white"}}/>
      <Chip label="VR" component="a" href="#basic-chip" clickable color="info" sx={{color:"white"}}/>
      <Chip label="3D" component="a" href="#basic-chip" clickable color="info" sx={{color:"white"}}/>
      <Chip label="CG" component="a" href="#basic-chip" clickable color="info" sx={{color:"white"}}/>
      </CardActions>
      <CardActions sx={{display:"flex",justifyContent:"space-between",pb:"0"}}>
      <div>
      <Button variant="text" > <EditIcon sx={{mx:"8px"}}/> 書き込み:62</Button>
      <Button variant="text"> <FavoriteIcon sx={{mx:"8px"}}/> いいね:652</Button>
      </div>
      <IconButton onClick={handleClick}>
        <FavoriteIcon sx={{
            color:isActive?"red":"grey"
        }}/>
      </IconButton>
      </CardActions>
    </Card>
  );
}
