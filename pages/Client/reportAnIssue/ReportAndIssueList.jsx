import React,{useState,useEffect} from 'react'
import ListOfAssuesReported from '../../../components/ClientSection/ReportAnIssue/ListOfAssuesReported';
import BusinessSideNavBar from '../../../components/Header/Owner_Sidenavbar';
import Header from '../../../components/Header/index';

const ReportAndIssueList = () => {
    const [isLia, setIsLia] = useState(false)
    useEffect(()=>{
        if(localStorage.role == "liaAgent"){
            setIsLia(true)
        }else{
            setIsLia(false)
        }
    },[])
    return (
        <div>
                
            {/* {isLia ?<Header/>
            :<BusinessSideNavBar/>
            } */}
            <ListOfAssuesReported/>
        </div>
    )
}

export default ReportAndIssueList
