import LIAS from "../../../../components/Business_Owner/LIA's"
import BusinessSideNavBar from "../../../../components/Header/Owner_Sidenavbar"

import React,{useState,useEffect} from 'react'
const LIA = () => {
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
            {/* {isLia ?
            
            ""
            :<BusinessSideNavBar/>
            } */}
            <LIAS type="lia"/>
        </>
    )
}
export default LIA