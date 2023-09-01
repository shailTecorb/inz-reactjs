import { Fragment, useState, useEffect, useRef } from "react";
import styles from "../../../styles/query.module.scss"
import InputFiled from "../../Auth/Common/input_filed";
import { lia_reports_issues, business_owner_reports_issues } from "../../helpers/business_owner_service"
import moment from "moment";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";


const ListOfAssuesReported = () => {
    const route = useRouter()
    const [data, setData] = useState([])
    const [status, setStatus] = useState("pending")
    const [totalPending, setTotalPending] = useState(0)
    const [totalResolved, setTotalResolved] = useState(0)
    const [inputData, setInputData] = useState("")
    const [message, setMessage] = useState("")
    const [reportId, setReportId] = useState()
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 10,
        hashMore: true
    })
    useEffect(() => {
        listingOfReportsAndIssues(status, "")
    }, [])

    const listingOfReportsAndIssues = async (status, inputData) => {
        if (localStorage.role == "liaAgent") {
            const response = await lia_reports_issues(status, inputData, pagination.page, pagination.per_page)
            if (response.code == 200) {
                setData(response.result)
                setTotalPending(response.totalPending)
                setTotalResolved(response.totalResolve)
            } else {
                setMessage(response.message)
            }
        } else {
            const response = await business_owner_reports_issues(status, inputData, pagination.page, pagination.per_page)
            if (response.code == 200) {
                setData(response.result)
                setTotalPending(response.totalPending)
                setTotalResolved(response.totalResolve)
            } else {
                setMessage(response.message)
            }
        }

    }

    const fetchMoreData = async () => {
        if (localStorage.role == "liaAgent") {
            const res = await lia_reports_issues(status, inputData, pagination.page + 1, pagination.per_page)
            if (res.code === 200) {
                const newPosts = res.result;
                setData([...newPosts, ...data])

                if (res.result.length == 0) {
                    setPagination((prev) => { return { ...prev, hashMore: false } })
                }
                else {
                    setTimeout(() => {
                        setData(data.concat(newPosts))

                    }, 1500);
                }
            }
        } else {
            const res = await business_owner_reports_issues(status, inputData, pagination.page + 1, pagination.per_page)

            if (res.code === 200) {
                const newPosts = res.result;
                setData([...newPosts, ...data])
                if (res.result.length == 0) {
                    setPagination((prev) => { return { ...prev, hashMore: false } })
                }
                else {
                    setTimeout(() => {
                        setData(data.concat(newPosts))
                    }, 1500);
                }
            }
        }
    }
    const handlePageChanges = () => {
        setPagination((prev) => { return { ...prev, page: pagination.page + 1 } })
    }
    // const searchOfReportsAndIssues = async (e) => {
    //     e.preventDefault()
    //     const response = await lia_reports_issues(status, inputData)
    //     setData(response.result)
    //     setMessage(response.message)

    // }
    const reportIdHandler = (id) => {
        localStorage.setItem("reportId", id)
        route.push("/Chat/Socket")
    }
    let list = data?.filter((flterData) => {
        if (inputData == "") {
            return flterData
        } else if ((flterData?.ticketId?.toLowerCase().includes(inputData?.toLowerCase())) || (flterData?.title.title?.toLowerCase().includes(inputData?.toLowerCase()))) {
            return flterData
        }
    }).map((item, i) => {
        return (
            <tr>
                <td>{item.ticketId}</td>
                <td>{item.title.title}</td>
                <td>{moment(item.createdAt).format('DD MMM YYYY')}<br />{moment(item.createdAt).format(' h:mm a')}</td>
                <td>{item.isActive ? "Active" : "Deactive"}</td>
                <td>{item.aggrementSigned ? "Yes" : "No"}</td>
                <td >
                    <button onClick={() => { setReportId(item._id); reportIdHandler(item._id) }} className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
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
                            <h3>List Of Issues Reported</h3>
                        </div>
                        <div className={`col-12 ${styles.clientStatus}`}>
                            <ul>
                                <li>
                                    Active <span>{totalPending}</span>
                                </li>
                                <li>
                                    Resolve <span>{totalResolved}</span>
                                </li>
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
                                                            <InputFiled type_name="text" placeholder_name="Search by title, id" onChange={(e) => { setInputData(e.target.value) }} value={inputData} inputId="text" input_name="" class_name="form-control" />
                                                            <div className="input-group-append" onClick={(e)=>{e.preventDefault()}}>
                                                                <a className="btn btn-secondary">
                                                                    <button ><i className="fa fa-search"></i></button>
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
                                    <button onClick={() => { route.push("/Client/reportAnIssue") }}>Create an Issue</button>
                                </div>
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">
                                        <InfiniteScroll
                                            dataLength={data?.length}
                                            next={() => { fetchMoreData(); handlePageChanges() }}
                                            hasMore={pagination.hashMore}
                                            endMessage={pagination.hashMore == false ? <h3></h3> : ""}

                                        >
                                            <table class="table table-striped">
                                                <thead >
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Title</th>
                                                        <th>Date and Time</th>
                                                        <th>Status</th>
                                                        <th>Aggrement Signed</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {list.length > 0 ? list : <span className={styles.Nodata}>{message}</span>}
                                                </tbody>
                                            </table>
                                        </InfiniteScroll>
                                        {/* <span style={{ color: "red" }}>{message}</span> */}
                                        {/* <span className={styles.Nodata}>{message}</span> */}

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

export default ListOfAssuesReported;