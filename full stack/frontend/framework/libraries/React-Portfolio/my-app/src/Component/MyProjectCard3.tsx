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

export const MyProjectCard3:React.FC<{}>=()=>{
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>Dynamic Calculator</h1>
        </Typography>
        <Typography variant="h5" component="div">
          <h6>It is a model of dynamic calculator.
             In this calculator we can do addition,subtraction,multiplication and division.
             Delete and Clear button also added in this.</h6>
        
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://sajinabs19.github.io/practice/full%20stack/frontend/languages/TS/project/dynamiccalc.html">
        <Button variant='contained' size="small">Click here</Button></a>
      </CardActions>
    </Card>
  );
}
