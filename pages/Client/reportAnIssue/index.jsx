import React,{useState,useEffect} from 'react'
import ReportIssue from '../../../components/ClientSection/ReportAnIssue/ReportIssue';
import Header from '../../../components/Header';
import BusinessSideNavBar from '../../../components/Header/Owner_Sidenavbar';
const IssueReports = () => {
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
            : <Header/> }  */}
            <ReportIssue/>
        </>
    )
}

export default IssueReports
