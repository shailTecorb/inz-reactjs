import { useState, useEffect } from "react"
import styles from "../../../styles/workplace.module.scss"
import InputFiled from "../../Auth/Common/input_filed"
import InCrementDate from "./incre_decre"
import Weekdays from "./weekdays"
import AdvanceSearch from './AdvanceSearch'
import moment from 'moment';
import { useRouter } from 'next/router';
import { list_of_client_of_particular_lia, lia_workplace_task_list, advance_search, generatePdfForPrint, getLiaAgent } from '../../../components/helpers/lia_services'
import AddNewTask from "../../Common/Modals/add_new_task"
import {get_task_api} from "../../helpers/business_owner_service"
import MonthlyData from "./monthlyData"
import YearlyData from "./yearlyCalender"
import EmailToImmitech from "../../Common/Modals/email_to_immitech"
import BulkEmailToClient from "../../Common/Modals/bulk_email_to_client"
import Link from "next/dist/client/link"

const Workplace = ({ openModal, closeModal, open }) => {
    const route = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
    const [taskDetails, setTaskDetails] = useState([])
    const [taskList, setTaskList] = useState([])
    const [inputData, setInputData] = useState("")
    const [listData, setListData] = useState([])
    const [allActiveCount, setAllActiveCount] = useState(0)
    const [allIdleClient, setAllIdleClient] = useState("")
    const [allInActiveClient, setAllInActiveClient] = useState(0)
    const [allTotalClient, setAllTotalClient] = useState(0)
    const [selected, setSelected] = useState("today")
    const [isMessage, setMessage] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [visaType, setVisaType] = useState("")
    const [dob, setDob] = useState()
    const [error, setError] = useState("")
    const [fullName, setName] = useState("")
    const [isOpenEmailToImitech, setIsOpenEmailToImmitech] = useState(false)
    const [isOpenEmailToClient, setIsOpenEmailToClient] = useState(false)
    const [weekDate, setDate] = useState({
        startDate: "",
        endDate: ""
    })
    useEffect(() => {
        get_lia_agent_data()
        searchingApi()
    }, [])
    const get_lia_agent_data = async () => {

        const response = await getLiaAgent()
        if (response.code == 200) {
            setName(response.result.fullName)
        }
    }
    useEffect((term) => {
        if (!localStorage.token) {
            //     navigator.geolocation.getCurrentPosition(function(position) {  
            //     // console.log("Latitude is :", position.coords.latitude);
            //     // console.log("Longitude is :", position.coords.longitude);
            //     setLat(position.coords.latitude)
            //     setLong( position.coords.longitude)    
            // })
        } else {
            // advanceSearch(term)
        }
    }, [])
    const OpenModal = (e, type) => {
        e.preventDefault();
        if (type == "task") {
            setIsTaskModalOpen(true)
        } else {
            setIsOpen(true);
        }
    };
    const CloseModal = (e, type) => {
        // e.preventDefault();
        setIsOpen(false);
        setIsTaskModalOpen(false)
    };
    // *************** print API *****************
    const GetPdfPrint = async (e) => {
        e.preventDefault()
        //   const response =await generatePdfForPrint()
        //   if(response.code == 200){
        //   }
    }
    //:::::::::::::::::::: task listing api ::::::::::::::::::::
    useEffect(() => {
        taskListingApi(selected)
    }, [selected])
    const taskListingApi = async (selectedDay, date) => {
        let response = await lia_workplace_task_list(selectedDay, date)
        if (response.code == 200) {
            setTaskList(response.result)
            setDate((prev) => {
                return {
                    ...prev,
                    startDate: response.startDate,
                    endDate: response.endDate
                }
            })
            setMessage("")
        }
        else if (response.code == 400) {
            setTaskList([])
            setMessage(response.message)
            setDate((prev) => {
                return {
                    ...prev,
                    startDate: response.startDate,
                    endDate: response.endDate
                }
            })
        }
    }
      //***************************** Edit task ***************************************************** */

  const handleEditTask = async (id) =>{
    let keyData = {taskId : id}
    const response = await get_task_api(keyData)
    if(response.code == 200){
      setTaskDetails(response.result)
    }
    setIsTaskModalOpen(true)
  }

    const handleClick = (day) => {
        setSelected(day)
    }



    let TODAYLIST = taskList?.map((item) => {
        return item?.messages?.map(data => {
            return (
                <div className={`${styles.box} ${styles.voice}`}>
                    <h5>{data.tittle}</h5>
                    <h6>{data.description}</h6>
                    <p>{data.startTime} to {data.dueTime}</p>
                <div className="col-sm-12 text-right pl-0">
                <span style={{marginRight:"10px"}}> <img src="/images/graycheck.svg"></img> </span>
                  <span style={{cursor:"pointer"}} onClick={()=>{handleEditTask(data._id)}}> <img src="/images/edit.svg"></img> </span>
                </div>

                </div>
            )
        })
    })
    //  taskList?.map((item)=>console.log(item.messages.map((li)=>li.description)))
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    const searchingApi = async (event) => {
        event?.preventDefault()
        let page = 1; let perPage = 5;
        const response = await list_of_client_of_particular_lia( perPage, page,inputData)
        if (response.code == 200) {
            setListData(response.result)
            setAllActiveCount(response.allCount?.activeClient)
            setAllIdleClient(response.allCount?.idleClient)
            setAllInActiveClient(response.allCount?.inActiveClient)
            setAllTotalClient(response.allCount?.totalClient)
        }
        else if (response.code == 400) {
            setListData(response.result)
            const advanceSearch = async (e) => {
                e.preventDefault()
                let DOB = moment(dob).format("yyyy/MM/DD")
                // window.location.reload();
                if (!inputData && !firstName && !email && !dob) {
                    setError("Please fill atleast one filed")
                } else {
                    let page = 1;
                    let perPage = 20;
                    const response = await advance_search(inputData, firstName, email, visaType, dob, perPage, page);
                    if (response.code == 200) {
                        //   console.log(response);
                        CloseModal();

                        setListData(response.result)
                    }
                    else if (response.code == 400) {
                        setListData(response.result)
                        setError("Sorry Data Not Found")
                    } else {

                    }
                }
            };

            const print = (e) => {
                e.preventDefault()
                window.print()
            }
        };
        const print = (e) => {
            e.preventDefault()
            window.print()
        }
    }
   
    let list = listData?.map((item, index) => {
        return (
            <tr>
                <td scope="row"> <img src="/images/reddot.svg" /> </td>
                <td>{moment(item.createdAt).format("D MMM  YYYY")}<br></br>{item.crmId}</td>
                <td>{item.fullName } <br></br>{item.inzClientNumber}</td>
                <td>{moment(item.dob).format("D MMM  YYYY")}</td>
                <td>{item.phone} <br></br>{item.email}</td>
                <td>{item.visaType}<br></br> {item.visaStatus}</td>
                <td>{item.agreement ? "Yes" : "No"} <br></br>{item.signedPaid ? "Yes" : "No"}</td>
                <td>
                <Link
                   href={{
                   pathname: '/Client/addClient',
                   query: {
                   id: item._id,
                   },
                   }}
                   >
                  <a><button  style={{cursor:"pointer"}} className={`${styles.Btn1} text-center px-3`}>...</button></a>
                </Link>
                </td>
            </tr>
        )
    })
    const handleAddClient = (e) => {
        e.preventDefault()
        route.push("/Client/addClient")
    }
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.bannerImg}>
                <div class="row mx-0">
                    <div class="col-md-8">
                        <ul class={`${styles.breadcrumb} ${styles.breadcrumbClassic}`}>
                            <li>
                                <a> Workplace </a>
                            </li>
                            {/* <li class="active">
                    <a href="#"> Workplace </a>
                </li> */}
                        </ul>
                        <h3>Have a Great Day, {fullName}  <img src="/images/hand.svg" /></h3>
                    </div>
                    <div className="col-md-4" >
                        {/* <ReactWeather
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                   //locationLabel={}
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast={false}
                    />         */}
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className={styles.workSection}>
                    <div className={styles.tabSec}>
                        <div className="row">
                            <div className="col-md-7">
                                <ul className={`nav nav-tabs ${styles.NavTabs}`}>
                                    <li className={selected == "today" && styles.active}>
                                        <a onClick={() => { handleClick("today") }} href="#1" data-toggle="tab">Today</a>
                                    </li>
                                    <li className={selected == "week" && styles.active}>
                                        <a onClick={() => { handleClick("week") }} href="#2" data-toggle="tab">Weekly</a>
                                    </li>
                                    <li className={selected == "month" && styles.active}>
                                        <a onClick={() => { handleClick("month") }} href="#3" data-toggle="tab">Monthly</a>
                                    </li>
                                    <li className={selected == "year" && styles.active}>
                                        <a onClick={() => { handleClick("year") }} href="#4" data-toggle="tab">Yearly</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={`col-md-5 ${styles.buttonGroup}`}>
                                {/* <AddReminder /> */}
                                <button>+ Add Booking</button>
                                {/* <button>+ Add Task</button> */}
                                <AddNewTask closeModal={CloseModal} isTaskModalOpen={isTaskModalOpen} openModal={(e) => { OpenModal(e, "task") }} taskDetails={taskDetails}/>
                                {/* <AddNewTask   closeModal={CloseModal} open={isOpen} openModal={OpenModal} />  */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className={`tab-content ${styles.TabContent}`}>
                                <div className="tab-pane active" id="1">
                                    <InCrementDate styles={styles}
                                        nextDay={taskListingApi}
                                        previousDay={taskListingApi}
                                    />
                                    <div className={styles.reminderList}>
                                        {TODAYLIST}
                                        {isMessage && <span className={styles.Nodata}>{isMessage}</span>}
                                    </div>
                                </div>
                                <div className="tab-pane " id="2">

                                    <Weekdays styles={styles} taskList={taskList} nextDay={taskListingApi}
                                        previousDay={taskListingApi} selected={selected} weekDates={weekDate} />
                                    {isMessage &&<span className={styles.Nodata}>{isMessage}</span>}

                                </div>
                                <div className="tab-pane " id="3">
                                    <MonthlyData styles={styles}
                                        taskList={taskList} selected={selected}
                                        nextDay={taskListingApi}
                                        previousDay={taskListingApi}
                                        weekDates={weekDate} />
                                </div>
                                <div className="tab-pane " id="4">
                                    <YearlyData styles={styles}
                                        taskList={taskList} selected={selected}
                                        nextDay={taskListingApi}
                                        previousDay={taskListingApi}
                                        weekDates={weekDate} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bannerSec}>
                    <div className="row">
                        <div className="col-lg col-md-3 px-2">
                            <div className={`${styles.bannerBox} ${styles.ppiBox}`}>
                                <h4>127</h4>
                                <h6>Total PPIs Due</h6>
                            </div>
                        </div>
                        <div className="col-lg col-md-3 px-2">
                            <div className={`${styles.bannerBox} ${styles.idleCase}`}>
                                <h4>112</h4>
                                <h6>Total Idle Cases</h6>
                            </div>
                        </div>
                        <div className="col-lg col-md-3 px-2">
                            <div className={`${styles.bannerBox} ${styles.banking}`}>
                                <h4>105</h4>
                                <h6>Bookings</h6>
                            </div>
                        </div>
                        <div className="col-lg col-md-3 px-2">
                            <div className={`${styles.bannerBox} ${styles.query}`}>
                                <h4>98</h4>
                                <h6>Pending Query</h6>
                            </div>
                        </div>
                        
                        <div className="col-lg col-md-3 pl-2">
                        
                            <div className={styles.buttonGroup}>
                            <EmailToImmitech isOpenEmailToImitech={isOpenEmailToImitech} setIsOpenEmailToImmitech={setIsOpenEmailToImmitech} /> 
                              
                           <BulkEmailToClient isOpenEmailToClient={isOpenEmailToClient} setIsOpenEmailToClient={setIsOpenEmailToClient} />
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.DashboardList}>
                    <div className="row mx-2">
                        <h3 className="col-md-9">Latest Clients<span className="mr-2">(Last 5)</span></h3>
                        <div className={`col-md-3 text-right ${styles.viewAll}`}><a href="/LIA/allClient">View All <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className={`col-12 ${styles.clientStatus}`}>
                            <ul>
                                <li>
                                    Total Clients <span>{allTotalClient}</span>
                                </li>
                                <li>
                                    Active Clients <span>{allActiveCount}</span>
                                </li>
                                <li>
                                    Inactive Clients <span>{allInActiveClient}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className={styles.searchSection}>
                                <form>
                                    <div className="row">
                                        {/* <div className={`col-md-5 ${styles.searchInput}`}>
                                            <div className="input-group">
                                                <InputFiled type_name="email" placeholder_name="Search by name, id, or internal" onChange={(e) => { setInputData(e.target.value) }} value={inputData} inputId="Email" input_name="inputData" class_name="form-control" />
                                                <div className="input-group-append">
                                                    <a className="btn btn-secondary" href="/search=">
                                                        <button onClick={(e) => { searchingApi(e) }}><i className="fa fa-search"></i></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-md-12 text-right">
                                            <AdvanceSearch
                                                firstName={firstName}
                                                email={email}
                                                visaType={visaType}
                                                dob={dob}
                                                setFirstName={setFirstName}
                                                setEmail={setEmail}
                                                setVisaType={setVisaType}
                                                setDob={setDob}
                                                advanceSearch={(e) => { advanceSearch(e) }}
                                                OpenModal={OpenModal}
                                                CloseModal={CloseModal}
                                                isOpen={isOpen}
                                            />

                                            <button className="btn btn-secondary" style={{ backgroundColor: "rgb(81 202 200)", marginLeft: "20px", border: "1px solid rgb(81 202 200)" }} onClick={(e) => { handleAddClient(e) }}> + Add Client </button>
                                            <button className="btn btn-secondary" style={{ backgroundColor: "rgb(81 202 200)", marginLeft: "20px", border: "1px solid rgb(81 202 200)" }} onClick={(e) => { GetPdfPrint(e) }}> Print </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className={`col-12 ${styles.tableArea}`}>
                            <div className="table-responsive ">
                                <table class="table table-striped">
                                    <thead >
                                        <tr>
                                            <th>Priority</th>
                                            <th>Date Added<br></br>CRM ID</th>
                                            <th>Full Name <br></br>INZ ID</th>
                                            <th>DOB</th>
                                            <th>Mobile <br></br>Email</th>
                                            <th>VISA Name<br></br> VISA Status</th>
                                            <th>Agreement <br></br> Signed Paid</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list}
                                        <span style={{ color: "red" }}>{error}</span>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Workplace;
