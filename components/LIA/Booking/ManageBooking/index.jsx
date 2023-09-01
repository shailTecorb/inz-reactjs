import React, { useState } from 'react'
import { useRouter } from 'next/router';
import InputFiled from "../../../Auth/Common/input_filed";
import styles from "../../../../styles/form.module.scss";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const ManageBooking = () => {

    const [addData, setAddData] = useState({
        reason: "",
        country: "",
        visatype: "",
        meetingtype: "",
        paymentstatus: "",
        date: (new Date()),
        time: (new Date()),
        description: ""
    })
    const [startTime, setStartTime] = useState(new Date());
    const [date, setDate] = useState(new Date())
    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddData({ ...addData, [name]: value });
    }

    const submit = (e) => {
        e.preventDefault()
        console.log(addData)
    }

    

    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-9 m-auto">
                        <h3 className="">Manage Booking</h3>
                        <div className={styles.formArea}>
                            <form onSubmit={submit}>
                                <div class="row">
                                    {/* <h4 className="col-md-12"> Booking ID # | Nayan Kumar </h4> */}
                                    <h5 className="col-md-12">Booking ID <span>93485389</span><a>Nayan Kumar</a>CRM ID <span>#8923694</span> </h5>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Reason </label>
                                            <select class="form-control" name="reason" placeholder_name="visa Related" value={addData.reason} onChange={handleChange} size="0">
                                                <option value="online">Visa Related</option>
                                                <option value="offline">Visa Related</option>
                                            </select>



                                            {/* <InputFiled 
                                            type_name="text" 
                                            placeholder_name="reason" 
                                            inputId="reason" 
                                            input_name="reason"
                                            onChange={handleChange}
                                            value={addData.reason} /> */}
                                        </div>
                                    </div>

                                </div>

                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Country </label>
                                            <CountryDropdown class="form-control"
                                                input_name="country"
                                                size="0"
                                                value={addData.country}
                                                onChange={(val) => { setAddData((prev) => { return ({ ...prev, country: val }) }); }}
                                            // onChange={(e) =>{handleChange(e)}}
                                            />



                                            {/* <select class="form-control" name="cc_exp_mo" size="0">
                                                    <option value="01">Mr.</option>
                                                    <option value="01">Mrs.</option>
                                                </select> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Visa Type </label>
                                            <select class="form-control" value={addData.visatype} onChange={handleChange} name="visatype" size="0">
                                                <option value="mr">Mr.</option>
                                                <option value="mrs">Mrs.</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <h4 className="col-md-12 mt-3">Appointment Details</h4>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Type of Meeting </label>
                                            <select class="form-control" name="meetingtype" value={addData.meetingtype} onChange={handleChange} size="0">
                                                <option value="face to face ">Face to Face</option>
                                                <option value="videocall">In Office</option>
                                                <option value="videocall">video call</option>
                                                <option value="videocall"> On voice call</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Payment Status</label>
                                            <select class="form-control" name="paymentstatus" value={addData.paymentstatus} onChange={handleChange} size="0">
                                                <option value="online">Online</option>
                                                <option value="offline">Offline</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Date</label>

                                            <DatePicker
                                                className="form-control"
                                                name="date"
                                                selected={date}
                                                dateFormat="MM/dd/yyyy"
                                                dropdownMode="scroll"
                                                minDate={new Date()}
                                                dateFormatCalendar="MMMM"
                                                yearDropdownItemNumber={15}
                                                scrollableYearDropdown={true}
                                                onChange={(date) => setDate(date)}
                                                autoComplete="off"
                                                value={addData.date}
                                            />

                                            {/* <InputFiled 
                                            type_name="text" 
                                            placeholder_name="" 
                                            inputId="House" 
                                            input_name="house" /> */}
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Time</label>
                                            <DatePicker
                                                selected={startTime}
                                                onChange={(time) => setStartTime(time)}
                                                showTimeSelect
                                                name="time"
                                                input_name="time"
                                                value={addData.time}
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />

                                            {/* <InputFiled 
                                            type_name="text" 
                                            placeholder_name="" 
                                            inputId="House" 
                                            input_name="house" /> */}
                                            <img src="/images/calendar.svg" alt="email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Booking Description </label>

                                            <textarea
                                                // type_name="text"                      
                                                placeholder_name=""
                                                inputId="description"
                                                value={addData.description}
                                                input_name="description"
                                                onChange={handleChange}
                                                name="description"
                                            />

                                            {/* <textarea
                                            input_name="description"
                                             value={addData.description}
                                             onChange={(e) => { setAddData((prev) => { return ({ ...prev, description: e}) }); }} 
                                          // onChange={handleChange}
                                          ></textarea> */}
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className={`col-md-9 ${styles.ButtonGroup}`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                            </div>
                                            <div className="col-md-4">
                                            </div>
                                            <div className="col-md-4">
                                                <button className={styles.SandBtn} >Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManageBooking