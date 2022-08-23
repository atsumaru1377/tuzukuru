import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import StarIcon from '@mui/icons-material/Star';
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
        maxWidth: 345 ,
        minWidth:320,
        m:"20px",
        position:"relative",
        borderRadius:"15px"
    }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/sample_thumb.png"
        alt="blender tutorial sample"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blneder リギング入門講座
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Blender初心者の人のために、リギングがどのようなものになるのかを解説します！
        </Typography>
      </CardContent>
      <CardActions>
      <Chip label="初心者" component="a" href="#basic-chip" clickable color="primary"/>
      <Chip label="blender" component="a" href="#basic-chip" clickable />
      <Chip label="Eevee" component="a" href="#basic-chip" clickable />
      </CardActions>
      <CardActions>
      <Button variant="text"> <EditIcon/> 1000</Button>
      <Button variant="text"> <StarIcon/> 3000</Button>
      <div style={{width:"150px"}}></div>
      <IconButton onClick={handleClick}>
        <FavoriteIcon sx={{
            color:isActive?"red":"grey"
        }}/>
    </IconButton>
      </CardActions>
    </Card>
  );
}
