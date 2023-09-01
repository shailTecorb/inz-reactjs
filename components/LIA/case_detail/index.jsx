import InputFiled from "../../Auth/Common/input_filed"
import styles from "../../../styles/form.module.scss"
const CaseDetail = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <h3 className="">Case Details</h3>
                        <div className={`col-12 ${styles.caseDetailStatus}`}>
                            <ul> 
                                <li>
                                Idle for<span>30 Days</span>
                                </li>
                                <li>
                                Last Updated On<span>23 Sep 2021</span>
                                </li>
                             </ul>
                        </div>
                        <div className={styles.formArea}>
                            <div className="row">
                                <h4 className="col-md-5 mb-2 mt-2">Case 27</h4>
                                <div className={`col-md-7 pl-0 ${styles.ButtonGroup}`}>
                                    <button className={`${styles.SandBtn} mt-0 mr-2`} style={{width : "26%"}} >File Note</button>
                                    <button className={`${styles.SandBtn} mt-0 mr-2`} style={{width : "30%"}} >Documents</button>
                                    <button className={`${styles.SandBtn} mt-0`} style={{width : "39%"}} >Reminders/Tasks</button>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-md-12">
                                   
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Full Name</label>
                                                <InputFiled
                                                    type_name="text"
                                                    placeholder_name="Full Name"
                                                    inputId="Name"
                                                    input_name="name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>Country of VISA</label>
                                                <select class="form-control" name="country"  size="0">
                                                        <option  value="Am">AM</option>
                                                        <option  value="Pm">PM</option>
                                                    </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <label>VISA Status</label>
                                                <select class="form-control"  name="endDate"  >
                                                        <option  value="Am">AM</option>
                                                        <option  value="Pm">PM</option>
                                                    </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={`col-md-3 ml-auto text-right ${styles.ButtonGroup}`}>
                                            <button className={styles.SaveBtn} >Update</button>

                                        </div>
                                        <div className={`col-md-3  ${styles.ButtonGroup}`}>
                                            <button className={styles.SandBtn} >INZ Email</button>

                                        </div>
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
export default CaseDetail