
import React,{useState,useEffect} from "react"
import BOVisaList from "../../../../components/Common/visa/BovisaList";
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
   
     <BOVisaList />
        </>
    )
}
export default selectCountryPage;