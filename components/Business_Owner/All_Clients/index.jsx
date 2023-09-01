import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";
import { business_owner_all_client_list } from "../../helpers/business_owner_service";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
const AllClients = () => {
    const route = useRouter()
    const [allClient, setClients] = useState([])
    // const {setEmail} = useContext(IdContext)
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
        getAllClient()
        if (localStorage.role == "liaAgent" || localStorage.role=="manager") {
            setIsLia(true)
        } else {
            setIsLia(false)
        }
    }, [])

    const getAllClient = async () => {
        const response = await business_owner_all_client_list(pagination.page, pagination.per_page, search)
        if (response.code == 200) {
            setClients(response.result)
            setActive(response.activeClient)
            setInactive(response.deactiveClient)
            setTotalClient(response.totalClient)
        }
    }

    const fetchMoreData = async () => {
        const res = await business_owner_all_client_list(pagination.page + 1, pagination.per_page)
        if (res.code === 200) {
            const newPosts = res.result;
            setClients([...newPosts, ...allClient])
            if (res.result.length == 0) {
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
        getAllClient()

    }

    const handleAddClient = (e) => {
        e.preventDefault()
        route.push("/Client/addClient")
    }
    let clientData = allClient?.map((li, index) => {
        return (

            <tr key={index}>
         { index%2==0 ?  <td scope="row"> <img src="/images/reddot.svg" /></td> : <td scope="row"><img src="/images/greendot.svg" /></td>}
             <td>{moment(li.createdAt).format("DD MMM YY")}</td>
            <td><a >{li.firstName} <br></br> {li.inzClientNumber}</a></td>
            <td>{moment(li.dob).format("DD MMM YY")}</td>
            <td>{li.phone}<br></br><a >{li.email}</a></td>
            <td><a >{li?.listOfClientsVisa?.visaTypeId?.visaType} <br></br>{li.visaStatus} </a></td>
            <td style={{ color: "#05CE84" }}>{li.agreement?"Yes":"No"} <br /> {li.signedPaid? "Yes":"No"}</td>

             <td><a >{li.liaAgentId.fullName} <br></br> {li.liaAgentId.membershipNumber}</a></td>
            <td>{li.liaAgentId.phoneNumber} <br></br><a >{li.liaAgentId.email}</a></td>
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