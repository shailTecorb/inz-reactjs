
import AppointmentMode from "../../../../components/Common/visa/appointment_backup"
import Header from "../../../../components/Header"

import React,{useState,useEffect} from "react"
import BusinessSideNavBar from '../../../../components/Header/Owner_Sidenavbar';

const appointmentModePage = () =>{

    const [isBusinessOwner,setBusinerOwner] = useState(false)
    const [isLia,setLia] = useState(false)

    useEffect(()=>{
        if(localStorage.role == "businessOwner" && localStorage.approved == "true"){
            setBusinerOwner(true)
           window.location.href = "/busines/owner/dashboard"
        }else if(localStorage.role == "liaAgent" && localStorage.approved == "true"){
            setLia(true)
        }else{

        }
    })
    return(
        <>
     
     {/* {isBusinessOwner?<BusinessSideNavBar/> :""}
     {isLia? <Header/>:""} */}
<AppointmentMode/>

        </>
    )
}
export default appointmentModePage