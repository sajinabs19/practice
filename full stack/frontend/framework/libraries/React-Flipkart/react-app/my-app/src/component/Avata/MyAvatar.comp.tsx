import Avatar from "@mui/material/Avatar"
import React from "react"
import img1 from '../../static/images/1.jpg'
import img2 from '../../static/images/2.jpg'
import img3 from '../../static/images/3.jpg'


export const MyAvatar:React.FC<{}>=()=>{

    return <> <Avatar
        alt="Remy Sharp"
        src={img1}
        sx={{ width: 24, height: 24 }} />
        ,
        <Avatar alt="Remy Sharp" src={img2} />
        ,
        <Avatar
            alt="Remy Sharp"
            src={img3}
            sx={{ width: 56, height: 56 }} />
            </>
}