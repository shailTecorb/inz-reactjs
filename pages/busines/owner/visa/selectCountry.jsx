
import Header from "../../../../components/Header";
import BusinessSideNavBar from '../../../../components/Header/Owner_Sidenavbar';
import React,{useState,useEffect} from "react"
import BOCountryList from "../../../../components/Business_Owner/allCountry";
const selectCountryPage = () =>{

    const [isBusinessOwner,setBusinerOwner] = useState(false)
    const [isLia,setLia] = useState(false)
    useEffect(()=>{
        if(localStorage.role == "businessOwner"){
            setBusinerOwner(true)
        }else if(localStorage.role == "liaAgent" && localStorage.approved == "true"){
            setLia(true)
        }else{
           
        }
    })
    return(
        <>
     {/* {isBusinessOwner?<BusinessSideNavBar/> :""}
     {isLia? <Header/>:""} */}
     <BOCountryList />
     
        </>
    )
}
export default selectCountryPage