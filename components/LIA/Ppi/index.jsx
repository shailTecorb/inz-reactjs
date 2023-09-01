import { Fragment } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";

const PPI = () => {
    const route = useRouter()
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
                                    LIA Staffs <span>23</span>
                                </li>
                                <li>
                                Active LIA <span>23</span>
                                </li>
                                <li>
                                Inactive LIA <span>23</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className={styles.searchSection}>
                                        <form>
                                            <div className="input-group">
                                                <InputFiled type_name="email" placeholder_name="Search by name, id" inputId="Email" input_name="" class_name="form-control"/>
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
                                    <button>Print</button>
                                    <button>+ Add Staff</button>
                                </div>
                                <div className={`col-12 ${styles.tableArea}`}>
                                    <div className="table-responsive ">
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
                                                <tr>
                                                    <td scope="row">097364</td>
                                                    <td>Supervisor</td>
                                                    <td>Rohit Sharma</td>
                                                    <td>13 Sep 2008</td>
                                                    <td>+91 8076633121 <br></br><a href="#">abc@gmail.com</a></td>
                                                    <td>10</td>
                                                    <td>10</td>

                                                    <td style={{ color: "#05CE84" }}>Approved</td>
                                                    <td >
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">097364</td>
                                                    <td>Supervisor</td>
                                                    <td>Rohit Sharma</td>
                                                    <td>13 Sep 2008</td>
                                                    <td>+91 8076633121 <br></br><a href="#">abc@gmail.com</a></td>
                                                    <td>20</td>
                                                    <td>10</td>

                                                    <td style={{ color: "#FF3A3A" }}>Declined</td>
                                                    <td >
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">097364</td>
                                                    <td>Supervisor</td>
                                                    <td>Rohit Sharma</td>
                                                    <td>13 Sep 2008</td>
                                                    <td>+91 8076633121 <br></br><a href="#">abc@gmail.com</a></td>
                                                    <td>13</td>
                                                    <td>10</td>

                                                    <td style={{ color: "#FF3A3A" }}>Declined</td>
                                                    <td >
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">097364</td>
                                                    <td>Supervisor</td>
                                                    <td>Rohit Sharma</td>
                                                    <td>13 Sep 2008</td>
                                                    <td>+91 8076633121 <br></br><a href="#">abc@gmail.com</a></td>
                                                    <td>10</td>
                                                    <td>10</td>

                                                    <td style={{ color: "#05CE84" }}>Approved</td>
                                                    <td >
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">097364</td>
                                                    <td>Supervisor</td>
                                                    <td>Rohit Sharma</td>
                                                    <td>13 Sep 2008</td>
                                                    <td>+91 8076633121 <br></br><a href="#">abc@gmail.com</a></td>
                                                    <td>19</td>
                                                    <td>10</td>

                                                    <td style={{ color: "#05CE84" }}>Approved</td>
                                                    <td >
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">097364</td>
                                                    <td>Supervisor</td>
                                                    <td>Rohit Sharma</td>
                                                    <td>13 Sep 2008</td>
                                                    <td>+91 8076633121 <br></br><a href="#">abc@gmail.com</a></td>
                                                    <td>23</td>
                                                    <td>10</td>
                                                     
                                                    <td style={{ color: "#FF3A3A" }}>Expired</td>
                                                    <td >
                                                        <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
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
export default PPI;