import InputFiled from "../../../Auth/Common/input_filed"
import styles from "../../../../styles/form.module.scss"
import { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { add_working_hour, getLiaAgent, working_hour_slot_timimg } from '../../../helpers/lia_services'
import { useRouter } from 'next/router';

const WorkingHours = () => {
    const route = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [isAllSelected, setIsAllSelected] = useState(true)
    const [isAllTimeBlock, setIsAllTimeBlock] = useState(false)
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [isClosed, setIsClosed] = useState(false)
    const [checkBox, setCheckBox] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
    })
    const [blockDay, setBlockDay] = useState("")
    const [allWeeks, setAllWeeks] = useState([])
    const [slotTimes, setSlotTimes] = useState([])
    const [startMdn, setStartMdn] = useState("")
    const [endMdn, setEndMdn] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [appointmentTime, setAppointmentTime] = useState("")
    const [selectedData, setSelectedData] = useState([])
    const [liaData, setLiaData] = useState("")

    const getSlotOfTime = async (day, id) => {
        const response = await working_hour_slot_timimg(day, id)
        if (response.code == 200) {
            const workingTimeSlot = response?.result?.map((step, index) => {
                let timeSlot = {};
                timeSlot = step;
                timeSlot = { timeSlot, status: false, id: index + 1 }
                return timeSlot
            });
            setSlotTimes(workingTimeSlot)
        }
    }
    const onChangeWeekes = (data) => {
        for (let i = 0; i < allWeeks.length; i++) {
            if (allWeeks[i] == data) {
                setBlockDay(data)
                setErrorMsg("")
                setIsClosed(false)
                getSlotOfTime(data,liaData._id)
                break;
            } else {
                setErrorMsg("This Is Not Your Login Day")
                setBlockDay(data)
                setIsClosed(true)
            }
        }
    }
    useEffect(() => {
        getActiveDaySelectedByBW()
    }, [])

    const getActiveDaySelectedByBW = async () => {
        const response = await getLiaAgent()
        if (response.code == 200) {
            setAllWeeks(response.result?.activeDays)
            setLiaData(response.result)
            getSlotOfTime(response.result?.activeDays[0], response.result?._id)
            let Stime = response.result.startTime
            let Etime = response.result.endTime
            let StrMdn = Stime.slice(Stime.length - 2, Stime.length);
            let EndMdn = Etime.slice(Etime.length - 2, Etime.length);
            let _starttime = Stime.replace('AM', '')
            let _endtime = Etime.replace('AM', '')
            setStartTime(_starttime.replace('PM', ''))
            setEndTime(_endtime.replace('PM', ''))
            setStartMdn(StrMdn)
            setEndMdn(EndMdn)
            setAppointmentTime(response.result.appointmentTime)
            setBlockDay(response.result?.activeDays && response.result?.activeDays[0])

        }
    }
    const addWorkingHour = async () => {
        setIsLoading(true)
        const response = await add_working_hour(blockDay, selectedData)
        if (response.code == 200) {
            route.push("/LIA/workplace")
            setIsChecked(true)
            setIsLoading(false)
        } else {
            setIsLoading(false)
            setErrorMsg(response.message)
        }

    }
    const onCheckBox = (item) => {

        let checkdata = slotTimes;
        let data = [];
        for (let i = 0; i < checkdata.length; i++) {
            if (checkdata[i].id == item.id) {
                checkdata[i].status = !checkdata[i].status
            }
        }
        setSlotTimes([...checkdata])
        for (let i = 0; i < checkdata.length; i++) {
            if (checkdata[i].status == true) {
                data.push(checkdata[i].timeSlot)
            }
        }
        setSelectedData(data)
        if (slotTimes.length == data.length) {
            setIsAllTimeBlock(true)
        } else if (slotTimes.length !== data.length) {
            setIsAllTimeBlock(false)
        }

    }

    const onSelectAllBlocktime = (e) => {
        setIsAllSelected(!isAllSelected)
        let allData = slotTimes;
        allData.map((item, index) => {
            item.status = isAllSelected
        })

        setIsAllTimeBlock(isAllSelected)
        setSlotTimes([...allData])
        let tempdata = slotTimes?.reduce((acc, curr) => {
            if (curr.status) {
                acc.push(curr.timeSlot)
            }
            return acc;
        }, [])
        setSelectedData(tempdata)
    }

    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <h3 className="">My Working Hours</h3><span style={{ color: "red" }}> {errorMsg} </span>
                        <div className={styles.formArea}>
                            <div className="row" >
                                <div className="col-md-3">

                                    <div className={`${styles.workingHoursSec} `}>
                                        <button className={`${styles.weekButton} ${blockDay == "Monday" ? styles.active : ""} mt-0`} onClick={() => { onChangeWeekes("Monday") }}>Monday</button>
                                        <button className={`${styles.weekButton} ${blockDay == "Tuesday" ? styles.active : ""}`} onClick={() => { onChangeWeekes("Tuesday") }} >Tuesday</button>
                                        <button className={`${styles.weekButton} ${blockDay == "Wednesday" ? styles.active : ""}`} onClick={() => { onChangeWeekes("Wednesday") }}>Wednesday</button>
                                        <button className={`${styles.weekButton} ${blockDay == "Thursday" ? styles.active : ""}`} onClick={() => { onChangeWeekes("Thursday") }}>Thursday</button>
                                        <button className={`${styles.weekButton} ${blockDay == "Friday" ? styles.active : ""}`} onClick={() => { onChangeWeekes("Friday") }}>Friday</button>
                                        <button className={`${styles.weekButton} ${blockDay == "Saturday" ? styles.active : ""}`} onClick={() => { onChangeWeekes("Saturday") }}>Saturday</button>
                                        <button className={`${styles.weekButton} ${blockDay == "Sunday" ? styles.active : ""}`} onClick={() => { onChangeWeekes("Sunday") }}>Sunday</button> </div>
                                </div >
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Starting from</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <InputFiled
                                                            disabled
                                                            type="text"
                                                            value={isClosed ? "Closed" : startTime}
                                                        />

                                                    </div>
                                                    <div className="col-6">
                                                        <select disabled value={startMdn} name="startMe" size="0">
                                                            {isClosed ?

                                                                <option value="Closed">Closed</option>
                                                                : <>
                                                                    <option value="AM">AM</option>
                                                                    <option value="PM">PM</option>

                                                                </>}

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Till</label>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <InputFiled
                                                            disabled
                                                            type_name="text"
                                                            value={isClosed ? "Closed" : endTime}
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select disabled value={endMdn} name="endMe" size="0">
                                                            {isClosed ?

                                                                <option>Closed</option>
                                                                : <>
                                                                    <option value="AM">AM</option>
                                                                    <option value="PM">PM</option>

                                                                </>}
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {!isClosed ?
                                        <>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Appointment Slots Timing</label>

                                                        <InputFiled
                                                            type_name="text"
                                                            placeholder_name="30 min "
                                                            inputId="Name"
                                                            input_name="name"
                                                            value={isClosed ? "Closed " : appointmentTime + " " + "minute"}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <h3 className="col-12 mb-12 mt-2">Blocked Time</h3>

                                                {slotTimes.length > 0 ? <div className="col-md-3 px-1">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <div className={styles.CheckBox}>
                                                            <input id="selectAllBlockTime"
                                                                checked={isAllTimeBlock}
                                                                onChange={(e) => { onSelectAllBlocktime(e) }}
                                                                name="selectAllBlockTime" type="checkbox" />
                                                            <label for="selectAllBlockTime" className={styles.checkboxLabel} style={{ color: "#0c101a" }} >Select All </label>
                                                        </div>

                                                    </div>
                                                </div> : <h1 className={`col-md-8 ml-auto ${styles.ButtonGroup}`}> <i class="fa fa-refresh fa-spin"></i>  </h1>}
                                            </div>

                                            <div className="row">

                                                {slotTimes?.map((item, index) => {
                                                    return (
                                                        <div className="col-md-4 col-lg-3 col-sm-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <div className={styles.CheckBox}>
                                                                    <input id={index}
                                                                        name="checkbox"
                                                                        type="checkbox"
                                                                        checked={item.status}

                                                                        onChange={(e) => { onCheckBox(item) }}
                                                                    />
                                                                    <label for={index} className={styles.checkboxLabel}>{item.timeSlot}</label>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    )

                                                })
                                                }
                                            </div>
                                        </> : ""}
                                    <div className="row">
                                        <div className={`col-md-3 ml-auto ${styles.ButtonGroup}`}>
                                            {isLoading ? <button disabled className={styles.SandBtn} >  <> <i class="fa fa-refresh fa-spin"></i>  Loading </></button> :
                                                <button className={styles.SandBtn} onClick={addWorkingHour}>Submit</button>}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkingHours