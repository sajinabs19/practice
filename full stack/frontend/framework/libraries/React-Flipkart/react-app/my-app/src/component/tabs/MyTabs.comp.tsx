import * as React from 'react';
 import Tabs from '@mui/material/Tabs';
 import Tab from '@mui/material/Tab';

 import Box from '@mui/material/Box';
 import { TabList, TabPanel } from '@mui/lab';
 import { TabContext } from '@mui/lab';
 import { MyProps } from '../../pages/lessons/props/MyProps';
 import { H1 } from '../../pages/lessons/elements/H1';
 import { MyButton } from '../buttons/MyButton.comp';
 import { MyRating } from '../rating/MyRating.comp';
import { MyAvatar } from '../Avata/MyAvatar.comp';
import { MyFragment } from '../fragment/MyFragment.comp';
import { MyuseStateHook } from '../hook/MyuseStateHook.comp';
import { TwowaysofCss } from '../2waysofcss/TwowaysofCss.comp';
 export let MyTabs:React.FC<{}>=()=>{
   const [value, setValue] = React.useState('1');

   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
 console.log("newValue",typeof newValue)
     setValue(`${newValue}`);
   };

   return (
     <Box sx={{ width: '100%', typography: 'body1' }}>
       <TabContext value={value}>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
           <TabList onChange={handleChange} aria-label="lab API tabs example">
             <Tab label="props" value="1" />
             <Tab label="Elemetnts" value="2" />
             <Tab label="mui elemts" value="3" />
             <Tab label="Fragments" value="4" />
             <Tab label="hookes" value="5" />
           <Tab label="TwowaysofCss" value="6"/>
           </TabList>
         </Box>
         <TabPanel value="1"><MyProps/></TabPanel>
         <TabPanel value="2"><H1/></TabPanel>
         <TabPanel value="3">

 <MyButton/>
 <MyRating/>
 <MyAvatar/>
         </TabPanel>
         <TabPanel value='4'><MyFragment/></TabPanel>
         <TabPanel value="5"><h1>hookes</h1><MyuseStateHook/></TabPanel>
         <TabPanel value='6'><h1>Two ways of CSS</h1></TabPanel>
         <TwowaysofCss/>
 
         

       </TabContext>
     </Box>
   );
 } 