import { Fragment } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";
const Report = () => {
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reports</h3>
                        </div>
                        
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className={styles.searchSection}>

                                    </div>
                                </div>
                                <div className={`col-md-5 ${styles.buttonGroup}`}>
                                  
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )


}

export default Report;