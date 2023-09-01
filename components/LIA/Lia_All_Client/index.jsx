import styles from "../../../styles/query.module.scss"
import InputFiled from "../../Auth/Common/input_filed";
const LiaAllClient = () => {
    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-12">
                        <h3>Cases/Queries</h3>
                    </div>
                    <div className={`col-12 ${styles.clientStatus}`}>
                        <ul>
                            <li>
                                Active Clients <span>23</span>
                            </li>
                            <li>
                                On hold Clients <span>23</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <ul className={`nav nav-tabs ${styles.NavTabs}`}>
                            <li className={styles.active}>
                                <a href="#1" data-toggle="tab">Active Cases (Pending)</a>
                            </li>
                            <li>
                                <a href="#2" data-toggle="tab">Active Cases (After Completion) </a>
                            </li>
                            <li>
                                <a href="#3" data-toggle="tab">In-Active Cases</a>
                            </li>
                            <li>
                                <a href="#4" data-toggle="tab">Potential Client Cases</a>
                            </li>
                        </ul>
                        <div className={`tab-content ${styles.TabContent}`}>
                            <div className="tab-pane active" id="1">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className={styles.searchSection}>
                                            <form>
                                                <div className="input-group">
                                                    <InputFiled type_name="email" placeholder_name="Search by name, id, or internal" inputId="Email" input_name="" class_name="form-control"/>
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
                                        <button>INZ Email</button>
                                        <button>Send Bulk Emails</button>
                                    </div> */}
                                    <div className={`col-12 ${styles.tableArea}`}>
                                        <div className="table-responsive ">
                                            <table class="table table-striped">
                                                <thead >
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Full Name of Client</th>
                                                        <th>Country of VISA</th>
                                                        <th>VISA Type</th>
                                                        <th>Last Updated</th>
                                                        <th>Idle for Days</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td scope="row">1</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">2</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">3</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">4</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">5</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">6</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="2">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className={styles.searchSection}>
                                            <form>
                                                <div className="input-group">
                                                    <InputFiled type_name="email" placeholder_name="Search by name, id, or internal" inputId="Email" input_name="" class_name="form-control" />
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
                                                        <th>Full Name of Client</th>
                                                        <th>Country of VISA</th>
                                                        <th>VISA Type</th>
                                                        <th>Last Updated</th>
                                                        <th>Idle for Days</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">1</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">2</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">3</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">4</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">5</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">6</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="3">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className={styles.searchSection}>
                                            <form>
                                                <div className="input-group">
                                                    <InputFiled type_name="email" placeholder_name="Search by name, id, or internal" inputId="Email" input_name="" class_name="form-control" />
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
                                                        <th>Full Name of Client</th>
                                                        <th>Country of VISA</th>
                                                        <th>VISA Type</th>
                                                        <th>Last Updated</th>
                                                        <th>Idle for Days</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">1</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">2</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">3</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">4</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                            <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">5</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">6</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane" id="4">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className={styles.searchSection}>
                                            <form>
                                                <div className="input-group">
                                                    <InputFiled type_name="email" placeholder_name="Search by name, id, or internal" inputId="Email" input_name="" class_name="form-control"/>
                                                    {/* <input type="text" className="form-control" placeholder="What do you want to learn?" id="test" value="" /> */}
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
                                                        <th>Full Name of Client</th>
                                                        <th>Country of VISA</th>
                                                        <th>VISA Type</th>
                                                        <th>Last Updated</th>
                                                        <th>Idle for Days</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">1</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">2</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">3</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">4</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">5</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row">6</td>
                                                        <td>Nayan Kumar</td>
                                                        <td>New Zealand</td>
                                                        <td>@Work VISA</td>
                                                        <td>16 Oct 21</td>
                                                        <td class="text-center">01</td>
                                                        <td>
                                                        <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>FIle Notes</button>
                                                            <button className={`${styles.Btn2}  ${styles.BtnWithoutImg}`}>Task</button>
                                                            <button className={`${styles.Btn3}  ${styles.BtnWithoutImg}`}>Reminder</button>
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
    )
}
export default LiaAllClient;