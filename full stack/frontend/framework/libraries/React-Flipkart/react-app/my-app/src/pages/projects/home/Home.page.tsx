import { useEffect, useState } from "react"
import { FlipkartApiservice } from "../../../service/FlipkartApiservice";
import {Col,Row,Container } from "react-bootstrap";

export const Home:React.FC<{}>=()=>
{
let [apiData,setApiData]=useState([])
useEffect(()=>{(async()=>{
    let data=await FlipkartApiservice()
    setApiData(data)}) ()},[])
    console.log("apiData",apiData)
    return <>
    < Container fluid>
        <Row>
            <Col>
            <myBootstrapNavbar/>

            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
            <mySlider/>
            </Col>
        </Row>
        <br/>
        <h1>api way</h1>
        <Row>
            {
                apiData.map((item:any)=>{return <Col><myMuicard img={item.image}/></Col>})
            }
        </Row>
        <br/>
        <h1>normalway</h1>
        <Row>
            <Col>
            <myMuicard img={img}/>
            </Col>
        
            <Col>
            <myMuicard img={img1}/>
            </Col>
            <Col>
            <myMuicard img={img2}/>
            </Col>
            <Col>
            <myMuicard img={img}/>
            </Col>
            </Row>
            </Container>
            
        

    </>

}