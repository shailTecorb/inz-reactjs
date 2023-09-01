import { Fragment, useEffect, useState } from "react";
import styles from "../../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../../Auth/Common/input_filed";
import { list_of_staff_service } from "../../../helpers/business_owner_service";
const PendingRequest = () => {
    const [allStaff, setStafflist] = useState([])
    const route = useRouter()

    useEffect(async () => {
        const response = await list_of_staff_service()
        setStafflist(response.result)
        console.log(response)
    }, [])


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
                                    Total Pending Bookings <span>23</span>
                                </li>
                                <li>
                                    Completed Bookings <span>23</span>
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
                                <div className={`col-md-5 ${styles.buttonGroup}`}>
                                </div>
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">
                                        <table class="table table-striped">
                                            <thead >
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Date<br></br>Time</th>
                                                    <th>Client Name<br></br>Mobile Number</th>
                                                    <th>Last Message Received</th>
                                                    <th>Reply</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <td scope="row">1</td>
                                                    <td>05 Oct 21<br></br>05:00 PM</td>
                                                    <td><a href="#">Rohit Sharma</a> <br></br><a href="#">+91 9596999699</a></td>
                                                    <td>How to proceed with immigration?</td>
                                                    <td style={{ color: "#05CE84" }}>Approved</td>
                                                    <td >
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>Chat</button>
                                                        <button className={`${styles.Btn5} ${styles.BtnWithoutImg}`}>Manage Booking</button>
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>TRF</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td scope="row">1</td>
                                                    <td>05 Oct 21<br></br>05:00 PM</td>
                                                    <td><a href="#">Rohit Sharma</a> <br></br><a href="#">+91 9596999699</a></td>
                                                    <td>How to proceed with immigration?</td>
                                                    <td style={{ color: "#05CE84" }}>Approved</td>
                                                    <td >
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>Chat</button>
                                                        <button className={`${styles.Btn5} ${styles.BtnWithoutImg}`}>Manage Booking</button>
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>TRF</button>
                                                    </td>
                                                </tr>
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

export default PendingRequest;