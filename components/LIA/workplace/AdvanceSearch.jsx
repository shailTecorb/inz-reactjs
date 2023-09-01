import React, { useState } from "react";
import InputFiled from "../../Auth/Common/input_filed";
import { advance_search } from "../../helpers/lia_services";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
function AdvanceSearch({ advanceSearch, firstName, setFirstName,error, email, setEmail, dob, setDob, visaType, setVisaType, OpenModal, CloseModal, isOpen }) {

  //const [startDate, setStartDate] = useState(new Date());
  //const [endDate, setEndDate] = useState(new Date());

  return (
    <div style={{display : "inline-block"}}>
      <button
        onClick={OpenModal}
        className="btn btn-secondary"
        style={{
          backgroundColor: "rgb(81 202 200)",
          marginLeft: "20px", border:"1px solid rgb(81 202 200)",
        }}
      >
        Advanced Search 
      </button>

      <ReactModal
        className={`${styles.customeModal} ${styles.customeTemplateModal}  ${styles.customeAccountModal}`}
        isOpen={isOpen}
        style={{ overflowY: "scroll" }}
      >
        <div class={styles.modalHeader}>
          <div class="row mx-0">
            <div class="col-10">
              <h4>Search Here</h4><span style={{color:"red"}}> {error} </span>
            </div>
            <div class="col-2">
              <button className={styles.closeBtn} onClick={CloseModal}>
                <img src="/images/popupcross.svg" />
              </button>
              <br />
            </div>
          </div>
        </div>
        <div class="row mx-0">
          <div class="col-8">
            <div className={styles.genrateLink}>
              <div className={styles.genrateLinkSec}>
                <form>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <h3>Search By Name</h3>
                    <InputFiled
                      class="form-control"
                      name="firstName"
                      size="0"
                      value={firstName}
                      onChange={(e) => { setFirstName(e.target.value) }}
                    />
                  </div>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <h3> Date Of Birth </h3>


                    <DatePicker
                      className="form-control"
                      name="dob"
                      // class_name={isError.dobErrorMsg !== "" && styles.errorMsg}
                      selected={dob ? dob : null}
                      dateFormat="MM/dd/yyyy"
                      // dropdownMode="scroll"
                      maxDate={new Date()}
                      dateFormatCalendar="MMMM"
                      yearDropdownItemNumber={15}
                      scrollableYearDropdown={true}
                      onChange={date => setDob(date)}
                      autoComplete="off"
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      value={dob}
                    />

                  </div>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <h3>Email</h3>
                    <InputFiled
                      type="text"
                      id="content"
                      name="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value) }}
                      placeholder="Write here"
                      className={`form-control ${styles.stepbarInput}`}
                    />
                  </div>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <h3>Visa Name</h3>
                    <InputFiled
                      type="text"
                      name="visaType"
                      value={visaType}
                      placeholder="Visa Type"
                      className={`form-control ${styles.stepbarInput}`}
                      onChange={(e) => { setVisaName(e.target.value) }}
                    // onChange={(e) => {setVisaType((prev) => {return { ...prev, visaType: e.target.value };  }); }}    
                    />
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {/* {console.log( email=='' || firstName=='')} */}
                      <button
                        className={styles.sendBtn}
                        onClick={(event)=>{advanceSearch(event)}}
                        // disabled={firstName == '' || dob == '' || email == '' || visaType == ''}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default AdvanceSearch;

