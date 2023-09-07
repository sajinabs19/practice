import { Box, Button, Grid, Paper, TextField, Toolbar } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Register:React.FC<{}>=()=>
{
    let [nameval,setNameval]=useState('')
    let [emailval,setEmailval]=useState('')
    let [passwordval,setPasswordval]=useState('')
    return<>
    <Box style={{height:'100vh'}}>
        <Paper>
            <Toolbar/>
            <Grid container spacing={3}>
            <Grid  xs={3}></Grid>
 
            <Grid xs={8} >
                <Paper elevation={3}>
                
                 <Grid
                 container
                 direction="column"
                 justifyContent="center"
                 alignItems="center"
               >
              <h1>Register Form</h1>
              <TextField value={nameval} id="outlined-basic" label="Name" variant="outlined" 
              onChange={(e)=>{setNameval(e.target.value)
            console.log(e.target.value)
            }}
              />
              <br/>
              <TextField value={ emailval} id="outlined-basic" label="Email" variant="outlined" 
              onChange={(e)=>{setEmailval(e.target.value)
            console.log(e.target.value)
            }}
              />
              <br/>
              <TextField value={passwordval} id="outlined-basic" label="Password" variant="outlined" 
              onChange={(e)=>{setPasswordval(e.target.value)
               console.log(e.target.value)           
            }}
              type="password"
              />
             <br/>
             <Button onClick={()=>{alert('${nameval}------${emailval}-------${passwordval}')}} variant="contained" color="info">Register</Button>
                <Link to='/project/Login'>
                    <Button>Login</Button>
                </Link>
                </Grid>
                </Paper>
            </Grid>
            <Grid xs={2} ></Grid>
            </Grid>
            <Toolbar/>
        </Paper>
    </Box>
    </>

}