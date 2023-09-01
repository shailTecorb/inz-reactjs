
import { Fragment, useState, useEffect, createContext } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import {visa_status_notification_update , visa_status_listing_api} from "../../helpers/business_owner_service"
const VisaStatusModal = ({  email,className,closeModal,open, id, title,setTitle,description,setDescription,role }) => {
   

    const [ visaList, setVisaList] = useState()
    const [status, setStatus] = useState()
    // const [title, setTitle] = useState()
    // const [description, setDescription] = useState()
    console.log(id)
    const updateStatus = async (event) =>{
            event.preventDefault()    
        let response = await visa_status_notification_update(title,status,description,role,id)
        if(response.code == 200 ){
            closeModal()
            
        }
    }
   

    useEffect(() =>{
        visaStatusList()
    },[open])

    const visaStatusList = async () =>{
        let response = await visa_status_listing_api(id)
        if(response.code == 200 ){
            setVisaList(response.result)
            console.log(response)
        }
    }

        console.log(role)
    
     let list =  visaList?.map((item, i) => {return <option key={i} value={item.visaStatus}>{item.visaStatus} </option> })

         console.log(list)
    return (
        <Fragment>
            {/* <button onClick={openModal} className={className}>Update</button> */}
            <ReactModal
                className={`${styles.customeModal} ${styles.customeMoneyModal}  ${styles.customeAccountModal}`}
                isOpen={open}
                style={
                    { overflowY: "scroll" }}
            >
                <div class={styles.modalHeader} >
                    <div class="row">
                        <div class="col-10">
                            <h4>VISA Status Notification</h4>
                        </div>
                        <div class="col-2">
                            <button className={styles.closeBtn} onClick={closeModal}><img src="/images/popupcross.svg" /></button><br />
                        </div>
                    </div>
                </div>
                <div className={styles.genrateLink}>
                    <div className={styles.genrateLinkSec}>
                        <form>
                        <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Title</h3>
                                <input type="text" id="contact" name="contact"
                                    placeholder="Title"
                                    className={`form-control ${styles.stepbarInput}`}
                                    value={title}
                                    onChange={(e) =>{setTitle(e.target.value)}}                                />
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Visa Status</h3>

                            
                                <select
                                    class="form-control"
                                    name="maritalStatus"
                                    size="0"
                                    onChange={(e) =>{setStatus(e.target.value)}}
                                    >
                                 
                                  {list}
                                </select>
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Description</h3>
                                <textarea type="text" id="contact" name="contact"
                                    placeholder=""
                                    className={`form-control ${styles.stepbarInput}`}
                                    value={description}
                                    onChange={(e) =>{setDescription(e.target.value)}}
                                />
                            </div>
                            <div class="row"><div class="col-12">
                                <button className={styles.sendBtn} onClick={updateStatus} >
                                Submit
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

export default VisaStatusModal;