import React from "react"


export const TwowaysofCss:React.FC<{}>=()=>
{
    
    let mystyle={ width :'200px',height:'200px',backgroundcolor:'orange'}
    return <>
    <div className="mydiv1"></div><br />
    <div style={mystyle}>Hello i am another way of css</div>
    </>
}