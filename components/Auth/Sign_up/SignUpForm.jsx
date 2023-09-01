import React from "react";

import styles from "../../../styles/form.module.scss";
import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";
import InputFiled from "../Common/input_filed";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  business_owner_sign_up_form,
  get_business_owner,
  subscription_list,
  business_type,
} from "../../helpers/business_owner_service";
import axios from "axios";

const SignUpForm = () => {
  const route = useRouter();
  const emailRegex =
    /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
  const phoneReg = /^[0-9\b]+$/;
  const [businessType, setBusinessType] = useState([]);
  const [addData, setAddData] = useState({
    fullName: "",
    businessType: "",
    companyName: "",
    subscriptionType: "",
    subscriptionTenure: "",
    gender: "",
    email: "",
    // status: "",
    address: "",
  });
  // const [open, setOpen] = useState(false)
  const [subscriptionList, setSubscriptionList] = useState([]);
  const [image, setImage] = useState();
  const [responseError, setResponseError] = useState("");
  const [error, setError] = useState({
    fullName: "",
    businessType: "",
    companyName: "",
    subscriptionType: "",
    subscriptionTenure: "",
    mobileNo: "",
    landlineNo: "",
    gender: "",
    email: "",
    address: "",
  });
  const [demoImg, setImageDomo] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [phoneNo, setNo] = useState("");
  const [country_Code, set_Country_Code] = useState("+91");
  const [landlineNo, setLandlineNo] = useState(null);
  const [landline_country_Code, setLindline_Country_Code] = useState("+91");

  const handleOnchangePhone = (phone, country, e, data, value) => {
    let name = "phoneNo";
    let country_code = `+${country.dialCode}`;
    let country_name = country.countryCode;
    set_Country_Code(country_code);
    setNo(phone);
    setError((prev) => {
      return {
        ...prev,
        mobileNo: "",
      };
    });
  };
  const handleOnchangeLandline = (phone, country, e, data, value) => {
    let name = "phoneNo";
    let country_code = `+${country.dialCode}`;
    let country_name = country.countryCode;
    setLindline_Country_Code(country_code);
    setLandlineNo(phone);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setAddData({ ...addData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageDomo(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };
  useEffect(() => {
    getBusinessType();
    getSubscriptionList();
    getBusinessOwner();
    getGeoInfo();
  }, []);
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        console.log(data, "data");
        setAddData((prev) => {
          return { ...prev, countryCode: data.country_code };
        });
        setLindline_Country_Code(data.country_calling_code);
        set_Country_Code(data.country_calling_code);
      })
      .catch((error) => {
        // //consolee.log(error);
      });
  };
  const getBusinessType = async () => {
    const response = await business_type();
    if (response.code == 200) {
      setBusinessType(response.result);
    }
  };
  const getSubscriptionList = async () => {
    let perPage = 20;
    let page = 1;
    const response = await subscription_list(perPage, page);
    if (response.code == 200) {
      setSubscriptionList(response.result);
    }
  };

  const getBusinessOwner = async () => {
    const response = await get_business_owner();
    if (response.code == 200) {
      setAddData({
        fullName: response?.result?.ownerName,
        businessType: response?.result?.businessType,
        companyName: response?.result?.companyName,
        subscriptionType: response?.result?.subscriptionType,
        subscriptionTenure: response?.result?.subscriptionTenure,
        gender: response?.result?.gender,
        email: response?.result?.email,
        address: response?.result?.address,
      });
      setImageDomo(response.result.image ? response.result.image : null);
      response.result.mobileNumberCountryCode &&
        setNo(
          String(response.result.mobileNumberCountryCode) +
            String(response.result.mobileNumber)
        );
      set_Country_Code(String(response.result.mobileNumberCountryCode));
      setLindline_Country_Code(String(response.result.landlineCountryCode));
      response.result.landlineNumber &&
        setLandlineNo(
          String(response.result.landlineCountryCode) +
            String(response.result.landlineNumber)
        );
    } else {
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let count = country_Code.length;
    let phone_number = phoneNo;
    phone_number = phone_number?.substring(count - 1);
    let count2 = landline_country_Code.length;
    let landingNo = landlineNo;
    landingNo = landingNo?.substring(count2 - 1);
    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("ownerName", addData.fullName);
    formdata.append("businessType", addData.businessType);
    formdata.append("companyName", addData.companyName);
    formdata.append("address", addData.address);
    formdata.append("subscriptionType", addData.subscriptionType);
    formdata.append("subscriptionTenure", addData.subscriptionTenure);
    formdata.append("mobileNumberCountryCode", country_Code);
    formdata.append("mobileNumber", phone_number);
    formdata.append("landlineCountryCode", landline_country_Code);
    formdata.append("landlineNumber", landingNo);
    formdata.append("email", addData.email);
    formdata.append("gender", addData.gender);
    formdata.append("phoneCountryCodeName", "IN");
    if (!addData.fullName) {
      setError({ ...error, fullName: "Please enter full name" });
    } else if (!addData.businessType) {
      setError({ ...error, businessType: "Please select business type" });
    } else if (!addData.companyName) {
      setError({ ...error, companyName: "Please enter company name " });
    } else if (!addData.subscriptionType) {
      setError({
        ...error,
        subscriptionType: "Please select subscriptionType ",
      });
    } else if (!addData.subscriptionTenure) {
      setError({
        ...error,
        subscriptionTenure: "Please select subscriptionTenure",
      });
    } else if (!emailRegex.test(addData.email)) {
      setError({ ...error, email: "Please enter valid email" });
    } else if (!phoneNo) {
      setError({ ...error, mobileNo: "Please enter mobile number" });
    } else if (!addData.gender) {
      setError({ ...error, gender: "Please select gender" });
    } else if (!addData.address) {
      setError({ ...error, address: "Please enter address" });
    } else {
      setisLoading(true);
      let response = await business_owner_sign_up_form(formdata);

      if (response.code == 200) {
        localStorage.setItem("profileDetails", "true");
        setisLoading(false);
        window.location.href = "/busines/owner/dashboard";
      } else {
        setisLoading(false);
        setResponseError(response.message);
      }
    }
  };
  return (
    <div className={styles.contentWrapper}>
      <div className="container-fuild">
        <div className="row">
          <div className="col-md-9 m-auto">
            <h3 className="">Profile </h3>
            {responseError ? responseError : ""}
            <div className={styles.formArea}>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.NameDetail}>
                      <label htmlFor={`photo`}>
                        <input
                          id={`photo`}
                          type="file"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                          accept=".pdf, .jpeg , .jpg ,.png"
                        />
                        <div className={styles.avatarUpload}>
                          <h5> Profile Picture </h5>
                          <div className={styles.avatarPreview}>
                            <img
                              onChange={handleImageChange}
                              src={demoImg ? demoImg : "/images/camera.svg"}
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div className="col-md-12">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Full Name <span className={styles.required}>*</span>
                        <span className={styles.errorMsg}>
                          {" "}
                          {!addData.fullName ? error.fullName : ""}
                        </span>
                      </label>
                      <InputFiled
                        type_name="text"
                        placeholder_name="Full Name"
                        inputId="fullName"
                        value={addData.fullName}
                        input_name="fullName"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Businees Type
                        <span className={styles.errorMsg}>
                          {" "}
                          {!addData.businessType ? error.businessType : ""}
                        </span>
                      </label>
                      <select
                        class="form-control"
                        value={addData.businessType}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="businessType"
                        size="0"
                      >
                        <option value="">Select</option>
                        {businessType?.map((li, i) => (
                          <option value={li._id}>{li.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Company Name
                        <span className={styles.errorMsg}>
                          {" "}
                          {!addData.companyName ? error.companyName : ""}
                        </span>
                      </label>
                      <InputFiled
                        type_name="text"
                        name="companyName"
                        input_name="companyName"
                        placeholder_name="Company Name"
                        value={addData.companyName}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Subscription Type
                        <span className={styles.errorMsg}>
                          {" "}
                          {!addData.subscriptionType
                            ? error.subscriptionType
                            : ""}
                        </span>
                      </label>
                      <select
                        class="form-control"
                        name="subscriptionType"
                        value={addData.subscriptionType}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        size="0"
                      >
                        <option value="">Select </option>
                        {subscriptionList?.map((li, index) => (
                          <option key={index} value={li._id}>
                            {li.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        {" "}
                        Subscription Tenure
                        <span className={styles.errorMsg}>
                          {" "}
                          {!addData.subscriptionTenure
                            ? error.subscriptionTenure
                            : ""}
                        </span>
                      </label>
                      <select
                        class="form-control"
                        value={addData.subscriptionTenure}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="subscriptionTenure"
                        size="0"
                      >
                        <option value="">Select </option>
                        <option value="Monthly">Monthly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Yearly"> Yearly</option>
                      </select>
                    </div>
                  </div>
                </div>
                {console.log(phoneNo)}
                <div class="row">
                  <div className="col-md-6">
                    <div
                      className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}
                    >
                      <label>Landline Number</label>
                      <PhoneInput
                        country={"in"}
                        value={landlineNo}
                        name="landlineNo"
                        placeholder="Enter Landline Number "
                        onChange={(phone, country_name, data, value) => {
                          handleOnchangeLandline(
                            phone,
                            country_name,
                            data,
                            value
                          );
                        }}
                        disableCountryCode={false}
                        copyNumbersOnly={false}
                        disableCountryGuess={true}
                        countryCodeEditable={false}
                      />

                      {/* <PhoneInput
                                                country={'in'}
                                                value={landlineNo}
                                                name="landlineNo"
                                                placeholder="Enter Landline Number "
                                                onChange={(phone, country_name, data, value) => { handleOnchangeLandline(phone, country_name, data, value); }}
                                                countryCodeEditable={false}
                                            /> */}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}
                    >
                      <label>
                        {" "}
                        Mobile Number
                        <span className={styles.errorMsg}>
                          {" "}
                          {!phoneReg.test(addData.mobileNo)
                            ? error.mobileNo
                            : ""}
                        </span>
                      </label>
                      <PhoneInput
                        country={"in"}
                        value={phoneNo}
                        placeholder="Enter phone number"
                        name="phoneNo"
                        onChange={(phone, country_name, data, value) => {
                          handleOnchangePhone(phone, country_name, data, value);
                        }}
                        countryCodeEditable={false}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Gender
                        <span className={styles.errorMsg}>
                          {" "}
                          {!addData.gender ? error.gender : ""}
                        </span>
                      </label>
                      <select
                        class="form-control"
                        name="gender"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        value={addData.gender}
                        size="0"
                      >
                        <option value="">Select </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Email
                        <span className={styles.errorMsg}>
                          {!emailRegex.test(addData.email) ? error.email : ""}
                        </span>
                      </label>

                      <InputFiled
                        // type_name=""
                        placeholder_name="Email Address"
                        // inputId="Email"
                        value={addData.email}
                        // input_name=""
                        // class_name={isError.EmailErrorMsg !== "" && styles.errorMsg}
                        // onChange={(e) => { handleChange(e) }}
                        readonly
                        disabled={true}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="row"></div>
                  {/* <div className="col-md-6">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <label>Status   </label>
                                            <span style={{ color: "red" }}> {!addData.status ? error.status : ""}</span>
                                            <select class="form-control" name="status" onChange={(e) => { handleChange(e) }} value={addData.status} size="0">
                                                <option value="">Select </option>
                                                <option value="Active">Active</option>
                                                <option value="Deactive">Deactive</option>
                                            </select>
                                        </div>
                                    </div> */}
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Address
                        <span className={styles.errorMsg}>
                          {" "}
                          {!addData.address ? error.address : ""}
                        </span>{" "}
                      </label>
                      <InputFiled
                        type_name="text"
                        placeholder_name="Address"
                        inputId="address"
                        value={addData.address}
                        input_name="address"
                        name="address"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3"></div>
                  <div className={`col-md-9 ${styles.ButtonGroup}`}>
                    <div className="row">
                      <div className="col-md-4 ml-auto">
                        {isLoading ? (
                          <button disabled className={styles.SandBtn}>
                            <>
                              {" "}
                              <i class="fa fa-refresh fa-spin"></i> Loading{" "}
                            </>
                          </button>
                        ) : (
                          <button
                            className={styles.SandBtn}
                            onClick={handleSubmit}
                          >
                            Save{" "}
                          </button>
                        )}
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
  );
};

export default SignUpForm;
