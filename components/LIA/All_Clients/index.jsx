import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import { list_of_client_of_particular_lia } from "../../helpers/lia_services";
const AllClients = ({type}) => {
    const route = useRouter()
    const [allClient, setClients] = useState([])
    const [search, setSearch] = useState("")
    const [active, setActive] = useState(0)
    const [totalClient, setTotalClient] = useState(0)
    const [inActive, setInactive] = useState(0)
    const [isLia, setIsLia] = useState(false)
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 10,
        hashMore: true
    })
    useEffect(() => {
        getAllClient(pagination.per_page,pagination.page)
        if (localStorage.role == "liaAgent" || localStorage.role=="manager") {
            setIsLia(true)
        } else {
            setIsLia(false)
        }
    }, [])

    const getAllClient = async (per_page,page,search) => {
        const response = await list_of_client_of_particular_lia(per_page,page,search)
        if (response.code == 200 && response.result) {
            setClients(response.result)
            response.allCount?.totalClient&& setActive(response.allCount?.activeClient)
            response.allCount?.totalClient&& setInactive(response.allCount?.inActiveClient)
            response.allCount?.totalClient && setTotalClient(response.allCount?.totalClient)
        }
    }
    const fetchMoreData = async () => {
        const res = await list_of_client_of_particular_lia( pagination.per_page,pagination.page)
        if (res.code === 200) {
            const newPosts = res.result;
            setClients([...newPosts, ...allClient])
            if (res.result.length == 0) {
                setPagination((prev) => { return { ...prev, hashMore: false } })
            }
            if(allClient.length==pagination.per_page){
                setPagination((prev) => { return { ...prev, hashMore: false } })
            }
            else {
                setTimeout(() => {
                    setClients(allClient.concat(newPosts))
                }, 1500);
            }
        }
    }
    const handlePageChanges = () => {
      
        
            setPagination((prev) => { return { ...prev, page: pagination.page + 1 } })

        
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        getAllClient(pagination.per_page,pagination.page,e.target.value)

    }

    const handleAddClient = (e) => {
        e.preventDefault()
        route.push("/Client/addClient")
    }
    const handleViewClick=(e,id)=>{
        e.preventDefault()
        route.push(`/Client/addClient?id=${encodeURIComponent(id)}`)
    }
    let clientData = allClient?.map((li, index) => {
        return (

            <tr key={index}>
                {index % 2 == 0 ? <td scope="row"> <img src="/images/reddot.svg" /></td> : <td scope="row"><img src="/images/greendot.svg" /></td>}
                <td>{moment(li.createdAt).format("DD MMM YY")}</td>
                <td style={{cursor:"pointer"}}  onClick={()=>{route.push(`/Client/clientDetail?id=${encodeURIComponent(li._id)}`)}}><a >{li.firstName} <br></br> {li.inzClientNumber}</a></td>
                <td>{moment(li.dob).format("DD MMM YYYY")}</td>
                <td>{li.phone}<br></br><a >{li.email}</a></td>
                <td><a >{li?.listOfClientsVisa?.visaTypeId?.visaType} <br></br>{li.visaStatus} </a></td>
                
                <td style={{ color: "#05CE84" }}>{li.agreement ? "Yes" : "No"} <br /> {li.signedPaid ? "Yes" : "No"}</td>

                <td><a >{li.liaAgentId.fullName} <br></br> {li.liaAgentId.licenseNo}</a></td>
                <td>{li.liaAgentId.phoneNumber} <br></br><a >{li.liaAgentId.email}</a></td>
                <td><button onClick={(e)=>{handleViewClick(e,li._id)}} class="query_Btn1__3QUMI query_BtnWithoutImg__3VpwM">View</button></td>
            </tr>
        )
    })

    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-12">
                            <h3>All Clients</h3>
                        </div>
                        <div className={`col-12 ${styles.clientStatus}`}>
                            <ul>
                                <li>
                                    Total Clients <span>{totalClient}</span>
                                </li>
                                <li>
                                    Active Clients <span>{active}</span>
                                </li>
                                <li>
                                    Inactive Clients <span>{inActive}</span>
                                </li>

                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className={styles.searchSection}>
                                        <form>
                                            <div className="input-group">
                                                <InputFiled type_name="" placeholder_name="Search by name, id" inputId="" input_name="" class_name="form-control"
                                                    value={search} onChange={handleSearch} />
                                                <div className="input-group-append">
                                                    <a className="btn btn-secondary" onClick={(e) => { handleSearch(e) }}>
                                                        <button><i className="fa fa-search"></i></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                <div className={`col-md-5 ${styles.buttonGroup}`}>

                                    {isLia ? <button className="btn btn-secondary" style={{ backgroundColor: "rgb(81 202 200)", marginRight: "0px" }} onClick={(e) => { handleAddClient(e) }}> + Add Client </button> : ""}
                                    <button>Print</button>
                                </div>
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">
                                        <InfiniteScroll
                                            dataLength={allClient.length}
                                            next={() => { fetchMoreData(); handlePageChanges() }}
                                            hasMore={pagination.hashMore}
                                            endMessage={pagination.hashMore == false ? <h3></h3> : ""}

                                        >
                                            <table class="table table-striped">
                                                <thead >
                                                    <tr>
                                                        <th>Priority</th>
                                                        <th>Date <br></br>Added</th>
                                                        <th>Full Name  <br></br>INZ ID</th>
                                                        <th>DOB</th>
                                                        <th>Mobile   <br></br>Email</th>
                                                        <th>Current VISA Name    <br></br>VISA Status</th>
                                                        <th>Agreement Signed     <br></br>Invoice Paid</th>
                                                        <th>LIA Name   <br></br>LIA Membership ID  </th>
                                                        <th>LIA Mobile     <br></br>LIA Email ID</th>
                                                        <th>Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {clientData}

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
        </Fragment>
    )


}

export default AllClients;