import { Outlet } from "react-router-dom";
 import { MyProps } from "../pages/lessons/props/MyProps";
 import { H1 } from "../pages/lessons/elements/H1";
import React from "react";

 export let myLessonsList={
     path:'/lessons',
     element:<div> <Outlet/></div>,
     children:[
         {
             path:'props',
             element:<MyProps/>
         },
         {
             path:'ele',
             element:<H1/>
         }
     ]
 } 