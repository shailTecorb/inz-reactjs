import InputFiled from "../../Auth/Common/input_filed";
import { Fragment } from "react";
import styles from "../../../styles/query.module.scss"
const VisaStatus = () => {
    return (
        <Fragment>
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                <div className="col-md-9 m-auto">
                <div className="row">
                    <div className="col-7">
                        <h3>Visa Status</h3>
                    </div>
                    <div className={`col-md-5 ${styles.buttonGroup}`}>
                       <button className={styles.downloadBtn}>Download</button>
                       <button className={styles.downloadBtn}>
                           <img src="/images/printing.svg" style={{marginTop: "-2px"}} /> Print</button>
                        </div>
                    <div className="col-12">
                        <div className="row">
                            <div className={`col-12 ${styles.tableArea}`}>
                                <div className="table-responsive ">
                                    <table class="table table-striped">
                                        <thead >
                                            <tr>
                                                <th>ID</th>
                                                <th>Status Title</th>
                                                <th>updated on</th>
                                                <th>Arrange Poistion</th>
                                           </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">1</td>
                                                <td>Initial Consulation Completed</td>
                                                <td>13 Sep 2008</td>
                                                <td >
                                                    <button className={`${styles.Btn2} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/downarrow.svg" /></button>
                                                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/uparrow.svg" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td scope="row">2</td>
                                                <td>Initial Consulation Completed</td>
                                                <td>13 Sep 2008</td>
                                                <td >
                                                    <button className={`${styles.Btn2} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/downarrow.svg" /></button>
                                                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/uparrow.svg" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td scope="row">3</td>
                                                <td>Initial Consulation Completed</td>
                                                <td>13 Sep 2008</td>
                                                <td >
                                                    <button className={`${styles.Btn2} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/downarrow.svg" /></button>
                                                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/uparrow.svg" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td scope="row">4</td>
                                                <td>Initial Consulation Completed</td>
                                                <td>13 Sep 2008</td>
                                                <td >
                                                    <button className={`${styles.Btn2} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/downarrow.svg" /></button>
                                                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/uparrow.svg" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td scope="row">5</td>
                                                <td>Initial Consulation Completed</td>
                                                <td>13 Sep 2008</td>
                                                <td >
                                                    <button className={`${styles.Btn2} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/downarrow.svg" /></button>
                                                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/uparrow.svg" /></button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td scope="row">6</td>
                                                <td>Initial Consulation Completed</td>
                                                <td>13 Sep 2008</td>
                                                <td >
                                                    <button className={`${styles.Btn2} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/downarrow.svg" /></button>
                                                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}><img className="mx-1" src="/images/uparrow.svg" /></button>
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
            </div>
        </div>
    </Fragment>
    )
}
export default VisaStatus;