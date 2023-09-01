import React,{useEffect} from 'react';
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import {business_owner_logout} from "../../helpers/business_owner_service"
import { useRouter } from 'next/router';
const AdminApprovedBW = ({open}) => {
        const route = useRouter()

    const BusinessOwnerLogout = async(e) =>{
        e.preventDefault()
        const response  = await business_owner_logout();
        if(response.code == 200){
            localStorage.clear()
            window.location.href = "/"
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
                    </div>
                </div>
                <div className={styles.genrateLink}>
                    <div className={`${styles.genrateLinkSec} text-center`}>
                        <form>
                            <div class="row">
                                   
                            <h3 class="col-13 text-center mb-2">Thank you for registration. Administrator will approve your account then you can login to continue.</h3>
                                <div class="col-12 text-center">
                                <button onClick={BusinessOwnerLogout} className={styles.sendBtn} style={{float : "unset"}}>
                                   OK
                                </button>
                                </div>
                                </div>
                        </form>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
};

export default AdminApprovedBW;
