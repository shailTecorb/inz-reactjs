import { Fragment, useState, useEffect } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import moment from 'moment';
import { send_email_to_emmitech ,list_of_client_of_particular_lia,all_template_list} from "../../helpers/lia_services";
const EmailToImmitech = ({setIsOpenEmailToImmitech,isOpenEmailToImitech}) => {
    const[allTemplate , setAllTemplate] = useState([])
    const [allClient , setAllClient] = useState([])
    const [subject, setSubject] = useState("")
    const [body , setBody] = useState("")
    const [template , setTemplate] = useState("")
    const [client, setClient] = useState("")
    const [errMsg , setErrMsg] = useState("")
    const [isLoading , SetIsLoading] = useState(false)

    useEffect(()=>{
        getAllClient()
        getAllTemplate()
    },[isOpenEmailToImitech])
    const getAllTemplate = async () =>{
        let perPage = 100;
        let page = 1;
        const response = await all_template_list(perPage, page, "liaAgent")
        if(response.code == 200){
            setAllTemplate(response.result)
        }
    }
    const getAllClient = async () =>{
        let perPage = 100;
        let page = 1;
        const response = await list_of_client_of_particular_lia(perPage, page)
        if(response.code == 200){
            setAllClient(response.result)
        }
    }
    const handleChange = (id) =>{
        let newArr = allTemplate?.find((data)=>data._id == id)
        setSubject(newArr.tittle)
        setBody(newArr.content)
        setTemplate(id)
        setErrMsg("")
      } 
      
      const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("subject",subject)
        formData.append("selectTemplateId",template)
        formData.append("clientId",client)
      
        if(!client){
          setErrMsg("Please Select Client")
        }else if(!template){
          setErrMsg("Please Select Template")
        }else if(!subject){
            setErrMsg("Please Enter Subject")
          }else if(!body){
          setErrMsg("Please Enter Body")
        }else{
          SetIsLoading(true)
          const response = await send_email_to_emmitech(formData)
          SetIsLoading(false)
          if(response.code == 200){
            setClient("")
            setTemplate("")
            setBody("")
            setSubject("")
              setErrMsg("")

            setIsOpenEmailToImmitech(false)
          }else{
            setErrMsg(response.message)
          }
        }
      }
    return (
        <Fragment>
            <button onClick={()=>{setIsOpenEmailToImmitech(true)}} className={`${styles.SaveBtn } "px-0 mx-0 w-100"`}>Send Email TO ImmiTech</button>
            <ReactModal
                className={`${styles.customeModal} ${styles.customeMoneyModal}  ${styles.customeAccountModal}`}
                isOpen={isOpenEmailToImitech}
                style={
                    { overflowY: "scroll" }}
            >
                <div class={styles.modalHeader} >
                    <div class="row">
                        <div class="col-10">
                            <h4>Send Email To ImmiTech</h4><span style={{ color: "red" }}> {errMsg} </span>
                        </div>
                        <div className="col-2">
                            <button className={styles.closeBtn} onClick={()=>{setIsOpenEmailToImmitech(false)}}><img src="/images/popupcross.svg" /></button><br />
                        </div>
                    </div>
                </div>
                <div className={styles.genrateLink}>
                    <div className={styles.genrateLinkSec}>
                        <form>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <div className="row">
                                    <div className="col-12">
                                        <label>Choose Client<span style={{ color:"red" }}>*</span></label>
                                       <select value={client} onChange={(e)=>{setClient(e.target.value);setErrMsg("")}}>
                                        <option> </option>
                                        {allClient?.map((li,index)=><option key={index} value={li._id}>{li.fullName}</option>)}
                                       </select>
                                   </div>   
                                </div>
                                    <div className="row">
                                    <div className="col-12">
                                        <label> Template<span style={{ color:"red" }}>*</span></label>
                                      <select value={template} onChange={(e)=>{handleChange(e.target.value);setErrMsg("")}}>
                                        <option> </option>
                                        {allTemplate?.map((li,index)=>{return <option  key={index} value={li._id}>{li.templateType}</option>})}
                                      </select>
                                    </div>
                                </div>
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Subject<span style={{ color:"red" }}>*</span></h3>
                                <input type="text" id="contact"  name="contact" value={subject} onChange={(e)=>{setSubject(e.target.value);setErrMsg("")}}
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Body<span style={{ color:"red" }}>*</span></h3>
                                <textarea name="contact" value={body} 
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div className="row">
                            <div class="col-12">
                            <button disabled={isLoading} className={styles.sendBtn} onClick={(e)=>{handleSubmit(e)}}>
                                   {isLoading ? 
                           <i
                            className="fa fa-spinner fa-spin"
                            style={{ marginRight: "5px" }}
                          > Wait </i> : "Save"}
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>
        </Fragment>
    )
}
export default EmailToImmitech;









