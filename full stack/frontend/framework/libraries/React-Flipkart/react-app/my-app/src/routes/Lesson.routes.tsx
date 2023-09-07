import React from "react";
import { Outlet } from "react-router-dom";
import { MyProps } from "../pages/lessons/props/MyProps";
import { H1 } from "../pages/lessons/elements/H1";
import { Lessons } from "../pages/lessons/lesson.page"; 

export let myLessonsList = [
    {
      path: '/lessons',
      element: <Lessons /> 
    },
    {
      path: 'ele',
      element: <H1 />
    },
    {
      path: 'lessons',
      element: <Outlet />
    }
  ];
  
  
  
  
  





