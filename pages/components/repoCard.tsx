import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard() {
  return (
    <Card sx={{ 
        maxWidth: 345 ,
        m:"15px"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
