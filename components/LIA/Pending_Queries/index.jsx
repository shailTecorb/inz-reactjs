import { Fragment } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";
import { business_owner_view_all_query } from "../../helpers/business_owner_service";
import { useEffect } from "react";
import React, { useState } from 'react'
import moment from "moment";
const PendingQueries = () => {

    const route = useRouter()
    const [totalQueries, setTotalQueries] = useState(0)
    const [totalAnswerQueries, setTotalAnswerQueries] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        getAllLiaStaff()
    }, [])

    const getAllLiaStaff = async () => {
        const response = await business_owner_view_all_query("")
        setTotalQueries(response.total)
        setTotalAnswerQueries(response.totalAnswerQueries)
        setData(response.result)
    }

    const list = data?.map((item, i) => {
        return (
            <tr key={i}>
                <td scope="row">{i + 1}</td>
                <td>{moment(item.createdAt).format("D MMM YYYY")}</td>
                <td>{item.fullName}<br />{item.clientId.phone}</td>
                <td>{item.lastMessageReceived}</td>
                <td> <select><option> Select Reply </option> </select></td>

                {/* <td style={{ color: "#05CE84" }}>{item.isActive}</td> */}
                <td >
                    <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Send</button>
                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>TRF</button>
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
                            <h3>Pending Queries</h3>
                        </div>
                        <div className={`col-12 ${styles.clientStatus}`}>
                            <ul>
                                <li>
                                    Total Pending Queries <span>{totalQueries}</span>
                                </li>
                                <li>
                                    Answered Queries <span>{totalAnswerQueries}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className={styles.searchSection}>
                                        <form>
                                            <div className="input-group">
                                                <InputFiled type_name="email" placeholder_name="Search by name, id" inputId="Email" input_name="" class_name="form-control" />
                                                <div className="input-group-append">
                                                    <a className="btn btn-secondary" href="/search=">
                                                        <button><i className="fa fa-search"></i></button>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* <div className={`col-md-5 ${styles.buttonGroup}`}>
                                    <button>Print</button>
                                    <button onClick={()=>{route.push("/busines/owner/addLia")}}>+ Add Staff</button>
                                </div> */}
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">
                                        <table class="table table-striped">
                                            <thead >
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Date</th>
                                                    <th>Client Name <br />Mobile Number</th>
                                                    <th>Last Massege Received</th>
                                                    <th>Reply</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                {list}

                                            </tbody>
                                        </table>
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
export default PendingQueries;