import { Fragment, useState } from "react";
import ReactModal from "react-modal";
import { genrate_link } from "../../helpers/client_services";
import styles from "../../../styles/customeModal.module.scss"

const SendAgreement = ({ styles, open, openModal, closeModal, email }) => {

    return (
        <Fragment>
            <button onClick={openModal} className={styles.SaveBtn}>Generate Link</button>
            <ReactModal
                className={`${styles.customeModal} ${styles.customeMoneyModal}  ${styles.customeAccountModal}`}
                isOpen={open}
                style={
                    { overflowY: "scroll" }}
            >
                <div class={styles.modalHeader} >
                    <div class="row">
                        <div class="col-10">
                            <h4>Send Agreement</h4>
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
                                <h3>Template Type</h3>
                                <select
                                    class="form-control"
                                    name="maritalStatus"
                                    size="0">
                                    <option value="01">Mr.</option>
                                    <option value="02">Mrs.</option>
                                </select>
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Template Title</h3>
                                <input type="text" id="contact" name="contact"
                                    placeholder="Plase enter Mobile Number"
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div class="row"><div class="col-12">
                                <button className={styles.sendBtn}>
                                    Save
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

export default SendAgreement;