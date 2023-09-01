
import BusinessSideNavBar from "../../components/Header/Owner_Sidenavbar"
import React,{useState,useEffect} from 'react'
import Settings from "../../components/Settings"
import Header from "../../components/Header"
export default function SettingSec({ user }) {
    // console.log("User", user);
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
        {/* {!isLia? <BusinessSideNavBar/>
             : <Header /> }  */}
     <Settings />
         </>  
    )
}
