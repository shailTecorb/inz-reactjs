
import styles from "../../../styles/form.module.scss"
import dynamic from 'next/dynamic';
import InputFiled from "../../Auth/Common/input_filed";
if(typeof window !="undefined"){
window.jQuery = require("jquery");
    
}
const BusinessClientDetail = () => { 
    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <h3 className="">Client Details</h3>
                        <div className={styles.clientDetail}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className={styles.profileDetail}>
                                        <div className={styles.profileImg}>
                                            <img src="" />
                                        </div>
                                        <div className={styles.profileContent}>
                                            <h6>ID: <span>INZ #872364832</span></h6>
                                            <h4>Rajni Garg</h4>
                                            <h5>rajni45garg@gmail.com</h5>
                                            <h5>+91 9065524562</h5>
                                            <div className={styles.descriptionSec}>
                                                <p>Hi, How are you? What about our next...</p>
                                                <div className={styles.ArrowImg}> <img src="/images/blueleftarrow.svg" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.profileBtnGroup}>
                                        <button>Case Priority: <span style={{color : "#F5D356"}}>Medium</span></button>
                                        <button>D.O.B: <span style={{color : "#0C101A"}}>31 Dec 1994</span></button>
                                        <button>Invoices: <span style={{color : "#66DFA3"}}>Paid</span></button>
                                        <button>Agreement: <span style={{color : "#F5D356"}}>Signed</span></button>
                                    </div>
                                </div>
                                <div className={`col-md-4 ${styles.BtnGroup}`}>
                                    <div className={`dropdown ${styles.dropDown} `}>
                                        <button className={`btn btn-warning dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown"><span>Switch Profile</span>Rajni Garg
                                          <span className={styles.Arrow}></span></button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Phantom</a></li>
                                            <li><a href="#">Cluster</a></li>
                                        </ul>
                                    </div>
                                    <button className={styles.btnBox}>
                                        <img src="/images/reminder.svg" className="mr-2" /><span>Reminders</span> <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} />
                                    </button>
                                    <button className={styles.btnBox}>
                                        <img src="/images/task.svg" className="mr-2" /><span>Tasks</span> <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} />
                                    </button>
                                    <div className={`dropdown ${styles.dropDown1}`}>
                                        <button className={`btn btn-warning dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown"> <img src="/images/visa1.svg" className="mr-2" /><span>VISA Applications</span>
                                            <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} /></button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Phantom</a></li>
                                            <li><a href="#">Cluster</a></li>
                                        </ul>
                                    </div>
                                    <div className={`dropdown ${styles.dropDown1}`}>
                                        <button className={`btn btn-warning dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown">   <img src="/images/visa2.svg" className="mr-2" /><span>VISA Status</span>

                                            <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} /></button>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Phantom</a></li>
                                            <li><a href="#">Cluster</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={`${styles.clientDetail} mt-4`}>
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="">Client Details</h3>
                                </div>
                                <div className="col-12">
                                    <ul className={`nav nav-tabs ${styles.NavTabs}`}>
                                        <li className={styles.active}>
                                            <a href="#1" data-toggle="tab">Full Profile</a>
                                        </li>
                                        <li>
                                            <a href="#2" data-toggle="tab">File Notes</a>
                                        </li>
                                        <li>
                                            <a href="#3" data-toggle="tab">Document Centre</a>
                                        </li>
                                        <li>
                                            <a href="#4" data-toggle="tab">Agreements</a>
                                        </li>
                                        <li>
                                            <a href="#5" data-toggle="tab">Invoices</a>
                                        </li>
                                        <li>
                                            <a href="#6" data-toggle="tab">VISA</a>
                                        </li>
                                    </ul>
                                    <div className={`tab-content ${styles.TabContent}`}>
                                        <div className="tab-pane active" id="1">

                                            <div className={`${styles.formArea} p-0`}>
                                                <form>
                                                    <div className="row">
                                                    <h4 className="col-md-7">Profile Details</h4>
                                                <div className="col-md-5 text-right">
                                                    <button className={`${styles.submitBtn} ml-3`}>Edit Profile</button>
                                                </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Primary Mobile Number <span className={styles.required}>*</span> </label>
                                                                <InputFiled
                                                                    type_name="text"
                                                                    placeholder_name=""
                                                                    inputId="MNumber"
                                                                    input_name="MNumber" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Secondary Mobile Number</label>
                                                                <InputFiled
                                                                    type_name="text"
                                                                    placeholder_name=""
                                                                    inputId="SNumber"
                                                                    input_name="SNumber" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Primary Email <span className={styles.required}>*</span></label>
                                                                <InputFiled
                                                                    type_name="text"
                                                                    placeholder_name=""
                                                                    inputId="Membership"
                                                                    input_name="membership" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Secondary Email</label>
                                                                <InputFiled
                                                                    type_name="text"
                                                                    placeholder_name=""
                                                                    inputId="License"
                                                                    input_name="license" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>D.O.B <span className={styles.required}>*</span></label>
                                                                <InputFiled
                                                                    type_name="text"
                                                                    placeholder_name=""
                                                                    inputId="Landline"
                                                                    input_name="landline"
                                                                />
                                                                <img src="/images/calendar.svg" alt="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Marital Status</label>
                                                                <select
                                                                    class="form-control"
                                                                    name="maritalStatus"
                                                                    size="0">
                                                                    <option value="01">Mr.</option>
                                                                    <option value="02">Mrs.</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <h4 className="col-md-12">Current Address</h4>
                                                    </div>
                                                    <div class="row">
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Country <span className={styles.required}>*</span></label>
                                                                <select class="form-control" name="cc_exp_mo" size="0">
                                                                    <option value="01">Mr.</option>
                                                                    <option value="02">Mrs.</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>State/Province <span className={styles.required}>*</span></label>
                                                                <select class="form-control" name="cc_exp_mo" size="0">
                                                                    <option value="01">Mr.</option>
                                                                    <option value="02">Mrs.</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="2">
                                            <div className="row">
                                                <h4 className="col-md-12">File Notes</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className={`dropdown ${styles.fileNote}`}>
                                                        <button className={`btn dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown">Select Template</button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Phantom</a></li>
                                                            <li><a href="#">Cluster</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className={`dropdown ${styles.fileNote}`}>
                                                        <button className={`btn dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown">Visa Filter</button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Phantom</a></li>
                                                            <li><a href="#">Cluster</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={`col-md-12`}>
                                                    <div className={`${styles.formArea} ${styles.templateSec}`}>
                                                        <form>
                                                            <div class="row">
                                                                <div className="col-md-12">
                                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                                        <label>CC</label>
                                                                       {/* <RichTextEditor /> */}
                                                                    </div>
                                                                </div>
                                                                </div>
                                                                {/* <div class="row">
                                                                <div className="col-md-12">
                                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                                        <label>Subject</label>
                                                                        <InputFiled
                                                                            type_name="text"
                                                                            placeholder_name=""
                                                                            inputId="SNumber"
                                                                            input_name="SNumber" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div className="col-md-12">
                                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                                        <label>Body</label>
                                                                        <InputFiled
                                                                            type_name="text"
                                                                            placeholder_name=""
                                                                            inputId="SNumber"
                                                                            input_name="SNumber" />
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                        </form>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-12 text-right">
                                                    <button className={`${styles.submitBtn}`}>Send</button>
                                                     </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="3">
                                            <div className="row">
                                                <h4 className="col-md-7">My Document Centre <span>| Family Member 1 (Husband)</span></h4>
                                                <div className="col-md-5 text-right">
                                                    <button className={`${styles.submitBtn} ml-3`}>Send Agreement</button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className={`dropdown ${styles.fileNote}`}>
                                                        <button className={`btn dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown">VISA Category</button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Phantom</a></li>
                                                            <li><a href="#">Cluster</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className={`dropdown ${styles.fileNote}`}>
                                                        <button className={`btn dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown">INZ Form Sample</button>
                                                        <ul className="dropdown-menu">
                                                            <li><a href="#">Phantom</a></li>
                                                            <li><a href="#">Cluster</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={`col-12 ${styles.sliderSec}`}>
                                                    <div className={styles.sliderBox}>Identity Documents</div>
                                                    <div className={styles.sliderBox}>Name of List 4 | 15 Oct 21</div>
                                                    <div className={styles.sliderBox}>Name of List 5 | 15 Oct 21</div>
                                                    <div className={styles.sliderBox}>Name of List 6 | 15 Oct 21</div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={`col-12 ${styles.tableArea}`}>
                                                    <div className="table-responsive ">
                                                        <table class="table table-striped">
                                                            <thead >
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Document Title Size</th>
                                                                    <th>Uploaded On Uploaded By</th>
                                                                    <th>Description</th>
                                                                    <th style={{ width: "297px" }}>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Passport<span>Size:<a> 10 mb</a></span></td>
                                                                    <td>05 Oct 2021 <br></br>Nayan Kumar</td>
                                                                    <td>Lorem Ipsum is simply dummy text.</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                        <button className={styles.Btn2}>Update</button>
                                                                        <button className={styles.Btn3}>Add Docs</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Passport<span>Size:<a> 10 mb</a></span></td>
                                                                    <td>05 Oct 2021 <br></br>Nayan Kumar</td>
                                                                    <td>Lorem Ipsum is simply dummy text.</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                        <button className={styles.Btn2}>Update</button>
                                                                        <button className={styles.Btn3}>Add Docs</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Passport<span>Size:<a> 10 mb</a></span></td>
                                                                    <td>05 Oct 2021 <br></br>Nayan Kumar</td>
                                                                    <td>Lorem Ipsum is simply dummy text.</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                        <button className={styles.Btn2}>Update</button>
                                                                        <button className={styles.Btn3}>Add Docs</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">4</th>
                                                                    <td>Passport<span>Size:<a> 10 mb</a></span></td>
                                                                    <td>05 Oct 2021 <br></br>Nayan Kumar</td>
                                                                    <td>Lorem Ipsum is simply dummy text.</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                        <button className={styles.Btn2}>Update</button>
                                                                        <button className={styles.Btn3}>Add Docs</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">5</th>
                                                                    <td>Passport<span>Size:<a> 10 mb</a></span></td>
                                                                    <td>05 Oct 2021 <br></br>Nayan Kumar</td>
                                                                    <td>Lorem Ipsum is simply dummy text.</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                        <button className={styles.Btn2}>Update</button>
                                                                        <button className={styles.Btn3}>Add Docs</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">6</th>
                                                                    <td>Passport<span>Size:<a> 10 mb</a></span></td>
                                                                    <td>05 Oct 2021 <br></br>Nayan Kumar</td>
                                                                    <td>Lorem Ipsum is simply dummy text.</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                        <button className={styles.Btn2}>Update</button>
                                                                        <button className={styles.Btn3}>Add Docs</button>
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
                                                <h4 className="col-md-6">Agreements</h4>
                                                <div className="col-md-6 text-right">
                                                    <button className={styles.submitBtn}>Download</button>
                                                    <button className={`${styles.submitBtn} ml-3`}>Print</button>
                                                    <button className={`${styles.submitBtn} ml-3`}>Send Agreement</button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={`col-12 ${styles.tableArea}`}>
                                                    <div className="table-responsive ">
                                                        <table class="table table-striped">
                                                            <thead >
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Title Size</th>
                                                                    <th>Date Signed Date Sent</th>
                                                                    <th>Client Name</th>
                                                                    <th>Family Member Name</th>
                                                                    <th>Other Party Name</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Agreement Document Name <span>Size:<a> 10 mb</a></span></td>
                                                                    <td>26 Oct 2021 <br></br>27 Oct 2021</td>
                                                                    <td><a href="" >Rishabh Dubey</a></td>
                                                                    <td><a href="" >Nayan Kumar</a></td>
                                                                    <td><a href="" >Rohit Sharma</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Agreement Document Name <span>Size:<a> 10 mb</a></span></td>
                                                                    <td>26 Oct 2021 <br></br>27 Oct 2021</td>
                                                                    <td><a href="" >Rishabh Dubey</a></td>
                                                                    <td><a href="" >Nayan Kumar</a></td>
                                                                    <td><a href="" >Rohit Sharma</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Agreement Document Name <span>Size:<a> 10 mb</a></span></td>
                                                                    <td>26 Oct 2021 <br></br>27 Oct 2021</td>
                                                                    <td><a href="" >Rishabh Dubey</a></td>
                                                                    <td><a href="" >Nayan Kumar</a></td>
                                                                    <td><a href="" >Rohit Sharma</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">4</th>
                                                                    <td>Agreement Document Name <span>Size:<a> 10 mb</a></span></td>
                                                                    <td>26 Oct 2021 <br></br>27 Oct 2021</td>
                                                                    <td><a href="" >Rishabh Dubey</a></td>
                                                                    <td><a href="" >Nayan Kumar</a></td>
                                                                    <td><a href="" >Rohit Sharma</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">5</th>
                                                                    <td>Agreement Document Name <span>Size:<a> 10 mb</a></span></td>
                                                                    <td>26 Oct 2021 <br></br>27 Oct 2021</td>
                                                                    <td><a href="" >Rishabh Dubey</a></td>
                                                                    <td><a href="" >Nayan Kumar</a></td>
                                                                    <td><a href="" >Rohit Sharma</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">6</th>
                                                                    <td>Agreement Document Name <span>Size:<a> 10 mb</a></span></td>
                                                                    <td>26 Oct 2021 <br></br>27 Oct 2021</td>
                                                                    <td><a href="" >Rishabh Dubey</a></td>
                                                                    <td><a href="" >Nayan Kumar</a></td>
                                                                    <td><a href="" >Rohit Sharma</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="5">
                                            <div className="row">
                                                <h4 className="col-md-7">Invoices</h4>
                                                <div className="col-md-5 text-right">
                                                    <button className={styles.submitBtn}>Download</button>
                                                    <button className={`${styles.submitBtn} ml-3`}>Print</button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={`col-12 ${styles.tableArea}`}>
                                                    <div className="table-responsive ">
                                                        <table class="table table-striped">
                                                            <thead >
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Invoice Number</th>
                                                                    <th>Due Date</th>
                                                                    <th>Sent On</th>
                                                                    <th>Payment</th>
                                                                    <th>Due/Over Due Amount</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>#63248623986</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>$767</td>
                                                                    <td>$767</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>#63248623986</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>$767</td>
                                                                    <td>$767</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>#63248623986</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>$767</td>
                                                                    <td>$767</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">4</th>
                                                                    <td>#63248623986</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>$767</td>
                                                                    <td>$767</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">5</th>
                                                                    <td>#63248623986</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>$767</td>
                                                                    <td>$767</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">6</th>
                                                                    <td>#63248623986</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>$767</td>
                                                                    <td>$767</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="6">
                                            <div className="row">
                                                <h4 className="col-md-7">VISA Applications</h4>
                                                <div className="col-md-5 text-right">
                                                    <button className={styles.submitBtn}>Download</button>
                                                    <button className={`${styles.submitBtn} ml-3`}>Print</button>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className={`col-12 ${styles.tableArea}`}>
                                                    <div className="table-responsive ">
                                                        <table class="table table-striped">
                                                            <thead >
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>VISA Type</th>
                                                                    <th>Approved Date</th>
                                                                    <th>Expiry Date</th>
                                                                    <th>VISA Country Name</th>
                                                                    <th>Current Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Student VISA - General</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>New Zealand</td>
                                                                    <td style={{ color: "#42E092" }}>Approved</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Student VISA - General</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>New Zealand</td>
                                                                    <td style={{ color: "#FB7878" }}>Declined</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Student VISA - General</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>New Zealand</td>
                                                                    <td style={{ color: "#42E092" }}>Approved</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">4</th>
                                                                    <td>Student VISA - General</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>New Zealand</td>
                                                                    <td style={{ color: "#FB7878" }}>Declined</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">5</th>
                                                                    <td>Student VISA - General</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>New Zealand</td>
                                                                    <td style={{ color: "#42E092" }}>Approved</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">6</th>
                                                                    <td>Student VISA - General</td>
                                                                    <td>05 Oct 2021</td>
                                                                    <td>10 Dec 2021</td>
                                                                    <td>New Zealand</td>
                                                                    <td style={{ color: "#FB7878" }}>Declined</td>
                                                                    <td>
                                                                        <button className={styles.Btn1}>View</button>
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
                </div>
            </div>
        </div>
    )
}
export default BusinessClientDetail