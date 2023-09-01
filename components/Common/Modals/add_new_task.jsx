import { Fragment, useState, useEffect } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { lia_workplace_add_new_task } from "../../helpers/lia_services";
import { addFollowersService } from "../../helpers/business_owner_service";

import Select from 'react-select';

const AddNewTask = ({ open, openModal, closeModal, isTaskModalOpen,taskDetails }) => {
    const [date, setDate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [error, setError] = useState("")
    const [followers, setfollowers] = useState([]);
    const [followerId,setFollowerId] = useState("")
    const [followeList, setFolloweList] = useState()
    const add_new_task = async (e) => {
        e.preventDefault()
        let DATE = moment(date).format("L")
        let StartTime = moment(startTime).format("hh:mm A")
        let EndTime = moment(endTime).format("hh:mm A")
        if (!date) {
            setError("Please enter date")
        } else if (!startTime) {
            setError("Please enter start time")
        } else if (!endTime) {
            setError("Please enter end time")
        } else if (!title) {
            setError("Please enter title")
        } else if (!description) {
            setError("Please enter description")
        } else {
            const response = await lia_workplace_add_new_task(DATE, StartTime, EndTime, title, description,followerId)
            if (response.code == 200) {
                closeModal()
                window.location.reload()
            }
        }
    }
    const handleChange = (item) => {
        let newData = item.map((data) => data._id)
        setFollowerId(newData)
    }
    useEffect(async () => {
        const response = await addFollowersService("liaAgent")
        if (response.code == 200) {
            let labelData = []
            const newData = response.result.map((data) => labelData.push({ ...data, label: data.fullName, value: data._id }))
            setfollowers([...labelData])
        }

    }, [])

    useEffect(() => {
        if (taskDetails) {
          getDetails(taskDetails)
        }
      }, [taskDetails])

      console.log(taskDetails,"taskDetails");
    
      const getDetails = (data) => {
        let newDate = new Date(data.date)
        // let StartTime = data.startTime ? data.startTime : new Date()
        // let EndTime = taskDetails?.dueTime
        let Title = taskDetails?.tittle
        let Des = taskDetails?.description
        setDate(newDate);
        // setStartTime(StartTime);
        // setEndTime(EndTime);
        setTitle(Title);
        setDescription(Des);
        let labelData = []
        data?.taskFollowers?.map((item)=>labelData.push({...item,fullName:item.fullName,label:item.fullName,value:item._id,_id:item._id}))
        setFolloweList(labelData)
       
        let newData = data?.taskFollowers?.map((it) => it._id)
        setFollowerId(newData)
      }
    return (
        <Fragment>
            <button onClick={openModal} className={styles.SaveBtn}>+ Add Task</button>
            <ReactModal
                className={`${styles.customeModal} ${styles.customeMoneyModal}  ${styles.customeAccountModal}`}
                isOpen={isTaskModalOpen}
                style={
                    { overflowY: "scroll" }}
            >
                <div class={styles.modalHeader} >
                    <div class="row">
                        <div class="col-10">
                            <h4>Add New Task</h4><span style={{ color: "red" }}> {error} </span>
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
                                            selected={date}
                                            dateFormat="MM/dd/yyyy"
                                            dropdownMode="scroll"
                                            minDate={new Date()}
                                            dateFormatCalendar="MMMM"
                                            yearDropdownItemNumber={15}
                                            scrollableYearDropdown={true}
                                            onChange={date => setDate(date)}
                                            autoComplete="off"
                                            value={date}
                                        />
                                        <img src="/images/calendar.svg" alt="date" />
                                    </div>
                                    <div className="col-6">
                                        <label> Start Time</label>
                                        <DatePicker
                                            selected={startTime}
                                            onChange={(time) => setStartTime(time)}
                                            showTimeSelect
                                            name="startDate"
                                            input_name="startDate"
                                            value={startTime}
                                            showTimeSelectOnly
                                            timeIntervals={15}
                                            timeFormat="hh : mm aa"
                                            timeCaption="Time"
                                            dateFormat="h:mm aa"
                                        />
                                        <img src="/images/calendar.svg" alt="email" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label> End Time</label>
                                    <DatePicker
                                        selected={endTime}
                                        onChange={(time) => setEndTime(time)}
                                        showTimeSelect
                                        name="endTime"
                                        input_name="endTime"
                                        value={endTime}
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeFormat="hh : mm aa"
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                    <img src="/images/calendar.svg" alt="email" />
                                </div>
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h5> Task Details </h5>
                                <h3>Title</h3>
                                <input type="text" id="contact" onChange={(e) => { setTitle(e.target.value) }} value={title} name="contact"
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Description</h3>
                                <textarea name="contact" onChange={(e) => { setDescription(e.target.value) }} value={description}
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Add Followers</h3>
                                <Select
                                    options={followers}
                                    defaultValue={followeList}
                                    isMulti={true}
                                    onChange={(e) => { handleChange(e) }}

                                />
                            </div>
                            <div class="row"><div class="col-12">
                                <button className={styles.sendBtn} onClick={add_new_task}>
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
export default AddNewTask;









