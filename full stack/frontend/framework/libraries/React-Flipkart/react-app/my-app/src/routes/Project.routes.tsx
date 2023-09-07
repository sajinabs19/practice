import { Outlet } from "react-router-dom";
import { Login } from "../pages/projects/login/Login.page";
import { Register } from "../pages/projects/register/Register.page";
import { Home } from "../pages/projects/home/Home.page";

export const allProjectsRoutes=
        {
            path:'/projects',
            Element:<><Outlet/></>,
        Children:[
            {
                Path:'login',
                Element:<Login/>
            
            },
            {
                Path:'register',
                Element:<Register/>
            },
            {
                Path:'home',
                Element:<Home/>
            }
        ]
        }