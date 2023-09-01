import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputFiled from "../../../Auth/Common/input_filed";
import { Register } from "../../../Common/validation/index";
import {
  businesOwnerProfileDetails,
  businesOwnerUpdateProfile,
  businesTypeList,
} from "../../../helpers/business_owner_service";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import SuccessModal from "../../../Common/Modals/success_modal";
import ErrorModal from "../../../Common/Modals/ErrorModal";
import { Location_key } from "../../../helpers/api_url";
import { placeAutoComplete, placeDetails } from "../../../geolocation";
const Profile = ({ styles, profile_tab, activeTab, active }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const [keyData, setKeyData] = useState({
    companyName: "",
    ownerName: "",
    businessType: "",
    email: "",
    NZBNumber: "",
    address: "",
    mobileNumber: "",
    mobileNumberCountryCode: "",
    gender: "",
    sec_email: "",
    image: "",
    gst: "",
    currency: "",
    countryName:""
  });
  const [businessTypeList, setBusinessTypeList] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [suggestion, setSuggestion] = useState([])



  let router = useRouter()
  const closeModal = () => {
    setIsOpen(false)
    window.location.href = "/busines/owner/dashboard"

  }
  const closeErrorModal = () => {
    setIsErrorOpen(false)

  }
  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    let resProf = await businesOwnerProfileDetails();
    if (resProf.code === 200) {
      let data = { ...resProf.result };
      setKeyData((prev) => {
        return {
          ...prev,
          ...data,
          mobileNumber: resProf.result.mobileNumberCountryCode
            ? String(resProf.result.mobileNumberCountryCode) +
            String(resProf.result.mobileNumber)
            : "",

        };
      });
      setPreviewImage(resProf.result.image)
      setValue("email", resProf.result.email);
      setValue("NZBNumber", resProf.result.NZBNumber);
      setValue("ownerName", resProf.result.ownerName);
      setValue("businessType", resProf.result.businessType)
      setValue("address", resProf.result.address)

      // setValue("sec_email", resProf.result.sec_email);
      // setValue("email", resProf.result.email)
      let businessTypeId = resProf.result.businessType
      let currency = resProf.result.currency;

      getBusinessTypeList(businessTypeId);
    }
  };
  const handleImageChange = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setKeyData((prev) => {
      return {
        ...prev,
        image: e.target.files[0],
      };
    });
  };
  const getBusinessTypeList = async () => {
    let typeRes = await businesTypeList();
    if (typeRes.code === 200) {
      setBusinessTypeList(typeRes.result);
    }
  };

  const deleteKeys = (newData) => {
    delete newData.approved;
    delete newData.crmID;
    delete newData.createdAt;
    delete newData.gender;
    delete newData.isActive;
    delete newData.isDelete;
    delete newData.landlineCountryCode;
    delete newData.loc;
    delete newData.landlineNumber;
    delete newData.otp;
    delete newData.password;
    delete newData.permission;
    delete newData.profileDetails;
    delete newData.selectAppointmentMode;
    delete newData.selectCountry;
    delete newData.selectVisaType;
    delete newData.selectedCountries;
    delete newData.selectedVisaTypes;
    delete newData.subscriptionTenure;
    delete newData.subscriptionType;
    delete newData.verifyOtp;
    delete newData.__v;
    delete newData._id;
  };

  const updateProfile = async () => {
    let count = keyData.mobileNumberCountryCode.length;
    let phone_number = keyData.mobileNumber;
    // let containString = phone_number.includes("+")
    phone_number = phone_number?.substring(count);
    let data = keyData;
    deleteKeys(data);
    const formdata = new FormData();
    formdata.append("image", keyData.image);
    formdata.append("ownerName", keyData.ownerName);
    formdata.append("businessType", keyData.businessType);
    formdata.append("companyName", keyData.companyName);
    formdata.append("address", keyData.address);
    formdata.append("mobileNumberCountryCode", keyData.mobileNumberCountryCode);
    formdata.append("mobileNumber", phone_number);
    formdata.append("gst", keyData.gst);
    formdata.append("currency", keyData.currency);
    formdata.append("email", keyData.email);
    formdata.append("sec_email", keyData.sec_email);
    formdata.append("phoneCountryCodeName", "IN");
    formdata.append("countryName",keyData.countryName)
    setIsLoading(true)
    const resUpdate = await businesOwnerUpdateProfile(formdata);
    if (resUpdate.code === 200) {
      setIsOpen(true);
      setIsLoading(false)
    }
    else {
      setErrorMsg(resUpdate.message)
      setIsErrorOpen(true)
      setIsLoading(false)
    }
  };

  const onError = (data) => {
    // console.log("Data", data);
  };

  const handleChange = async (event) => {
    event.persist();
    setKeyData((keyData) => ({
      ...keyData,
      [event.target.name]: event.target.value,
    }));
    let value = event.target.value
    if (event.target.name == "address") {
      // setStatus(true)
      let payload = {
        input: value,
        location: {
          lat: "28.6508353", lng: "77.267595"
        },
        key: Location_key,
        radius: '100'
      }
      if (value.length >= 3) {
        let getValue = await placeAutoComplete(payload)
        console.log(getValue,"valueeee")
        setSuggestion(getValue)
      }
      else {
        setSuggestion([])
      }
    }

  };
  const handleOnchangePhone = (phone, country) => {
    let name = "phoneNo";
    let country_code = `+${country.dialCode}`;
    let country_name = country.countryCode;
    let mobileNumber = `+${phone}`
    setKeyData((keyData) => ({
      ...keyData,
      mobileNumber: mobileNumber,
      mobileNumberCountryCode: country_code,
    }));
  };
  const onClickItem = async (item) => {
    console.log(item?.terms[item.terms.length -1].value,"iiiiiiiiiii")
    setSuggestion([])
    setKeyData((prev) => {
      return {
        ...prev,
        address: item.description,
        countryName:item?.terms[item.terms.length -1]?.value
      }
    })


  };
  let searchingList = suggestion.map((item, index) => {
    return (
      <ul className={styles.searchingList}>
        <li style={{ cursor: "pointer" }} onClick={() => { onClickItem(item) }}>
          <span>{item?.description}</span>
        </li>
      </ul>
    )
  })
  return (
    <div
      className={`tab-pane fade shadow rounded ${active ? "show active " : ""
        } `}
      id={activeTab}
      role="tabpanel"
      aria-labelledby="v-pills-profile-tab"
    >
      <div className={styles.rightPageDetail}>
        <div className={styles.rightBox}>
          <div className="row">
            <div className="col-md-12 m-auto">
              {/* <h3 className="">Profile Details</h3> */}
              <div className={styles.formArea}>
                <div class="row">
                  <h4 className="col-md-12">Profile</h4>
                </div>
                <div className="row">
                  <div className={`col-md-12 ${styles.profileImg}`}>
                    {/* <div className={styles.avatarUpload}>
                      <div className={styles.avatarPreview}>
                        <img src="/images/camera.svg" />
                      </div>
                    </div> */}
                    <label htmlFor={`photo`}>
                      <input
                        id={`photo`}
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                        accept=".pdf, .jpeg , .jpg ,.png"
                      />
                      <div className={styles.avatarUpload}>
                        <h6> Upload </h6>
                        <div className={styles.avatarPreview}>
                          <img
                            onChange={handleImageChange}
                            src={
                              previewImage ? previewImage : "/images/camera.svg"
                            }
                          />
                        </div>
                      </div>
                    </label>
                    <h5>Company Logo</h5>

                    <div className={styles.NameDetail}>
                      {/* <h5>Mr.</h5> */}
                      {/* <p>INZ ID: #INZ8923409</p> */}
                    </div>
                  </div>
                </div>
                {/* Company Name */}
                <div class="row">
                  <div className="col-md-12">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Company Name <span className={styles.required}>*</span>
                        <small className={styles.errorMsg}>
                          {errors.companyName?.message}
                        </small>
                      </label>
                      <InputFiled
                        type_name="text"
                        // type="tel"
                        placeholder_name="Company Name"
                        inputId="Name"
                        value={keyData.companyName}
                        input_name="companyName"
                        maxLength="10"
                        disabled={keyData.companyName}
                      />
                    </div>
                  </div>
                </div>
                {/* Business Type / Email */}
                <div class="row">
                  {/* Business Type */}
                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Business Type <span className={styles.required}>*</span>
                        <small className={styles.errorMsg}>
                          {errors.businessType?.message}
                        </small>
                      </label>
                      <select
                        {...register("businessType", {
                          required: {
                            value: true,
                            message: "Please select business type.",
                          },
                          onChange: (e) => handleChange(e),
                        })}
                        name="businessType"
                        value={keyData.businessType}
                      >
                        <option value="">Select</option>
                        {businessTypeList.map((data) => (
                          <option value={data._id}>{data.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Email <span className={styles.required}>*</span>
                        <small className={styles.errorMsg}>
                          {errors.email?.message}
                        </small>
                      </label>
                      <InputFiled
                        type_name="email"
                        placeholder_name="Email"
                        inputId="Email"
                        value={keyData.email}
                        input_name="email"
                        disabled={keyData.email}
                        register={register("email", {
                          ...Register.Email,
                          onChange: (e) => handleChange(e),
                        })}
                      />
                    </div>
                  </div>
                </div>
                {/* NZBN / GST Number / Currency */}
                <div class="row">
                  {/* NZBN  */}

                  <div className="col-md-4">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        NZBN <span className={styles.required}>*</span>
                        <small className={styles.errorMsg}>
                          {errors.NZBNumber?.message}
                        </small>
                      </label>
                      <InputFiled
                        type_name="text"
                        placeholder_name="NZBN"
                        inputId="NZBN"
                        value={keyData.NZBNumber}
                        input_name="NZBNumber"
                        disabled={keyData.NZBNumber}
                        register={register("NZBNumber", {
                          ...Register.NZBN_Number,
                          onChange: (e) => handleChange(e),
                        })}
                      />
                    </div>
                  </div>
                  {/* GST Number */}

                  <div className="col-md-4">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>GST Number</label>
                      <InputFiled
                        type_name="text"
                        placeholder_name=""
                        inputId="gstNumber"
                        value={keyData.gst}
                        input_name="gst"
                        register={register("gst", {
                          required: {
                            value: false,
                          },
                          onChange: (e) => handleChange(e),
                        })}
                      />
                    </div>
                  </div>
                  {/* Currency */}
                  <div className="col-md-4">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>Currency </label>
                      <select
                        {...register("currency", {
                          required: {
                            value: false,
                            message: "Please select business type.",
                          },
                          onChange: (e) => handleChange(e),
                        })}
                        value={keyData.currency}
                        name="currency"
                      >
                        <option value="">Select</option>
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div class="row">
                  <div className="col-md-12">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Address
                        <span className={styles.required}>*</span>
                        <small className={styles.errorMsg}>
                          {errors.address?.message}
                        </small>
                      </label>
                      <InputFiled
                        type_name="text"
                        placeholder_name="Address"
                        inputId="address"
                        value={keyData.address.trim()}
                        input_name="address"
                        register={register("address", {
                          ...Register.Address,
                          onChange: (e) => handleChange(e),
                        })}
                      />
                      {searchingList}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <h4 className="col-md-12">Contact Person Details</h4>
                </div>
                {/* Full Name */}

                <div class="row">
                  <div className="col-md-12">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Full Name <span className={styles.required}>*</span>
                        <small className={styles.errorMsg}>
                          {errors.ownerName?.message}
                        </small>
                      </label>
                      <InputFiled
                        type_name="text"
                        placeholder_name="Full Name"
                        inputId=""
                        value={keyData.ownerName.trim()}
                        input_name="ownerName"
                        register={register("ownerName", {
                          ...Register.Name,
                          onChange: (e) => handleChange(e),
                        })}
                      />
                    </div>
                  </div>
                </div>
                {/* Mobile Number */}

                <div class="row">
                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup} ${styles.fromGroupPhone}`}>
                      <label>Mobile Number </label>


                      <PhoneInput
                        country={"in"}
                        value={keyData.mobileNumber}
                        placeholder="Enter phone number"
                        name="mobileNumber"
                        onChange={(phone, country_name) => {
                          handleOnchangePhone(phone, country_name);
                        }}
                        countryCodeEditable={false}
                      />
                    </div>
                  </div>
                  {/* Secondary Email */}

                  <div className="col-md-6">
                    <div className={`form-group ${styles.fromGroup}`}>
                      <label>
                        Secondary Email{" "}
                        {/* <span className={styles.required}>*</span> */}
                        <small className={styles.errorMsg}>
                          {errors.sec_email?.message}
                        </small>
                      </label>
                      <InputFiled
                        type_name="emtextail"
                        placeholder_name=""
                        inputId="email"
                        value={keyData.sec_email}
                        input_name="sec_email"
                        register={register("sec_email", {
                          ...Register.SecondaryEmail,
                          onChange: (e) => handleChange(e),
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className={`col-md-12  text-right ${styles.ButtonGroup}`}
                  >
                    <button
                      onClick={handleSubmit(updateProfile, onError)}
                      className={styles.SandBtn}
                    >
                      {isLoading && (
                        <i
                          className="fa fa-spinner fa-spin"
                          style={{ marginRight: "5px" }}
                        />
                      )}
                      {isLoading && <span>Wait</span>}
                      {!isLoading && <span>Save</span>}

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        isOpen && <SuccessModal
          open={isOpen}
          closeModal={closeModal}
          message="Profile Updated Successfully"
        />
      }
      {
        isErrorOpen && <ErrorModal
          open={isErrorOpen}
          closeModal={closeErrorModal}
          message={errorMsg}
        />
      }
    </div>
  );
};
export default Profile;
