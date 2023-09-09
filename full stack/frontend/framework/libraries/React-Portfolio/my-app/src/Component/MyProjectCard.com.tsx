


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export const MyProjectCard:React.FC<{}>=()=>{
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>Flipkart demo</h1>
        </Typography>
        <Typography variant="h5" component="div">
          <h6>Model of flipkart home page.This demo page is created using React and MUI.
            The components used in this project is navbar,carousel and cards.</h6>
        
        </Typography>
      </CardContent>
      <CardActions>
        <a href="">
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
