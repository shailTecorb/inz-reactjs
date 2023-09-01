import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";
import { list_of_staff_service } from "../../helpers/business_owner_service";
import { IdContext } from "../../MyContext/IdDetailsContext";
import moment from 'moment'
import InfiniteScroll from "react-infinite-scroll-component";
const AllStaff = ({ type }) => {
    const [allStaff, setStafflist] = useState([])
    const { setEmail, setStaffId, setTpe } = useContext(IdContext)
    const [totalLiaStaff, setTotalLiaStaff] = useState(0)
    const [otherStaff, setOtherStaff] = useState(0)
    const route = useRouter()
    const [search, setSearch] = useState("")
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        getAllStaff()
    }, [])
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 10,
        hashMore: true
    })
    const getAllStaff = async () => {
        setLoading(true)
        const response = await list_of_staff_service(pagination.page, pagination.per_page, localStorage.role, search)
        if (response.code == 200) {
            setStafflist(response.result)
            setTotalLiaStaff(response.result1.allLia)
            setOtherStaff(response.result1.otherStaff)
            setLoading(false)
        } else if (response.code == 400) {
            // setMsg(response.message)
        }
    }
    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const fetchMoreData = async () => {
        const res = await list_of_staff_service(pagination.page + 1, pagination.per_page)
        if (res.code === 200) {
            const newPosts = res.result;
            setStafflist((prev) => {
                return ([...prev, ...newPosts])
            })
            if (res.result.length == 0) {
                setPagination((prev) => { return { ...prev, hashMore: false } })
            }
            else {
                setTimeout(() => {
                    setStafflist((prev) => {
                        return ([...prev, ...newPosts])
                    })
                }, 1500);
            }
        }
    }
    const handlePageChanges = () => {
        setPagination((prev) => { return { ...prev, page: pagination.page + 1 } })
    }
    const viewStaff = async (id) => {
        setStaffId(id)
        setTpe(type)
        if (id) {
            route.push(`/busines/owner/editLia`)
        }
    }
    const getStaffData = (staffId) => {
        //    route.push("/busines/owner/editLia")
    }

    let staffData = allStaff?.filter((flterData) => {
        if (search == "") {
            return flterData
        } else if ((flterData?.fullName?.toLowerCase().includes(search?.toLowerCase())) || (flterData?.internalId?.toLowerCase().includes(search?.toLowerCase()))) {
            return flterData
        }
    }).map((data, index) => {
        return (
            <tr>
                <td scope="row">{data.internalId}</td>
                <td>{data.roleId?.role == "liaAgent" ? "LIA Agent" : data.roleId?.role}</td>
                <td><a onClick={() => { setEmail(data._id); getStaffData() }} >{data.fullName} </a></td>
                <td> {data.phoneNumberCountryCode} {data.phoneNumber} <br></br><a onClick={() => { setEmail(data._id) }}>{data.email}</a></td>
                <td>{moment(data.dob).format("Do MMM YYYY")}</td>
                <td >{data.isActive ? <span style={{ color: "#05CE84" }}>Active </span> : <span style={{ color: "red" }}>{data.liveStatus} </span>}</td>
                <td >
                    {/* <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button> */}
                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`} onClick={() => { viewStaff(data._id) }}>View</button>
                </td>
            </tr>
        )
    })
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-12">
                            <h3>All Staffs</h3>
                        </div>
                        <div className={`col-12 ${styles.clientStatus}`}>
                            <ul>
                                <li>
                                    LIA Staffs <span>{totalLiaStaff}</span>
                                </li>
                                <li>
                                    Other Staffs <span>{otherStaff}</span>
                                </li>
                                {/* <li>
                                    <span style={{ color: "red" }}> {message} </span>
                                </li> */}

                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className={styles.searchSection}>
                                        <form>
                                            <div className="col-md-7 pl-0">
                                                <div className={styles.searchSection}>
                                                    <form>
                                                        <div className="input-group">
                                                            <InputFiled type_name="text" placeholder_name="Search by name, id"
                                                                inputId="" input_name="" class_name="form-control" value={search} onChange={handleSearch} />
                                                            <div className="input-group-append">
                                                                <a className="btn btn-secondary" >
                                                                    <button onClick={(e) => { e.preventDefault() }}><i className="fa fa-search"></i></button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                                <div className={`col-sm-5 ${styles.buttonGroup}`}>
                                    <button>Print</button>
                                    <button onClick={() => { route.push("/busines/owner/addLia") }}>+ Add Staff</button>
                                </div>
                                {allStaff.length == 0 ? <div className={styles.noDataSection}>
                                    <div className={styles.staffImage}>
                                        <img src="/images/nostaff.svg" />
                                    </div>
                                </div> :
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">
                                        <InfiniteScroll
                                            dataLength={allStaff.length}
                                            next={() => { fetchMoreData(); handlePageChanges() }}
                                            hasMore={pagination.hashMore}
                                            endMessage={pagination.hashMore == false ? <h3></h3> : ""}
                                        >
                                            <table class="table table-striped">
                                                <thead >
                                                    <tr>
                                                        <th>#ID</th>
                                                        <th>Role</th>
                                                        <th>Full Name</th>
                                                        <th>Mobile<br></br>Email</th>
                                                        <th>DOB</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {staffData}
                                                </tbody>
                                            </table>
                                        </InfiniteScroll>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )


}

export default AllStaff;