
import { Box, Button, Grid, Paper, TextField, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";


export const Login:React.FC<{}>=()=>
{
    let [emailval,setemailval]=useState('')
    let[passwordval,setPasswordval]=useState('')
    let navigate=useNavigate()
    return<>


    < Box style={{height : '100vh'}}>
        <Paper>
            <Toolbar/>
            <Grid container spacing={2}>
            </Grid>
            <Grid  xs={2}></Grid>
            <Grid  xs={8}>
<Paper elevation={3} >

<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <h1>LoginForm</h1>
    <TextField value={emailval} id="outlined-basic" label="Email" variant="outlined" 
    
    onChange={(e)=>{setemailval(e.target.value)
     console.log(e.target.value)}}
/>
<TextField value={passwordval} id="outlined-basic" label="Password" variant="outlined" 
                                onChange={(e)=>{setPasswordval(e.target.value)
    console.log(e.target.value)}}
type="password" />
<br/>
<Button onClick={()=>{alert('${emailval}------- ${passwordval}') 
navigate('/projects/home')}} variant="contained" color='info'>Login</Button>
<Link to = '/projects/register'>
    <Button >Register</Button>
</Link>
</Grid>
        </Paper>
        </Grid>
        <Grid  xs={2}></Grid>
</Paper>
    </Box>
    </>
}