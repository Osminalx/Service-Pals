import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Bttn from '../Bttn';

export default function MultiActionAreaCard() {
  const[count,setCount] = useState(1);
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/200/300"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ayuda Comunitaria
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Bttn color ={count % 2 !== 0 ? 'green':'red'} text={count % 2 !== 0 ? 'Unirse': 'Salir'} onClick={()=> setCount(count + 1)}/>
      </CardActions>
    </Card>
  );
}
