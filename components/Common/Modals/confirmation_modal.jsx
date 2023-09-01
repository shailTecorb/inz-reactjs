import React, { useEffect } from 'react';
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import { business_owner_logout } from "../../helpers/business_owner_service"
import { useRouter } from 'next/router';
const ConfirmationModal = ({ open,isLoading, closeModal, handleClick, }) => {
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
                            <div className='row text-center'>
                            <h3 class="col-12 text-center mb-2">Are you sure you want to make a duplicate tempate?</h3>
                                {/* <p className="col-12 text-center mb-2">
                                    Are You Sure ?</p> */}
                            </div>
                            <div class="row text-center mt-2">
                                <div class="col-6 text-center">
                                    <button className={styles.sendBtn} onClick={(e)=>{handleClick(e);e.preventDefault()}} style={{ float: "left" }}>
                                    {isLoading && (
                                          <i
                                            className="fa fa-spinner fa-spin"
                                            style={{ marginRight: "5px" }}
                                          />
                                        )}
                                        {isLoading && <span>Wait</span>}
                                        {!isLoading && <span>Yes</span>}
                                    </button>
                                </div>
                                <div class="col-6 text-center">
                                    <button className={styles.sendBtn} onClick={closeModal} style={{ float: "right" }}>
                                        No
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

export default ConfirmationModal;
