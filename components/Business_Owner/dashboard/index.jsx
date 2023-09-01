import styles from "../../../styles/dashboard.module.scss"
import InputFiled from "../../Auth/Common/input_filed"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import {  get_business_owner, business_owner_dashbord_all_count, business_owner_view_all_ppi_list, business_owner_all_client_list } from "../../helpers/business_owner_service"
const Dashboard = () => {
    const route = useRouter()
    const [open, setOpen] = useState(false)
    const [userName, setUserName] = useState("")
    const [queryCount, setQueryCount] = useState()
    const [allActiveQueries, setAllActiveQueries] = useState()
    const [allIdleQueries, setAllIdleQueries] = useState()
    const [active, setActive] = useState()
    const [activeLia, setActiveLia] = useState()
    const [inActiveLia, setInActiveLia] = useState()
    const [inActive, setInActive] = useState()
    const [allLia, setAllLia] = useState()
    const [allStaffLia, setAllStaffLia] = useState()
    const [otherStaff, setOtherStaff] = useState()
    const [allPpi, setAllPpi] = useState()
    const [allClientsList, setAllClientsList] = useState([])
    const [activeClients, setActiveClient] = useState(0)
    const [inActiveClients, setInActiveClient] = useState(0)
    const [totalClient, setTotalClient] = useState(0)
    const [error,setError] = useState("")
    const [addData, setAddData] = useState({
        queries: "",
        application: "",
        reviews: "",
        allstaff: "",
        received: "",
        complaints: "",
        alllia: ""
    })
  
     const [pagination, setPagination] = useState({
         page:1,
         per_page:5,
         hashMore:true
     })
    useEffect(() => {
        if (localStorage.token && localStorage.approved == "true") {
            setUserName(localStorage.userName)
        }
    }, [])

    useEffect(() => {
        getBusinessOwner()
    }, [])
    const getBusinessOwner = async () => {
        const response = await get_business_owner()
        if (response.code == 200) {
            if (response?.result?.ownerName) {
                setUserName(response?.result?.ownerName)
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value })

        if (name === "queries") {
            getAllQueries(value)
        } else if (name === "application") {
            getAllApplication(value)
        } else if (name === "reviews") {
            getAllReview(value)
        } else if (name === "allstaff") {
            getAllStaff(value)
        } else if (name === "received") {
            getAllReceived(value)
        } else if (name === "complaints") {
            getAllComplaints(value)
        } else if (name === "alllia") {
            getAllLia(value)
        } else {
        }
    }
   
    useEffect(() => {
        dashbordAllCount()
        AllClientList()
    }, [])
    const dashbordAllCount = async () => {
        let response = await business_owner_dashbord_all_count("", "")
        if (response.code == 200) {

            setQueryCount(response.result.allQueries)
            setAllActiveQueries(response.result.activeQueries)
            setAllIdleQueries(response.result.allIdleQuery)
            setAllLia(response.result.allLia)
            setAllStaffLia(response.result.allLiaStaff)
            setActiveLia(response.result.activeLia)
            setInActiveLia(response.result.inActiveLia)
            setActive(response.result.Active)
            setInActive(response.result.inActive)
            setOtherStaff(response.result.otherStaff)
            setAllPpi(response.result.allPpi)
        }
    }

    // ****************** for Dropdown ******************

    const getAllQueries = async (type) => {
        let response = await business_owner_dashbord_all_count(type, "allQueries")
        if (response.code == 200) {
            setAllActiveQueries(response.result.activeQueriesOfThisTime)
            setQueryCount(response.result.allQueriesOfThisTime)
        }
    }
    const getAllApplication = async (type) => {
        let response = await business_owner_dashbord_all_count(type, "allApplication")
        if (response.code == 200) {
        }
    }
    const getAllReview = async (type) => {
        let response = await business_owner_dashbord_all_count(type)
        if (response.code == 200) {
        }
    }
    const getAllStaff = async (type) => {
        let response = await business_owner_dashbord_all_count(type, "allStaff")
        if (response.code == 200) {
            setAllStaffLia(response.result.allLiaStaffOfThisTime)
            setOtherStaff(response.result.otherStaffOfThisTime)
        }
    }
    const getAllReceived = async (type) => {
        let response = await business_owner_dashbord_all_count(type, "allPpi")
        if (response.code == 200) {
            setAllPpi(response.result.allPpiOfThisTime)
        }
    }
    const getAllLia = async (type) => {
        let response = await business_owner_dashbord_all_count(type, "allLia")
        if (response.code == 200) {
            setAllLia(response.result.allLiaOfThisTime)
            setActiveLia(response.result.activeLiaOfThisTime)
            setInActiveLia(response.result.inActiveLiaOfThisTime)

        }
    }
    const getAllComplaints = async (type) => {
        let response = await business_owner_dashbord_all_count(type)
        if (response.code == 200) {
        }
    }
    // *****************  view all *************
    const view_all_query = async () => {
        route.push("/LIA/Queries")
    }
    const view_all_lia_staff = async () => {
        route.push("/busines/owner/lia's")
    }
    const view_all_staff = async () => {
        route.push("/busines/owner/allStaffList")
    }

    const view_all_ppi_list = async () => {
        let perPage = 10;
        let page = 1;
        let response = await business_owner_view_all_ppi_list(perPage, page)
        if (response.code == 200) {
        }
    }
    // view all client list 

    const AllClientList = async () => {
        const response = await business_owner_all_client_list(pagination.page, pagination.per_page, "")
        if (response.code == 200) {
            setAllClientsList(response.result)
            setActiveClient(response.activeClient)
            setInActiveClient(response.deactiveClient)
            setTotalClient(response.totalClient)
        }else {
                setError(response.message)
        }
    }

    const fetchMoreData = async () => {
        const res = await business_owner_all_client_list(pagination.page + 1, pagination.per_page)
        if (res.code === 200) {
            const newPosts = res.result;
            setAllClientsList([...newPosts, ...allClientsList])
            if (res.result.length == 0) {
                setPagination((prev) => { return { ...prev, hashMore: false } })
            }
            else {
                setTimeout(() => {
                    setAllClientsList(allClientsList.concat(newPosts))
                }, 1500);
            }
        }
    }
    const handlePageChanges = () => {
        setPagination((prev) => { return { ...prev, page: pagination.page + 1 } })
    }
    return (
        <div className={styles.contentWrapper}>

            {/* <SignUpModal
                open={open}
                closeModal={closeModal}
            /> */}
            <div className={styles.bannerImg}>
                <ul class={`${styles.breadcrumb} ${styles.breadcrumbClassic}`}>
                    <li>
                        <a >  Dashboard	</a>
                    </li>
                    {/* <li class="active">
                        <a href="#"> Workplace </a>
                    </li> */}
                </ul>
                <h3>Have a Great Day, {userName} <img src="/images/hand.svg" /></h3>

            </div>


            <div className="container-fluid">
                <div className="row mx-2">
                    <div className="col-md-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box1}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/allqueries.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>All Queries</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a style={{ cursor: "pointer" }} onClick={view_all_query} > View All</a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <select value={addData.queries} onChange={(e) => { handleChange(e) }} name="queries"  className={styles.selectBox}>
                                        <option value="">Total</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 pr-2">
                                    <h6>Total</h6>
                                    <h4>{queryCount} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                </div>
                                <div className="col-4 px-2">
                                    <h6>Idle</h6>
                                    <h4>{allIdleQueries} <span>20%</span> <img src="/images/downarrow.svg" /></h4>
                                </div>
                                <div className="col-4 px-2">
                                    <h6>Active</h6>
                                    <h4>{allActiveQueries} <span>20%</span> <img src="/images/uparrow.svg" /></h4>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box2}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/application.svg" />
                                    </div>
                                    <div className={styles.contentSec}  >
                                        <h3>All Application</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a disabled >View All</a>
                                    </div>
                                </div>
                            <div className="col-6">
                                <select value={addData.application} onChange={(e) => { handleChange(e) }} name="application" className={styles.selectBox}>
                                    <option value="">Total</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 pr-2">
                                    <h6>Submitted</h6>
                                    <h4>320 <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                </div>
                                <div className="col-4 px-2">
                                    <h6>Declined</h6>
                                    <h4>320 <span>20%</span> <img src="/images/downarrow.svg" /></h4>

                                </div>
                                <div className="col-4 px-2">
                                    <h6>Approved</h6>
                                    <h4>320 <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box3}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/review.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>All Reviews</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0 ">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            <div className="col-6">
                                <select value={addData.reviews} onChange={(e) => { handleChange(e) }} name="reviews" className={styles.selectBox}>
                                    <option value="">Total</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 pr-2">
                                    <h6>Reviews</h6>
                                    <h4>320 <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-md-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box4}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/staffs.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>All Staffs</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a style={{ cursor: "pointer" }} onClick={view_all_staff}>View All</a>
                                    </div>
                                </div>
                           
                            <div className="col-6">
                                <select value={addData.allstaff} onChange={(e) => { handleChange(e) }} name="allstaff" className={styles.selectBox}>
                                    <option value="">Total</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 pr-2">
                                    <h6>LIA Staffs</h6>
                                    <h4>{allStaffLia} </h4>
                                </div>
                                <div className="col-4 px-2">
                                    <h6>Other Staffs</h6>
                                    <h4>{otherStaff}  </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box5}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/ppi.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>Received</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            <div className="col-6">
                                <select value={addData.received} onChange={(e) => { handleChange(e) }} name="received" className={styles.selectBox}>
                                    <option value="">Total</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-4 pr-2">
                                    <h6>Received</h6>
                                    <h4>{allPpi} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box6}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/complaints.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>All Complaints</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            <div className="col-6">
                                <select value={addData.complaints} onChange={(e) => { handleChange(e) }} name="complaints" className={styles.selectBox}>
                                    <option value="">Total</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                             </div>
                            <div className="row mt-4">
                                <div className="col-4 pr-2">
                                    <h6>Received</h6>
                                    <h4>320 <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-md-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box4}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/lia.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>All LIA’s</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a style={{ cursor: "pointer" }} onClick={view_all_lia_staff}>View All</a>
                                    </div>
                                </div>
                       
                            <div className="col-6">
                                <select value={addData.alllia} onChange={(e) => { handleChange(e) }} name="alllia" className={styles.selectBox}>
                                    <option value="">Total</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            </div>
                            <div className="row mt-4 pr-0">
                                <div className="col-4 pr-2">
                                    <h6>Total</h6>
                                    <h4>{allLia} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                </div>
                                <div className="col-4 px-2">
                                    <h6>Active</h6>
                                    <h4>{activeLia} <span>20%</span> <img src="/images/uparrow.svg" /></h4>

                                </div>
                                <div className="col-4 px-2">
                                    <h6>Inactive</h6>
                                    <h4>{inActiveLia} <span>20%</span> <img src="/images/downarrow.svg" /></h4>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box5}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/subscription.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>Subscribtion</h3>
                                    </div>
                                </div>
                                {/* <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a href="#">View All</a>
                                    </div>
                                </div> */}
                            </div>
                            <div className="row mt-4">
                                <div className="col-6 pr-2">
                                    <h6>Current Subscribtion</h6>
                                    <h4>Premium Monthly </h4>
                                </div>
                                <div className="col-6 px-2">
                                    <h6>Due Date</h6>
                                    <h4>10 Days | 22 march 22 </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.DashboardList}>
                    <div className="row mx-2">
                        <h3 className="col-9">Latest Clients<span className="mr-2">(Last 5)</span></h3>
                        <div className={`col-3 text-right ${styles.viewAll}`}><a style={{cursor:"pointer"}} onClick={() => { route.push("/busines/owner/allClient") }}>View All <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                    <div className="row mx-2">
                        <div className={`col-12 ${styles.clientStatus}`}>
                            <ul>
                                <li>
                                    Total Clients <span>{totalClient}</span>
                                </li>
                                <li>
                                    Active Clients <span>{activeClients}</span>
                                </li>
                                <li>
                                    Inactive Clients <span>{inActiveClients}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className={styles.searchSection}>
                                        <form>
                                            <div className="input-group">
                                                <InputFiled type_name="email" placeholder_name="Search by name, id, or internal" inputId="Email" input_name="" class_name="form-control" />
                                                <div className="input-group-append">
                                                    <a className="btn btn-secondary" href="/search=">
                                                        <button><i className="fa fa-search"></i></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">
                                    {/* {allClientsList.length >0? <span style={{color:"red"}}> {error} </span>:""} */}
                                    <InfiniteScroll
                                            dataLength={allClientsList.length}
                                            next={() => { fetchMoreData(); handlePageChanges() }}
                                            hasMore={pagination.hashMore}
                                            endMessage={pagination.hashMore == false ? <h3></h3> : ""}
                                            
                                        >
                                        <table class="table table-striped">
                                            <thead >
                                                <tr>
                                                    <th>Priority</th>
                                                    <th>Date Added</th>
                                                    <th>Full Name <br></br>INZ ID</th>
                                                    <th>DOB</th>
                                                    <th>Mobile <br></br>Email</th>                                           
                                                    <th>Current VISA Name<br></br> VISA Status</th>
                                                    <th>Agreement Signed<br></br> Invoice Paid</th>
                                                    <th>LIA Name <br></br>LIA Membership ID</th>
                                                    <th>LIA Mobile <br></br>LIA Email ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                      
                                                {/* {console.log("data",allClientsList)} */}

                                                {allClientsList?.map((li, i) => {
                                                    // console.log(data,"kkkkkkk")
                                                    return (
                                                        <tr key={i}>
                                                            {i % 2 == 0 ? <th scope="row"> <img src="/images/reddot.svg" /></th> : <th scope="row"><img src="/images/greendot.svg" /></th>}
                                                            {/* {console.log(li.firstName)} */}
                                                            <td>{moment(li.createdAt).format("DD MMM YY")}</td>
                                                            <td><a >{li.firstName} <br></br> {li.inzClientNumber}</a></td>
                                                            <td>{moment(li.dob).format("DD MMM YY")}</td>
                                                            <td>{li.phone}<br></br><a >{li.email}</a></td>
                                                            <td><a >{li?.listOfClientsVisa?.visaTypeId?.visaType} <br></br>{li.visaStatus} </a></td>
                                                            <td style={{ color: "#05CE84" }}>{li.agreement ? "Yes" : "No"} <br /> {li.signedPaid ? "Yes" : "No"}</td>
                                                            <td><a >{li.liaAgentId.fullName} <br></br> {li.liaAgentId.membershipNumber}</a></td>
                                                            <td>{li.liaAgentId.phoneNumber} <br></br><a>{li.liaAgentId.email}</a></td>
                                                        </tr>
                                                    )
                                                })
                                                }
                                                               

                                            </tbody>
                                        </table>
                                         </InfiniteScroll> 
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
export default Dashboard