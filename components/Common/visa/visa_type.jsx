import InputFiled from "../../Auth/Common/input_filed";
import { Fragment } from "react";
import styles from "../../../styles/query.module.scss"

const VisaType = () => {
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <h3 className="">Visa type </h3>
                              <div className={styles.visaStatus}>
                                    <div className="row">
                                        <div className={`col-9 pr-0 ${styles.clientStatus}`}>
                                            <ul>
                                                <li>
                                                    Total Selected Visa Types <span>23</span>
                                                </li>
                                                <li>
                                                    Not Selected Visa Types <span>23</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={`col-md-3 pr-0 mt-2 ${styles.buttonGroup}`}>
                                    <button>Add Visa Type</button>
                                </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className={styles.searchSection}>
                                                <div className="input-group">
                                                    <InputFiled type_name="email" placeholder_name="Search by name, id, or internal" inputId="Email" input_name="" class_name="form-control"/>
                                                    <div className="input-group-append">
                                                        <a className="btn btn-secondary" href="/search=">
                                                            <button><i className="fa fa-search"></i></button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={`col-12`}>
                                            <div className={styles.visaStatusDiv}>
                                        <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox1" name="checkbox" type="checkbox"  />
                                                        <label for="checkbox1" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox2" name="checkbox" type="checkbox"  />
                                                        <label for="checkbox2" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox3" name="checkbox" type="checkbox"  />
                                                        <label for="checkbox3" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox4" name="checkbox" type="checkbox"  />
                                                        <label for="checkbox4" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox5" name="checkbox" type="checkbox"  />
                                                        <label for="checkbox5" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox6" name="checkbox" type="checkbox"  />
                                                        <label for="checkbox6" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                                    </div>
                                                </div>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox7" name="checkbox" type="checkbox"  />
                                                        <label for="checkbox7" className={styles.checkboxLabel}>Permanent Address is same as the Current Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                    <div className="col-md-12 text-right">
                                                    <button className={`${styles.submitBtn}`}>Update</button>
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
export default VisaType;