import { Box, Paper, Toolbar } from "@mui/material"
 import  { MyTabs } from "../../component/tabs/MyTabs.comp"
import React from "react"

 export const Lessons:React.FC<{}>=()=>{
    
         return <>
     <Box>
         <Paper elevation={3}>
             <Toolbar/>
             <Toolbar><h1>all my react lessons</h1></Toolbar>
         <MyTabs/>
         </Paper>

        </Box>
        </>
}