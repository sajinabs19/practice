import { Button } from "@mui/material"
import React from "react"
export const MyButton:React.FC<{}>=()=>{
    return <div>
    <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
</div>

}
