import { Box, Button, Grid } from "@mui/material"
import { MyNavbar } from "../Component/MyNavbar.com"
import { MyImage } from "../Component/MyImage.com"
import Resume from '../Images/Resume.pdf'
import { MyProjectCard } from "../Component/MyProjectCard.com"
import { MyProjectCard2 } from "../Component/MyProjectard2"

export const Portfolio:React.FC<{}>=()=>{
    return<>
    <Box sx={{m:2}}>
     <Grid>
        <MyNavbar/>
     </Grid>
     <br/>
     <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center" 
             >
        <Grid xs={6}><MyImage/></Grid>
          
        <Grid xs={6}><h2>Myself Sajina BS </h2>
Completed MCA in 2012.After that i worked as a computer science teacher in a cbse school in kerala during the year 2012 to 2017.
During that periods i trained students from Grade 9th to Plus two. 
Incharge of Theory and practical classes for Programming Languages C, C++, Java and HTML . 
Guided and helped students to complete their projects. 
Led projects like Library Management,Lab Assetmanagement for School.<br/><br/>
      <a href={Resume} download>
      <Button variant="contained" color="success" >Resume</Button> </a>
        </Grid>
     </Grid>
     <br/><br/><br/>
     <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:3}}>
     < Grid item xs={6}>
     <MyProjectCard/>
     </Grid>
     < Grid item xs={6}>
     <MyProjectCard2/>
     </Grid>
     < Grid item xs={6}>
     <MyProjectCard/>
     </Grid>
     < Grid item xs={6}>
     <MyProjectCard/>
     </Grid>
     </Grid>
    </Box>
    </>
}