import { Fragment, useContext } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";
import { business_owner_all_lia_list } from "../../helpers/business_owner_service";
import { useEffect } from "react";
import React, { useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import { IdContext } from "../../MyContext/IdDetailsContext";

const LIAS = ({ type }) => {
    const route = useRouter()
    const [totalLiaStaff, setTotalLiaStaff] = useState(0)
    const [liaStaff, setLiaStaff] = useState([])
    const [totalActiveLia, setTotalActiveLia] = useState(0)
    const [totalInActiveLia, setTotalInActiveLia] = useState(0)
    const [search, setSearch] = useState("")
    const { setStaffId, setTpe } = useContext(IdContext)
    const [isSearching, setSearching] = useState("")

    useEffect(() => {
        getAllLiaStaff()
    }, [])
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 10,
        hashMore: true
    })
    const getAllLiaStaff = async () => {
        const response = await business_owner_all_lia_list(pagination.per_page, pagination.page, search)
        if (response.code == 200) {
            setTotalLiaStaff(response.count.totalLia)
            setLiaStaff(response.result)
            setTotalActiveLia(response.count.activeLia)
            setTotalInActiveLia(response.count.inActiveLia)
        }
    }

    const fetchMoreData = async () => {
        const res = await business_owner_all_lia_list(pagination.page + 1, pagination.per_page)
        if (res.code === 200) {
            const newPosts = res.result;
            setLiaStaff([...newPosts, ...liaStaff])
            if (res.result.length == 0) {
                setPagination((prev) => { return { ...prev, hashMore: false } })
            }
            else {
                setTimeout(() => {
                    setLiaStaff(liaStaff.concat(newPosts))
                }, 1500);
            }
        }
    }
    const handlePageChanges = () => {
        setPagination((prev) => { return { ...prev, page: pagination.page + 1 } })
    }
    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (search) {
            getAllLiaStaff()
        } else {

        }

    }
    const viewStaff = async (id) => {
        setStaffId(id)
        setTpe(type)
        if (id) {
            route.push("/busines/owner/editLia")
        }
    }

    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-12">
                            <h3>All LIA's</h3>
                        </div>
                        <div className={`col-12 ${styles.clientStatus}`}>
                            <ul>
                                <li>
                                    LIA Staffs <span>{totalLiaStaff}</span>
                                </li>
                                <li>
                                    Active LIA <span>{totalActiveLia}</span>
                                </li>
                                <li>
                                    Inactive LIA <span>{totalInActiveLia}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className={styles.searchSection}>
                                        <form>
                                            <div className="col-md-7">
                                                <div className={styles.searchSection}>
                                                    <form>
                                                        <div className="input-group">
                                                            <InputFiled type_name="" placeholder_name="Search by name, id" inputId=""
                                                                input_name="isSearching" class_name="form-control"
                                                                value={isSearching} onChange={(e) => setSearching(e.target.value)}

                                                            />
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
                                <div className={`col-md-5 ${styles.buttonGroup}`}>
                                    <button>Print</button>
                                    <button onClick={() => { route.push("/busines/owner/addLia") }}>+ Add Staff</button>
                                </div>
                                {liaStaff.length == 0 ? <div className={styles.noDataSection}>
                                    <div className={styles.staffImage}>
                                        <img src="/images/nostaff.svg" />
                                    </div>
                                </div>:
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">

                                        <InfiniteScroll
                                            dataLength={liaStaff.length}
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
                                                        <th>DOB</th>
                                                        <th>Mobile<br></br>Email</th>
                                                        <th>Clients</th>
                                                        <th>PPIs</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {/****************** listing of all LIA     *****************/}
                                                    {liaStaff?.filter((flterData) => {
                                                        if (isSearching == "") {
                                                            return flterData
                                                        } else if ((flterData?.fullName?.toLowerCase().includes(isSearching.toLowerCase())) || (flterData?.internalId?.toLowerCase().includes(isSearching.toLowerCase()))) {
                                                            return flterData
                                                        }
                                                    }).map((item, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <td scope="row">{item.internalId}</td>
                                                                <td>{item.roleId?.role == "liaAgent" ? "LIA Agent" : item.roleId?.role}</td>
                                                                <td>{item.fullName}</td>
                                                                <td>{moment(item.dob).format("Do MMM YYYY")}</td>
                                                                <td> {item.phoneNumberCountryCode} {item.phoneNumber} <br></br><a >{item.email}</a></td>
                                                                <td>{item.countClient}</td>
                                                                <td>{item.allPpi}</td>
                                                                <td >{item.isActive ? <span style={{ color: "#05CE84" }}>Active </span> : <span style={{ color: "red" }}>{item?.liveStatus} </span>}</td>
                                                                <td >
                                                                    {/* <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button> */}
                                                                    {/* <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`} >View</button> */}
                                                                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`} onClick={() => { viewStaff(item._id) }}>View</button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    })
                                                    }

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
export default LIAS;