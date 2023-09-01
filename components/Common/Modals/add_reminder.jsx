import { Fragment, useState } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { add_reminder_service } from "../../helpers/lia_services";


const AddReminder = ({ open, openModal, closeModal, }) => {
const addReminder =()=>{
    const response = add_reminder_service()
}
    return (
        <Fragment>
            <button onClick={openModal} className={styles.SaveBtn}>Add VISA Type</button>
            <ReactModal
                className={`${styles.customeModal} ${styles.customeMoneyModal}  ${styles.customeAccountModal}`}
                isOpen={true}
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
                                <div className="row">
                                    <div className="col-6">
                                        <label>Select Date</label>
                                        <DatePicker
                                            className="form-control"
                                            name="licenseExpiry"
                                            // selected={addData.licenseExpiry ? new Date(addData.licenseExpiry) : null}
                                            dateFormat="MM/dd/yyyy"
                                            dropdownMode="scroll"
                                            minDate={new Date()}
                                            dateFormatCalendar="MMMM"
                                            yearDropdownItemNumber={15}
                                            scrollableYearDropdown={true}
                                            // onChange={date => handleDobResponse(date)}
                                            autoComplete="off"
                                        // value={addData.licenseExpiry}

                                        />
                                        <img src="/images/calendar.svg" alt="date" />
                                    </div>
                                    <div className="col-6">
                                        <label>Select Time</label>
                                        <DatePicker
                                            className="form-control"
                                            name="licenseExpiry"
                                            // selected={addData.licenseExpiry ? new Date(addData.licenseExpiry) : null}
                                            dateFormat="MM/dd/yyyy"
                                            dropdownMode="scroll"
                                            minDate={new Date()}
                                            dateFormatCalendar="MMMM"
                                            yearDropdownItemNumber={15}
                                            scrollableYearDropdown={true}
                                            // onChange={date => handleDobResponse(date)}
                                            autoComplete="off"
                                        // value={addData.licenseExpiry}

                                        />
                                        <img src="/images/calendar.svg" alt="email" />
                                    </div>
                                </div>
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Select Client (Optional)</h3>
                                <input type="text" id="contact" name="contact"
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h4> Task Details </h4>
                                <h3>Title</h3>
                                <input type="text" id="contact" name="contact"
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Description</h3>
                                <textarea   name="contact"
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div class="row"><div class="col-12">
                                <button onClick={addReminder} className={styles.sendBtn}>
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

export default AddReminder;