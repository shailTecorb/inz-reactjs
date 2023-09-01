import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { IdContext } from "../../MyContext/IdDetailsContext";
import { useRouter } from "next/router";
import { list_of_appointment, appointment_booking_mode } from "../../helpers/business_owner_service";
const AppointmentMode = () => {

    let route = useRouter()
    const [isChecked, setIsChecked] = useState(false);
    const [appointmentlist, setList] = useState([])
    const { visaId } = useContext(IdContext)
    const [visaTypeId, setVisaTypeId] = useState()
    const [error, setError] = useState("")

    useEffect(() => {
        apidata()
    }, [])
    const apidata = async () => {
        let Id = visaId?.filter(item => item.isChecked == true).map((item, index) => {
            return item._id
        })
        const response = await list_of_appointment(Id)
        setVisaTypeId(Id)
        if (response.code == 200) {
            let isAppointmentList = response?.result?.map((item, i) => {
                return ({ ...item, isChecked: false })
            }
            )
            setList(isAppointmentList)
        }
        // if (response.code == 400) {
        //     setNodata(response.message)
        // }
    }

    const dataresult = appointmentlist.reduce(function (acc, current) {
        if (current.isChecked) {
            acc.push(current)
        }
        return acc;
    }, [])
    const upDate = async () => {

        const dataresult = appointmentlist.reduce(function (acc, current) {
            if (current.isChecked) {
                acc.push(current)
            }
            return acc;
        }, [])
        if (dataresult.length > 0) {
            let appointmentId = dataresult.map((li) => li._id);
            let role = localStorage.role
            const response = await appointment_booking_mode(visaTypeId, appointmentId, role);

            if (response.code == 200 && localStorage.role == "liaAgent") {
                window.location.href="/LIA/workingHours"
            }
           
        }
        else{
            setError("Please select appointment booking mode")
        }
    };
  
    const handleChange = (e, index) => {
        const { title, visaTypeId, checked, name } = e.target;
        let filterList = appointmentlist
        if (name === "allSelect") {
            let tempUser = appointmentlist.map(user => { return { ...user, isChecked: checked } })
            setList(tempUser)
            setIsChecked(!isChecked)
            setError("")
        } else {
            let tempUser = appointmentlist.map((user, i) => {
                return ({ ...user, isChecked: i === index ? !user.isChecked : user.isChecked })
            });
            setList(tempUser)
            setError("")
            let filterList = tempUser
            let _checkNumberOfAppointmentSelect = filterList.filter((item)=> item.isChecked)
            console.log(_checkNumberOfAppointmentSelect.length==appointmentlist.length)
            if(_checkNumberOfAppointmentSelect.length==appointmentlist.length){
                console.log("hit")
                setIsChecked(true)
            }else{
                setIsChecked(false)
            }

        }
    }

    let renderData = appointmentlist.map((item, index) => {
        return (
            <div className={`form-group ${styles.fromGroup}`}>
                <div className={styles.selectinputBox}>
                    <input id={index}
                        checked={item?.isChecked}
                        onChange={(e) => handleChange(e, index)}
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
                                <span style={{color:"red",marginLeft:"55px",fontSize:"20px"}}>{error}</span>
                                <div className="row">
                                    <div className={`col-12`}>
                                        <div className={styles.visaStatusDiv}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox1" checked={isChecked} name="allSelect" type="checkbox" onChange={(e) => handleChange(e, null)} />
                                                    <label for="checkbox1" className={styles.checkboxLabel}>Select All Appointment Mode</label>
                                                </div>
                                            </div>
                                            {renderData}

                                        </div>
                                    </div>
                                    <div className={`col-md-12 text-right ${styles.buttonGroup}`}>
                                        <button  onClick={upDate}>Save</button>
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