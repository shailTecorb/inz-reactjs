import React, { Fragment, useState, useEffect, useCallback } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import Select from 'react-select';

import { addFollowersService, addTaskDashboardBO, update_task_api } from "../../helpers/business_owner_service";
const AddNewTaskModal = ({
  open,
  openModal,
  closeModal,
  isTaskModalOpen,
  dashboarddetails,
  setSelectedDate,
  taskDetails
}) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [followers, setfollowers] = useState([]);
  const [followeList,setFolloweList] = useState([])
  const [followersData, setFollowersData] = useState({
    page: 1,
    perPage: 12,
    search: "",
    searchBy: "",
    id: ""
  })
  const clearFields = () => {
    setDate("");
    setStartTime("");
    setEndTime("");
    setTitle("");
    setDescription("");
    setError("");

  };

  useEffect(async () => {
    const response = await addFollowersService()
    if (response.code == 200) {
      let labelData = []
      const newData = response.result.map((data) => labelData.push({ ...data, label: data.fullName, value: data._id }))
      setfollowers([...labelData])
    }

  }, [])
  const add_new_task = async (e) => {
    e.preventDefault();
    let DATE = moment(date).format("L");
    let StartTime = moment(startTime).format("hh:mm A");
    let EndTime = moment(endTime).format("hh:mm A");
    let businessId = localStorage.BoId;
    let data = {
      date: DATE,
      startTime: StartTime,
      dueTime: EndTime,
      tittle: title,
      description: description,
      businessId,
      taskFollowers: followersData.id,
      taskId:taskDetails._id ? taskDetails._id : null
    };

    if (businessId) {
      if (!date) {
        setError("Please enter date");
      } else if (!startTime) {
        setError("Please enter start time");
      } else if (!endTime) {
        setError("Please enter end time");
      } else if (!title) {
        setError("Please enter title");
      } else if (!description) {
        setError("Please enter description");
        // } else if (!followersData.id) {
        //   setError("Please select followes");
      } else {
        setIsLoading(true);
        if (taskDetails.length !== 0) {
          const response = await update_task_api(data);
          if (response.code == 200) {
            dashboarddetails(date);
            setSelectedDate(date);
            setIsLoading(false);
            closeModal();
            clearFields();

          } else {
            setError(response.message);
            setIsLoading(false);
          }
        } else {
          const response = await addTaskDashboardBO(data);
          if (response.code == 200) {
            dashboarddetails(date);
            setSelectedDate(date);
            setIsLoading(false);
            closeModal();
            clearFields();

          } else {
            setError(response.message);
            setIsLoading(false);
          }
        }
      }
    }
  };
  const handleChange = (item) => {
    let newData = item.map((data) => data._id)
    setFollowersData({ ...followersData, id: newData })
  }


  useEffect(() => {
    if (taskDetails) {
      getDetails(taskDetails)
    }
  }, [taskDetails])

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
    setFolloweList([...labelData])
   
    let newData = data?.taskFollowers?.map((it) => it._id)
    setFollowersData({ ...followersData, id: newData })
  }
  return (
    <Fragment>
      <button onClick={openModal} className="mx-0">
        Add
      </button>
      <ReactModal
        className={`${styles.customeModal} ${styles.customeMoneyModal}  ${styles.customeAccountModal}`}
        isOpen={isTaskModalOpen}
        style={{ overflowY: "scroll" }}
      >
        <div class={styles.modalHeader}>
          <div class="row">
            <div class="col-10">
              <h4>Add New Task</h4>
              <span style={{ color: "red" }}> {error} </span>
            </div>
            <div class="col-2">
              <button className={styles.closeBtn} onClick={closeModal}>
                <img src="/images/popupcross.svg" />
              </button>
              <br />
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
                      onChange={(date) => { setDate(date); setError("") }}
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
                <input
                  type="text"
                  id="contact"
                  autoComplete="off"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  name="contact"
                  className={`form-control ${styles.stepbarInput}`}
                />
              </div>
              <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                <h3>Description</h3>
                <textarea
                  name="contact"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
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
              <div class="row">
                <div class="col-12">
                  <button disabled={isLoading} className={styles.sendBtn} onClick={add_new_task}>
                    {isLoading && (
                      <i
                        className="fa fa-spinner fa-spin"
                        style={{ marginRight: "5px" }}
                      />
                    )}
                    {isLoading && <span>Saving</span>}
                    {!isLoading && <span>Save</span>}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ReactModal>
    </Fragment>
  );
};
export default React.memo(AddNewTaskModal);
