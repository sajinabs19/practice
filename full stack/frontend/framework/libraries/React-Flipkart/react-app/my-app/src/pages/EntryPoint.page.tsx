import { Box, Button, Grid, Paper } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

export const EntryPoint:React.FC<{}>=()=>{

return <>
<Box>
    <Paper elevation={3}>

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Link to="/lessons/lessson">
    <Button>lesson</Button></Link>
    <Button>Projects</Button>
    <Link to='/projects/login'>
      <Button>Projects</Button>
    </Link>
    </Grid>
    </Paper>
</Box>
</>
}