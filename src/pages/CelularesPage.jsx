import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';

export function CelularesPage(){
    return (
        <Grid margin="15px">
            <Card sx={{ maxWidth: 345 }} >
            <CardActionArea >
            <CardMedia
                component="img"
                height="140"
                image="../images/cel.jpg"
                alt="Nokia 3310"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Nokia 3310
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Mitico celular Nokia 3310 de los años 2000, servia para hacer llamadas carisimas,
                mandar msjs de texto y jugar a la culebrita, la bateria duraba 6 semanas y se dice 
                que era indestructible!. 
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
       </Grid>
  );
}