import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/form.module.scss"
import {report_an_issue,booking_reason_list} from "../../helpers/business_owner_service"
import {useRouter} from 'next/router'
const ReportIssue = () => {
    const route = useRouter()
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [data,setData] =useState([])
    const [saveAsDraft,setSaveAsDraft] = useState(false)
    const [role,setRole] = useState()
    const [titleList,setTitleList] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")

    const reportAnIssueApi = async(e,saveAsDraft) =>{
        e.preventDefault()
        if(!title){
            setTitleError("Please select title")
        }else if(description.length == 0){
            setDescriptionError("Please enter description")
        }else{
            saveAsDraft==true  ? setSaveAsDraft(true) : setisLoading(true)
        let response = await report_an_issue(title,description,localStorage.role,saveAsDraft)
        if(response.code == 200){
            setDescription("")
            setTitle("")
            setSaveAsDraft(false)
            route.push("/Client/reportAnIssue/ReportAndIssueList")
        }else{
            setError(response.message)
            setSaveAsDraft(false)
        }
    }}
    useEffect(()=>{
        getTitleList()
    },[])
    const getTitleList = async () =>{
        let perPage = 200;
        let page = 1;
        const response = await booking_reason_list(perPage,page)
        if(response.code == 200){
            setTitleList(response.result)
        }
    }
    return (
        <div className={styles.contentWrapper}>
        <div className="container-fuild">
            <div className="row">
                <div className="col-md-9 m-auto">
                    <h3 className="">Report an Issue</h3>
                    <h6 style={{color:"red"}}>{error} </h6>
                    <div className={styles.formArea}>
                        <form>
                            <div class="row">
                            {/* <div className="col-md-12">
                                <ul className={styles.reportPage}>
                                    <li>
                                        <p>VISA Applied Status:</p>
                                        <h6>Applied</h6>
                                    </li>
                                    <li>
                                        <p>Agreement Status:</p>
                                        <h6>Signed</h6>
                                    </li>
                                    <li>
                                        <p>VISA Application Status: </p>
                                        <h6>Pending</h6>
                                    </li>
                                    <li>
                                        <p>Date:</p>
                                        <h6>12 Oct 2021</h6>
                                    </li>
                                </ul>
                                </div> */}
                                <div className="col-md-12">
                                    <div className={`form-group ${styles.fromGroup}`}>
                                        <label>Title<span style={{color:"red"}}>*<span>{!title? titleError :""}</span></span></label>
                                       
                                       <select value={title} onChange={(e) =>{setTitle(e.target.value)}}>
                                        <option value="">Select Reason </option>
                                        {titleList?.map((li)=> <option value={li._id}>{li.title} </option>)}   
                                        </select>
                                     
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className={`form-group ${styles.fromGroup}`}>
                                        <label> Description<span style={{color:"red"}}>*<span>{!description? descriptionError :""}</span></span></label>
                                        <textarea
                                                type_name="text"                      
                                                placeholder_name=""
                                                inputId="description"
                                                value={description}
                                                onChange={(e) =>{setDescription(e.target.value)}}
                                                input_name=""
                                                name="description"
                                            />
                                    </div>
                                </div>
                            </div>

                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className={`col-md-9 ${styles.ButtonGroup}`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                            </div>
                                            <div className="col-md-4">
                                              { saveAsDraft? <button disabled className={styles.SaveBtn} ><> <i class="fa fa-refresh fa-spin"></i> Loading </> </button>:
                                              <button className={styles.SaveBtn} onClick={(e)=>{reportAnIssueApi(e,true)}}>Save as Draft</button>}
                                            </div>
                                             <div className="col-md-4">
                                                {isLoading?<button disabled className={styles.SandBtn} ><> <i class="fa fa-refresh fa-spin"></i>  Loading </>  </button>
                                                :<button className={styles.SandBtn} onClick={(e) =>{reportAnIssueApi(e,false)}} >Save and Next </button>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ReportIssue
