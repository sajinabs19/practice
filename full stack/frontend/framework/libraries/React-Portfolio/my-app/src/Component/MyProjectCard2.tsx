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

export const MyProjectCard2:React.FC<{}>=()=>{
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>Learning Point</h1>
        </Typography>
        <Typography variant="h5" component="div">
          <h6>Complete information about fullstack development that is frontend ,backend and data bases.<br/></h6>
        
        </Typography>
      </CardContent>
      <CardActions>
        <a href= 
        "https://sajinabs19.github.io/practice/">
        <Button variant='contained' size="small">Click here</Button></a>
      </CardActions>
    </Card>
  );
}
