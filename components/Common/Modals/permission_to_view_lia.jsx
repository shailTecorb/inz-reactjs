import React from 'react'
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import {useRouter} from "next/router"
import {permission_to_view_lia} from "../../helpers/business_owner_service"
const PermissionNotification = ({open,setOpen,setChat,closeModal}) => {

    const router = useRouter()
    const handleChange = async(status) =>{
        // e.preventDefault()
        const response = await permission_to_view_lia(status)
        if(response.code == 200){
        setChat("")
        setOpen(false)
        }
    }
    return (
        <div>
             <ReactModal
                className={`${styles.customeModal} ${styles.customeAccountModal}`}
                isOpen={open}
                style={
                    { overflowY: "scroll" }}
            >
                  <div class={styles.modalHeader} >
                    <div class="row">
                        <div class="col-10">
                        </div>
                        {/* <div class="col-2">
                            <button onClick={closeModal} className={styles.closeBtn}><img src="/images/popupcross.svg" /></button><br />
                        </div> */}
                    </div>
                </div>
                <div className={styles.genrateLink}>
                    <div className={`${styles.genrateLinkSec} text-center`}>
                        <form>
                       
                            <div class="row">
                                   
                            <h3 class="col-11 text-center mb-2"> Admin want to view Details of LIA </h3>
                                <div class="col-12 text-center">
                                <button onClick={()=>{handleChange(false)}} className={styles.sendBtn} style={{float : "unset"}}>
                                   Cancle
                                </button>
                               <span style={{marginLeft:"50px"}}>
                                <button  onClick={()=>{handleChange(true)}} className={styles.sendBtn} style={{float : "unset"}}>
                                    Allow
                                </button></span>
                                </div> 
                                </div>
                        </form>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}

export default PermissionNotification
