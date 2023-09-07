import { useRoutes } from "react-router-dom";
 import { myLessonsList } from "./MyLessonsList.routes";
import { myEntryPointList } from "../routes/EntryPoint.route";
import { allProjectsRoutes } from "./Project.routes";

 export default function MyRoutes(){
    return useRoutes([myLessonsList,myEntryPointList])
     return useRoutes([myLessonsList,myEntryPointList,allProjectsRoutes] )

 } 