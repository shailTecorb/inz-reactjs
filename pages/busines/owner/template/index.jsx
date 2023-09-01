
import Template from "../../../../components/Business_Owner/template"
import React,{useState,useEffect} from 'react'
import BusinessSideNavBar from "../../../../components/Header/Owner_Sidenavbar"
import Header from "../../../../components/Header"
const templatePage = () => {
    const [isLia, setIsLia] = useState(false)
    useEffect(()=>{
        if(localStorage.role == "liaAgent"){
            setIsLia(true)
        }else{
            setIsLia(false)
        }
    },[])
    return (
        <>
         
           {/* {!isLia ? <BusinessSideNavBar/>
            :
             <Header/>
           }
             */}
            <Template />
        </>
    )
}
export default templatePage