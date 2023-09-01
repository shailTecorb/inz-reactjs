import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../../styles/query.module.scss"
import { IdContext } from "../../../MyContext/IdDetailsContext";
import { useRouter } from "next/router";
import {  appointment_booking_mode, secondTimeAppointmentList } from "../../../helpers/business_owner_service";
const AppointmentMode = () => {

    let route = useRouter()
    const [isChecked, setIsChecked] = useState(false);
    const [appointmentList, setAppoitmentModeList] = useState([])
    const { visaId } = useContext(IdContext)
    const [visaTypeId, setVisaTypeId] = useState()
    const [error, setError] = useState("")
    const [errorMsg, setErrorMsg] = useState("");
    const [isSelectAll, setIsSelectAll] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        appointmentModeList()
    }, [])

    const appointmentModeList = async () => {
        const resList = await secondTimeAppointmentList();
        if (resList.code == 200) {
            setAppoitmentModeList(resList.result);

            let checkselectAll = resList.result?.filter((item) => item.select);
            if (checkselectAll.length == resList.result?.length) {
                setIsChecked(true);
            } else if (checkselectAll.length == resList.result?.length) {
                setIsChecked(false);
            }
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
       appointmentList?.map((li) => {
            if (li.select) {
                tempData.push(li._id);
            }
        });
        let keyData = {
            appoinmentId: tempData,
            addBy:"liaAgent"
        };
        if (tempData.length !== 0) {
            setIsLoading(true);
            const response = await appointment_booking_mode(keyData);
            if (response.code == 200) {
                localStorage.setItem("selectAppointmentMode", true);
                setIsLoading(false);
                // setIsOpen(true);
            }
            else {
                setErrorMsg(response.message)
                // setIsErrorOpen(true);
                setErrorMsg(response?.message);
                setIsLoading(false);
            }
        }
        else {
            setErrorMsg("Please select at least one appointment mode");

        }

    };
   

    let renderData = appointmentList.map((item, index) => {
        return (
            <div className={`form-group ${styles.fromGroup}`}>
                <div className={styles.selectinputBox}>
                    <input id={index}
                        checked={item?.select}
                        onChange={(e) => onSelectAppointment(item)}
                        name="checkbox" type="checkbox" />
                    <label for={index} className={styles.checkboxLabel}>{item.title}</label>
                </div>
            </div>
        )
    })
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <h3 className="">Appointment Booking Mode </h3>
                            <div className={styles.visaStatus}>
                                <span style={{ color: "red", marginLeft: "55px", fontSize: "20px" }}>{error}</span>
                                <div className="row">
                                    <div className={`col-12`}>
                                        <div className={styles.visaStatusDiv}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox1" checked={isChecked} name="allSelect" type="checkbox" onChange={(e) => onSelectAll(e, null)} />
                                                    <label for="checkbox1" className={styles.checkboxLabel}>Select All Appointment Mode</label>
                                                </div>
                                            </div>
                                            {renderData}
                                        </div>
                                    </div>
                                    <div className={`col-md-12 text-right ${styles.buttonGroup}`}>
                                        <button
                                            desabled={isLoading}
                                            onClick={addSubmitAppointment}
                                            className={styles.SandBtn}
                                        >
                                            {isLoading && (<i className="fa fa-spinner fa-spin" style={{ marginRight: "5px" }} />)}

                                            {isLoading && <span>Wait</span>}
                                            {!isLoading && <span>Update</span>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AppointmentMode;