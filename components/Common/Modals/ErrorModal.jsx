import React, { useEffect } from 'react';
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import { business_owner_logout } from "../../helpers/business_owner_service"
import { useRouter } from 'next/router';
const ErrorModal = ({open, closeModal, message,pathname}) => {
    const route = useRouter()
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
                            <div class="row text-center">

                                <h3 class="col-12 text-center mb-2">Error!!</h3>
                                <p>
                                   {message}</p>
                                <div class="col-12 text-center">
                                    <button className={styles.sendBtn} onClick={closeModal} style={{ float: "unset" }}>
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

export default ErrorModal;
