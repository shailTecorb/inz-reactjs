import InputFiled from "../../../Auth/Common/input_filed";
import React, { useState, useEffect } from "react";
import {
  businesOwnerAppointmentModeList,
  businesOwnerUpdateAppointmentModeList,
  adminAppointmentModeList,
} from "../../../helpers/business_owner_service";
import { useRouter } from "next/router";
import SuccessModal from "../../../Common/Modals/success_modal";
import ErrorModal from "../../../Common/Modals/ErrorModal";
const AppointmentMode = ({ styles, appointment_tab, activeTab, active }) => {
  const [appointmentList, setAppoitmentModeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectAll, setIsSelectAll] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  let router = useRouter();
  const closeModal = () => {
    setIsOpen(false);
    router.push("/busines/owner/dashboard");
  };
  const closeErrorModal = () => {
    setIsErrorOpen(false);
  };
  let allAppointmentList = appointmentList?.map((item, index) => {
    return (
      <div className={`form-group ${styles.fromGroup}`}>
        <div className={styles.CheckBox}>
          <input
            id={index}
            name="checkbox"
            type="checkbox"
            checked={item.select}
            value={item._id}
            onChange={(e) => {
              onSelectAppointment(item);
            }}
          />
          <label for={index} className={styles.checkboxLabel}>
            {item.title}
          </label>
        </div>
      </div>
    );
  });
  // ******************************** GET ALL APPOINTMENT MODE ***********************************************************
  useEffect(() => {
    appointmentModeList();
  }, []);
  const appointmentModeList = async () => {
    if (String(localStorage.selectAppointmentMode) == "true") {
      const resList = await businesOwnerAppointmentModeList();
      if (resList.code == 200) {
        setAppoitmentModeList(resList.result);

        let checkselectAll = resList.result?.filter((item) => item.select);
        if (checkselectAll.length == resList.result?.length) {
          setIsChecked(true);
        } else if (checkselectAll.length == resList.result?.length) {
          setIsChecked(false);
        }
      }
    } else if (String(localStorage.selectAppointmentMode) == "false") {
      const resList = await adminAppointmentModeList();
      if (resList.code == 200) {
        let newArr = resList.result?.map((item) => {
          return { ...item, select: false };
        });
        setAppoitmentModeList(newArr);

        let checkselectAll = resList.result?.filter((item) => item.select);
        if (checkselectAll.length == resList.result?.length) {
          setIsChecked(true);
        } else if (checkselectAll.length == resList.result?.length) {
          setIsChecked(false);
        }
      }
    } else {
    }
  };
  // *********************** ON CHANGE FUNCTION FOR SELECT VISA TYPE****************************************************************
  const onSelectAppointment = async (item) => {
    let newArr = appointmentList?.reduce((acc, curr) => {
      if (curr._id == item._id) {
        curr.select = !curr.select;
      }
      acc.push(curr);

      return acc;
    }, []);
    setAppoitmentModeList(newArr);
    setErrorMsg("")
    let selectCheck = newArr.reduce((acc, curr) => {
      if (curr.select) {
        acc.push(curr);
      }
      return acc;
    }, []);

    if (selectCheck.length !== appointmentList.length) {
      setIsChecked(false);
    } else if (selectCheck.length == appointmentList.length) {
      setIsChecked(true);
    }
  };
  //*********************************************SELECT ALL FUNCTION ********************************************************** */
  const onSelectAll = (e) => {
    setIsSelectAll(!isSelectAll);
    let allData = appointmentList.map((item) => {
      return { ...item, select: isSelectAll };
    });
    setAppoitmentModeList(allData);
    setIsChecked(isSelectAll);
    setErrorMsg("")
  };
  // ************************************ON SUBMIT FUNCTION *******************************************************
  
  const addSubmitAppointment = async () => {
    let tempData = [];
    let selectedAppointment = appointmentList?.map((li) => {
      if (li.select) {
        tempData.push(li._id);
      }
    });
    let keyData = {
      appointmentMode: tempData,
    };
    if(tempData.length !== 0){
    setIsLoading(true);
      const response = await businesOwnerUpdateAppointmentModeList(keyData);
      if (response.code == 200) {
        localStorage.setItem("selectAppointmentMode", true);
        setIsLoading(false);
        setIsOpen(true);
      }
      else{
          setErrorMsg(response.message)
          setIsErrorOpen(true);
          setErrorMsg(response?.message);
          setIsLoading(false);
      }
    }
    else{
      setErrorMsg("Please select at least one appointment mode");

    }
    
  };
  return (
    <div
      className={`tab-pane fade shadow rounded ${
        active ? "show active " : ""
      } `}
      id={activeTab}
      role="tabpanel"
      aria-labelledby="v-pills-appointment-tab"
    >
      <div className={styles.rightPageDetail}>
        <div className={styles.rightBox}>
          <div className="col-md-12 m-auto">
            <div className={styles.visaStatus}>
              <div className="row">
                <div className={`col-12`}>
                  <div className={styles.visaStatusDiv}>
              <h6 style={{ color: "red" }}>{errorMsg} </h6>

                    <p>Select multiple if required</p>
                    {allAppointmentList.length > 0 ? (
                      <div className={`form-group ${styles.fromGroup}`}>
                        <div className={styles.CheckBox}>
                          <input
                            id="allselect"
                            name="allselect"
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              onSelectAll(e);
                            }}
                          />
                          <label
                            for="allselect"
                            className={styles.checkboxLabel}
                          >
                            Select All
                          </label>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {allAppointmentList}
                  </div>
                </div>

                <div className={`col-md-12 text-right ${styles.buttonGroup}`}>
                  <button
                    desabled={isLoading}
                    onClick={addSubmitAppointment}
                    className={styles.SandBtn}
                  >
                   {isLoading && (<i className="fa fa-spinner fa-spin"  style={{ marginRight: "5px" }}/>)}
                      
                    {isLoading && <span>Wait</span>}
                    {!isLoading && <span>Update</span>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <SuccessModal
          open={isOpen}
          closeModal={closeModal}
          message="Appointment updated Successfully"
        />
      )}
      {isErrorOpen && (
        <ErrorModal
          open={isErrorOpen}
          closeModal={closeErrorModal}
          message={errorMsg}
        />
      )}
    </div>
  );
};
export default AppointmentMode;
