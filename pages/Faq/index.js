import Faq from "../../components/Common/Faq"
import BusinessSideNavBar from "../../components/Header/Owner_Sidenavbar"

import React,{useState,useEffect} from 'react'
import Header from "../../components/Header"
const FaqPage = () =>{
    const [isLia, setIsLia] = useState(false)
    useEffect(()=>{
        if(localStorage.role == "liaAgent"){
            setIsLia(true)
        }else{
            setIsLia(false)
        }
    },[])
    return(
        <>
       {/* {!isLia? <BusinessSideNavBar/>
            : <Header/> }  */}
     <Faq />
        </>
    )
}
export default FaqPage
