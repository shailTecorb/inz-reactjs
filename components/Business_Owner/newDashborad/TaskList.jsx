import DatePicker from "react-datepicker";
import { useEffect, useState,useCallback } from "react";
import {
  businesOwnerDashboard,
  businesOwnerDashboardTaskList,
  get_task_api
} from "../../helpers/business_owner_service";
import { formattedDate, formattedDateTwo } from "../../Auth/Common/methods";
import moment from "moment";
import AddNewTaskModal from "../../Common/Modals/addTaskModal";
const TaskList = ({ styles }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskList, setTaskList] = useState([]);
  const [colorCode, setColorCode] = useState(["blueDiv", "purpleDiv", ""]);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [taskDetails, setTaskDetails] = useState([])

  useEffect(() => {
    dashboarddetails(selectedDate);
  }, []);

  const onChange = (dates) => {
    setSelectedDate(dates);
    dashboarddetails(dates);
  };

  const dashboarddetails = async (selDate) => {
    let keyData = {
      page: 1,
      perPage: 10,
      date: formattedDate(selDate),
    };
    const response = await businesOwnerDashboardTaskList(keyData);
    if (response.code === 200) {
      let list = response.result
      setTaskList(list);
    }
  };
  //   let index = Math.floor(Math.random()* colorCode.length)
  //   console.log( (Math.random()* colorCode.length),"Task", colorCode[index]);
  var endDate = new Date();
  var numberOfDaysToAdd = 13;

  const daysHighlighted = new Array(numberOfDaysToAdd).fill(endDate);
  const openModal = () => {
    setOpenTaskModal(true);
  };
  const closeModal = () => {
    setOpenTaskModal(false);
  };
  //***************************** Edit task ***************************************************** */

  const handleEditTast = useCallback(async (id) =>{
    let keyData = {taskId : id}
    const response = await get_task_api(keyData)
    if(response.code == 200){
      setTaskDetails(response.result)
    }
    openModal()
  }
    )
    
  
  return (
    <div className="col-lg-4 bg-white pt-5">
      <div className="calendar-area">
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          inline
          // highlightDates={[
          //   {
          //     "highlighted-class": daysHighlighted.map((day, index) => {
          //       day.setDate(day.getDate() + index);
          //       return new Date(day);
          //     }),
          //   },
          // ]}
        />
        <div className="interview_schedule">
          <div className="row">
            <h2 className="col-sm-9">
              My Task | <b>{moment(selectedDate).format("D MMM, YYYY")}</b>{" "}
            </h2>
            <div className="col-sm-3 text-right pl-0">
              <div className="addBtn">
                <AddNewTaskModal
                  openModal={openModal}
                  closeModal={closeModal}
                  isTaskModalOpen={openTaskModal}
                  dashboarddetails={dashboarddetails}
                  setSelectedDate={setSelectedDate}
                  taskDetails={taskDetails}
                />
                {/* <button className="mx-0">Add</button> */}
              </div>
            </div>
          </div>

          {taskList?.map((data, index) => {
            let { dueTime, startTime, tittle, description } = data;
            return (
              <div key={index}
                className={`boxDiv ${
                  Math.random() >= Math.random() ? "blueDiv" : "purpleDiv"
                }`}
              >
                <h4>Interview: {tittle}</h4>
                <h5>{description}</h5>
                <p>
                  {startTime} to {dueTime}
                </p>
                
                <div className="col-sm-12 text-right pl-0">
                <span style={{marginRight:"10px"}}> <img src="/images/graycheck.svg"></img> </span>
                  <span style={{cursor:"pointer"}} onClick={()=>{handleEditTast(data._id)}}> <img src="/images/edit.svg"></img> </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
