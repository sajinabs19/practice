import img from '../Images/myimage.jpg'
export const MyImage:React.FC<{}>=()=>{

    return <>
    <img style={{borderRadius:'50%'}} width='300' src={img}/>
    </>
}