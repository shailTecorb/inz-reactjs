import InputFiled from "../../Auth/Common/input_filed"
import styles from "../../../styles/form.module.scss"
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { view_client_service } from "../../helpers/client_services";
import { useRouter } from "next/router";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { admin_allCountry_list, state_list } from "../../helpers/business_owner_service";
if (typeof window != "undefined") {
    window.jQuery = require("jquery");

}
// const RichTextEditor = dynamic(() => import("../../Business_Owner/summernote"), {
//     ssr: false
// });

const ClientDetail = () => {
    const [data, setData] = useState("")
    const [clientData, setClientData] = useState({
        primaryEmail: "",
        secondaryEmail: "",
        primaryNo: "",
        SecondarryNo: "",
        dob: "",
        maritalStatus: "",
        state: "",
        country: ""
    })
    const [countryList, setCountryList] = useState([])
    const [stateList, setStateList] = useState([])

    let router = useRouter()
    let clientId = router.query?.id

    useEffect(() => {
        clientId && viewClient(clientId)
        GetCountryList()
    }, [clientId])

    const viewClient = async (clientId) => {
        const response = await view_client_service(clientId)
        if (response.code == 200) {
            setData(response.result)
            setClientData((prev) => {
                return {
                    ...prev,
                    primaryEmail: response.result.primaryEmail,
                    secondaryEmail: response.result.secondaryEmail,
                    country: response.result.country?._id,
                    primaryNo: response.result.phoneCountryCode + response.result.phone,
                    state: response.result.state?._id,
                    SecondarryNo: response.result.secondaryPhoneNumber,

                }
            })
            // setNo(response.result?.phone)
        }
    }
    const GetCountryList = async () => {
        let response = await admin_allCountry_list()
        setCountryList(response.result)
    }
  
    
    const handleChange = async(event) => {
        const { name, value } = event.target;
        setClientData({ ...clientData, [name]: value });
        console.log(name)
        if(name=="country"){
            let response = await state_list(value)
            setStateList(response.result)
        }
    }
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
                                            <h6>ID: <span>INZ {`#${data.internalId}`}</span></h6>
                                            <h4>{data.fullName}</h4>
                                            <h5>{data.email}</h5>
                                            <h5>{data.phoneCountryCode} {data.phone}</h5>
                                            <div className={styles.descriptionSec}>
                                                <p>Hi, How are you? What about our next...</p>
                                                <div className={styles.ArrowImg}> <img src="/images/blueleftarrow.svg" /></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={styles.profileBtnGroup}>
                                        <button>Case Priority: <span style={{ color: "#F5D356" }}>Medium</span></button>
                                        <button>D.O.B: <span style={{ color: "#0C101A" }}>{moment(data.dob).format("DD MMM YYYY")}</span></button>
                                        <button>Invoices: <span style={{ color: "#66DFA3" }}>Paid</span></button>
                                        <button>Agreement: <span style={{ color: "#F5D356" }}>Signed</span></button>
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
                                                                <PhoneInput
                                                                    country={'in'}
                                                                    value={clientData.primaryNo}
                                                                    placeholder="Enter phone number"
                                                                    name="phoneNo"
                                                                    // onChange={(phone, country_name, data, value) => { handleOnchangeSecondaryPhone(phone, country_name, data, value); }}
                                                                    disableCountryCode={false}
                                                                    copyNumbersOnly={false}
                                                                    disableCountryGuess={true}
                                                                    countryCodeEditable={false}
                                                                />

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Secondary Mobile Number</label>
                                                                <PhoneInput
                                                                    country={'in'}
                                                                    value={clientData.SecondarryNo}
                                                                    placeholder="Enter phone number"
                                                                    name="phoneNo"
                                                                    // onChange={(phone, country_name, data, value) => { handleOnchangeSecondaryPhone(phone, country_name, data, value); }}
                                                                    disableCountryCode={false}
                                                                    copyNumbersOnly={false}
                                                                    disableCountryGuess={true}
                                                                    countryCodeEditable={false}
                                                                />

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
                                                                    value={clientData.primaryEmail}
                                                                    input_name="membership" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Secondary Email</label>
                                                                <InputFiled
                                                                    type_name="text"
                                                                    placeholder_name=""
                                                                    value={clientData.secondaryEmail}
                                                                    inputId="License"
                                                                    input_name="license" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>D.O.B <span className={styles.required}>*</span></label>
                                                                <DatePicker
                                                                    className="form-control"
                                                                    name="dob"
                                                                    selected={clientData.dob ? new Date(clientData.dob) : null}
                                                                    dateFormat="MM/dd/yyyy"
                                                                    dropdownMode="scroll"
                                                                    showYearDropdown={true}
                                                                    dateFormatCalendar="MMMM"
                                                                    yearDropdownItemNumber={70}
                                                                    scrollableYearDropdown={true}
                                                                    // onChange={date => handleDobResponse(date)}
                                                                    autoComplete="off"
                                                                    maxDate={moment().subtract(16, 'years')._d}

                                                                />
                                                                <img src="/images/calendar.svg" alt="email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Marital Status</label>

                                                                <select class="form-control" name="maritalStatus" value={clientData.maritalStatus} onChange={handleChange} size="0">
                                                                    <option value="">Select </option>
                                                                    <option value="Married">Married</option>
                                                                    <option value="single">Single</option>
                                                                    <option value="divorced">Divorced</option>
                                                                    <option value="Widowed">Widowed</option>
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
                                                                <select class="form-control" name="country" size="0" value={clientData.country} onChange={(e)=>{handleChange(e)}}>
                                                                    <option value="">Select Country</option>
                                                                    {countryList?.map((li, index) => <option key={index} value={li._id}>{li.countryName}</option>)}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>State/Province <span className={styles.required}>*</span></label>
                                                                <select class="form-control" name="state" size="0" value={clientData.state} onChange={(e)=>{handleChange(e)}}>
                                                                    <option value="">select </option>
                                                                    {stateList?.map((li, index) => <option key={index} value={li._id}>{li.stateName}</option>)}
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
export default ClientDetail