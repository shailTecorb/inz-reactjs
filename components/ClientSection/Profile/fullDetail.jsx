import InputFiled from "../../Auth/Common/input_filed"
import styles from "../../../styles/form.module.scss"
import moment, { locale } from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { add_client_profile_details, view_client_service, list_of_partner, typeOfConviction } from "../../helpers/client_services"
import { admin_allCountry_list, state_list } from "../../helpers/business_owner_service"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IdContext } from "../../MyContext/IdDetailsContext";
import { data } from "jquery"
const ClientProfile = () => {
    const route = useRouter()
    const id = route.query.id // getting id from url 
    const { familyMemberId } = useContext(IdContext)
    const [addData, setAddData] = useState({
        primaryEmail: "",
        secondaryEmail: "",
        maritalStatus: "",
        country: "",
        state: "",
        houseAddress: "",
        streetAddress: "",
        permanentCountry: "",
        permanentState: "",
        permanentHouseNo: "",
        permanentStreetAddress: "",
        passportCountry: "",
        passportNumber: "",
        inzClientNo: "",
        typeofpartnership: "",
        partnershipNotes: "",
        medicalIssueNumber: "",
        medicalTestNumber: "",
        medicalNotes: "",
        policeCertificateCountry: "",
        previousRefusal: "true",
        refusalCountry: "",
        refusalVisaType: "",
        refusalReason: "",
        convictions: "true",
        convictionsDescribe: "",
        title: "",
        fullName: "",
        crmId: "",
        email: "",
        phoneNo: "",
        convictionType: ""
    })

    const [primaryPhoneNo, setPrimaryNo] = useState("")
    const [primaryCountry_Code, set_primaryCountry_Code] = useState("")
    const [secondaryPhoneNo, setsecondaryPhoneNo] = useState("")
    const [secondaryCountry_Code, setSecondaryCountry_Code] = useState("")
    const [error, setError] = useState({
        primaryMobileNo: "",
        secondaryMobileNo: "",
        primaryEmail: "",
        secondaryEmail: "",
        maritalStatus: "",
        country: "",
        state: "",
        houseAddress: "",
        streetAddress: "",
        permanentCountry: "",
        permanentState: "",
        permanentHouseNo: "",
        permanentStreetAddress: "",
        visaCountry: "",
        visaType: "",
        visaStartDate: "",
        visaEndDate: "",
        passportCountry: "",
        passportNumber: "",
        passportExpiryDate: "",
        typeofpartnership: "",
        medicalXrayNumber: "",
        medicalXrayIssueDate: "",
        medicalTestIssueDate: "",
        medicalTestNumber: "",

        policeCertificateCountry: "",
        policeCertificateNumber: "",
        previousRefusal: "",
        refusalCountry: "",
        refusalVisaType: "",
        refusalDate: "",
        convictions: "",
        convictionsDescribe: "",
        partnershipNotes: "",
        immigrationVisaDetails: "",
        convictionType: ""
    })



    //************************************************* */ 
    const [immigrationVisaDetails, setImmigrationVisaDetails] = useState([
        { id: "1", country: "", visaType: "", startDate: "", endDate: "" }

    ])

    const [passportDetails, setPassportDetails] = useState([
        { id: "1", country: "", passportNumber: "", expiryDate: "" }
    ])

    const [medicalXrayDetails, setMedicalXrayDetails] = useState([
        { id: "1", issueDate: "", number: "" }
    ])

    const [medicalTestDetails, setMedicalTestDetails] = useState([
        { id: "1", issueDate: "", number: "" }
    ])

    const [policeCertificate, setPoliceCertificate] = useState([
        { id: "1", country: "", issueDate: "" }
    ])

    const [refusalVisaDetails, setRefusalVisaDetails] = useState([
        { id: "1", country: "", visaType: "", dateOfRefusal: "", reasonOfRefusal: "" }
    ])

    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState()
    const [demoImg, setImageDomo] = useState()
    const [dob, setDob] = useState()
    const [countryList, setCountryList] = useState([]) // All country List 
    const [stateList, setStateList] = useState([])// All State LIst 
    const [visaTypeList, setVisaTypeList] = useState([])// All Visa type List 
    const [stateListForPermanentAdd, setPermanentStateList] = useState()
    const [saveAsDraft, setSaveAsDraft] = useState(false)
    const [permanentAddSameAsCurrent, setPermanentAddSameAsCurrent] = useState(true)
    const [permanentCountryList, setPermanentCountryList] = useState()
    const [errorMsg, setErrorMsg] = useState("")
    const [isHoldVisa, setIsHoldVisa] = useState(false)

    const [firstMeetingDate, setFirstMeetingDate] = useState("")
    const [engagementDate, setEngagementDate] = useState("")
    const [marriageDate, setMarriageDate] = useState("")
    const [refusalDate, setRefusalDate] = useState("")
    const [isPotential, setIsPotential] = useState(true)
    const [allPartnerList, setAllPartnerList] = useState([])
    const [allConvictionList, setAllConvictionList] = useState([])
    //***************************** FOR HIDE AND SHOW FIELDS ACCORDING TO DETAILS************************************************************* */
    const [isBasicDetails, setIsBasicDetails] = useState(false)
    const [isImmigrationHistory, setIsImmitgrationHistory] = useState(false)
    const [isPassportDetails, setIsPassportDetails] = useState(false)
    const [isPartnerShipDetails, setPartnerShipDetails] = useState(false)
    const [isMedicalDetails, setIsMedicalDetails] = useState(false)
    const [isPoliceDetails, setIsPoliceDetails] = useState(false)
    const [isVisaRefusalDetails, setIsVisaRefusalDetails] = useState(false)
    const [isConvictions, setIsConvictions] = useState(false)
    // ********************************* common onChange function for addData value *************************************************************8
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (addData.houseAddress?.length == 0 && value == ' ') {

        } else if (addData.streetAddress?.length == 0 && value == ' ') {

        } else if (addData.permanentHouseNo?.length == 0 && value == ' ') {

        } else if (addData.permanentStreetAddress?.length == 0 && value == ' ') {

        } else if (addData.partnershipNotes?.length == 0 && value == ' ') {

        } else if (addData.medicalNotes?.length == 0 && value == ' ') {

        } else if (addData.convictionsDescribe?.length == 0 && value == ' ') {

        } else if (addData.typeofpartnership?.length !== 0 && value == "select") {

        } else {
            setAddData({ ...addData, [name]: value })
        }
    }
    // ******************************** onchange function for immigration visa details *********************************************************

    const onChangeImmigrationVisaDetails = (event, date, value) => {
        if (date == "startDate") {
            let day = moment(event).format("YYYY/MM/DD")
            setImmigrationVisaDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, startDate: it.id === value?.id ? day : it.startDate })
                })])
            })
        } else if (date == "endDate") {
            let newDay = moment(event).format("YYYY/MM/DD")
            setImmigrationVisaDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, endDate: it.id === value?.id ? newDay : it.endDate })
                })])
            })
        } else {
            const { name, value } = event.target;
            if (name == "country") {
                all_visa_type_list(value)
            }
            setImmigrationVisaDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, [name]: it.id === date?.id ? value : it.[name] })
                })])
            })
        }
    }

    const handleImmigrationAddMore = () => {
        setImmigrationVisaDetails([...immigrationVisaDetails, ...[{ id: immigrationVisaDetails.length + 1, country: "", visaType: "", startDate: "", endDate: "" }]])
    }
    // ************************************** onChange Function for passport details ************************************************************
    const onChangepassportDetails = (event, item, data) => {

        if (item == "expiryDate") {
            let day = moment(event).format("YYYY/MM/DD")
            setPassportDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, expiryDate: it.id === data.id ? (day == "Invalid date" ? "" : day) : it.expiryDate })
                })])
            })
        } else {
            const { name, value } = event.target;
            setPassportDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, [name]: it.id === item?.id ? value : it.[name] })
                })])
            })
        }
    }


    const addMorePassportDetails = () => {
        setPassportDetails([...passportDetails, ...[{ id: passportDetails.length + 1, country: "", passportNumber: "", expiryDate: "" }]])
    }
    // ************************************* onChange function for medical x-ray details ********************************************************************8
    const onChangeMedicalXrayDetails = (event, item, data) => {
        if (item == "issueDate") {
            let day = moment(event).format("YYYY/MM/DD")
            setMedicalXrayDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, issueDate: it.id === data.id ? day : it.issueDate })
                })])
            })
        } else {
            const { name, value } = event.target;
            setMedicalXrayDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, [name]: it.id === item?.id ? value : it.[name] })
                })])
            })
        }
    }

    const addMoreMedicalXrayDetails = () => {
        setMedicalXrayDetails([...medicalXrayDetails, ...[{ id: medicalXrayDetails.length + 1, issueDate: "", number: "" }]])
    }
    // ***************************************** onChange function for medical test details *******************************************************
    const onChangeMedicalTestDetails = (event, item, data) => {

        if (item == "issueDate") {
            let day = moment(event).format("YYYY/MM/DD")
            setMedicalTestDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, issueDate: it.id === data.id ? day : it.issueDate })
                })])
            })
        } else {
            const { name, value } = event.target;
            setMedicalTestDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, [name]: it.id === item?.id ? value : it.[name] })
                })])
            })
        }
    }
    const addMoreMedicalTestDetails = () => {
        setMedicalTestDetails([...medicalTestDetails, ...[{ id: medicalTestDetails.length + 1, issueDate: "", number: "" }]])
    }
    // ******************************************* onchange function for police certificate details ***********************************************************************
    const onChangePoliceCertificate = (event, item, data) => {

        if (item == "issueDate") {
            let day = moment(event).format("YYYY/MM/DD")
            setPoliceCertificate((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, issueDate: it.id === data.id ? day : it.issueDate })
                })])
            })
        } else {
            const { name, value } = event.target;
            setPoliceCertificate((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, [name]: it.id === item?.id ? value : it.[name] })
                })])
            })
        }
    }
    const addMorePoliceDetails = () => {
        setPoliceCertificate([...policeCertificate, ...[{ id: policeCertificate.length + 1, country: "", number: "" }]])
    }
    // **************************************** onChange function for refusal details *******************************************************************************

    const onChangeVisaRefusalDetails = (event, item, data) => {
        if (item == "dateOfRefusal") {
            let day = moment(event).format("YYYY/MM/DD")
            setRefusalVisaDetails((prev) => {
                return ([...prev.map((it) => {
                    return ({ ...it, dateOfRefusal: it.id === data.id ? day : it.dateOfRefusal })
                })])
            })
        } else {
            const { name, value } = event.target;
            if (name == "country") {
                all_visa_type_list(value)
            }
            if (name == "reasonOfRefusal" && value == ' ') {

            } else {
                setRefusalVisaDetails((prev) => {
                    return ([...prev.map((it) => {
                        return ({ ...it, [name]: it.id === item?.id ? value : it.[name] })
                    })])
                })
            }

        }

    }
    const addMoreVisaRefusalDetails = () => {
        setRefusalVisaDetails([...refusalVisaDetails, ...[{ id: refusalVisaDetails.length + 1, country: "", visaType: "", dateOfRefusal: "", reasonOfRefusal: "" }]])
    }

    // **********************************************************************************************************************
    const handleOnChangePrimaryNo = (phone, country, e, data, value) => {
        let name = "primaryPhoneNo"
        let primaryCountry_Code = `+${country.dialCode}`
        let country_name = country.countryCode
        set_primaryCountry_Code(primaryCountry_Code)
        setPrimaryNo(phone)
    }
    const handleOnchangePhone = (phone, country, e, data, value) => {
        let name = "secondaryPhoneNo"
        let secondaryCountry_Code = `+${country.dialCode}`
        let country_name = country.countryCode
        setSecondaryCountry_Code(secondaryCountry_Code)
        setsecondaryPhoneNo(phone)

    }

    const handleImageChange = (e) => {
        setImageDomo(URL.createObjectURL(e.target.files[0]))
        setImage(e.target.files[0])
    }
    useEffect(() => {
        all_country_list()
        get_all_partner_list()
        getAllConvictionType()
    }, [])


    // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    const get_all_partner_list = async () => {
        const response = await list_of_partner()
        if (response.code == 200) {
            setAllPartnerList(response.result)
        }
    }

    const all_country_list = async () => {
        let page = 1;
        let perPage = 250;
        const response = await admin_allCountry_list(page, perPage)
        if (response.code == 200) {
            setCountryList(response.result)
            setPermanentCountryList(response.result)

        } else {
        }
    }
    const getAllConvictionType = async () => {
        const response = await typeOfConviction()
        if (response.code == 200) {
            setAllConvictionList(response.result)
        }
    }

    useEffect(() => {
        get_all_states()
    }, [addData.country])

    const get_all_states = async () => {
        const response = await state_list(addData.country)
        if (response.code == 200) {
            setStateList(response.result)
            // if (response.result.map((li) => li._id !== addData.state)) {
            //     // setAddData({...addData,state:""})
            // } else {

            // }
        }
    }

    useEffect(() => {
        get_all_states_for_permanent_address()
    }, [addData.permanentCountry])

    const get_all_states_for_permanent_address = async () => {
        const response = await state_list(addData.permanentCountry)
        if (response.code == 200) {
            setPermanentStateList(response.result)
            // if (response.result?.map((li) => li._id !== addData.permanentState)) {
            //     setAddData({ ...addData, permanentState: "" })
            // } else {

            // }
        } else {
        }
    }
    const all_visa_type_list = async (countryId) => {
        let perPage = 20;
        let page = 1;

        const response = await business_allvisalist_service(countryId, perPage, page)
        if (response.code == 200) {
            setVisaTypeList(response.result)
            setError({ ...error, visaType: "" })
        } else if (response.code == 400 && response.message == "Record is not found") {
            setError({ ...error, visaType: "Please Select Another Country" })
            setVisaTypeList([])
        } else {
            setVisaTypeList([])
        }
    }
    // ******************************** get client details ************************************************************

    useEffect(() => {
        if (!id) {

        } else {
            getDetailsOfClient()
        }
    }, [])
    const getDetailsOfClient = async () => {
        const response = await view_client_service(id)

        if (response.code == 200) {
            let isDOB = new Date(response?.result?.dob);
            setAddData({
                ...addData,
                primaryEmail: response?.result?.email,
                secondaryEmail: response?.result?.secondaryEmail == "undefined" ? "" : response?.result?.secondaryEmail,
                maritalStatus: response?.result?.martialStatus?.toUpperCase(),
                country: response?.result?.country._id,
                state: response?.result?.state._id,
                houseAddress: response?.result?.houseNo,
                streetAddress: response?.result?.streetAddress,
                permanentCountry: response?.result?.permanentCountry?._id,
                permanentState: response?.result?.permanentState?._id,
                permanentHouseNo: response?.result?.permanentHouseNo == "undefined" ? "" : response?.result?.permanentHouseNo,
                permanentStreetAddress: response?.result?.permanentStreetAddress == "undefined" ? "" : response?.result?.permanentStreetAddress,
                medicalNotes: response.result.notes,
                previousRefusal: response.result?.refusalVisa,
                inzClientNo: response.result.inzClientNumber,
                convictions: response.result.convictions,
                convictionsDescribe: response.result.describeConvictions == "undefined" ? "" : response.result.describeConvictions,
                typeofpartnership: response.result.typeOfPartnership?._id,
                partnershipNotes: response.result.summerNotes == "undefined" ? "" : response.result.summerNotes,
                fullName: response.result.fullName,
                title: response.result.title,
                email: response.result.email,
                phoneNo: response.result.phone,
                crmId: response.result?.internalId

            })
            let firstMeeting = new Date(response?.result?.firstMeetingDate)
            let engagementDate = new Date(response?.result?.engagementDate)
            let marriageDate = new Date(response?.result?.marriageDate)
            if (response?.result?.firstMeetingDate) {
                setFirstMeetingDate(firstMeeting)
            } if (response?.result?.engagementDate) {
                setEngagementDate(engagementDate)
            } if (response?.result?.marriageDate) {
                setMarriageDate(marriageDate)
            }

            setImageDomo(response.result.image ? response.result.image : "")
            setPrimaryNo(String(response.result.primaryPhoneNumberCountryCode ? response.result.primaryPhoneNumberCountryCode : response.result.phoneCountryCode) + String(response.result.primaryPhoneNumber ? response.result.primaryPhoneNumber : response.result.phone)),
                set_primaryCountry_Code(String(response.result.primaryPhoneNumberCountryCode ? response.result.primaryPhoneNumberCountryCode : response.result.phoneCountryCode))
            setsecondaryPhoneNo(String(response.result.secondaryPhoneNumberCountryCode) + String(response.result.secondaryPhoneNumber)),
                setSecondaryCountry_Code(String(response.result.secondaryPhoneNumberCountryCode))
            setPermanentAddSameAsCurrent(response.result.permanantAddSameAsCurrent)
            if (response.result.dob) {
                setDob(isDOB)
            }
            setIsHoldVisa(response?.result.visaHold)
            let responseImmigrationVisaDetails = response.result?.immigrationHistory?.map((val) => { return ({ country: val.country, visaType: val.visaType, startDate: new Date(val.startDate), endDate: new Date(val.endDate) }) })
            let responsePassArray = response.result?.passportDetails?.map((val) => { return ({ country: val.passportCountry._id, passportNumber: val.passportNumber, expiryDate: new Date(val.passportExpiryDate) }) })
            let responseXRayTestArray = response.result?.checstXrayTest?.map((val) => { return ({ issueDate: new Date(val.issueDate), number: val.number }) })
            let responsemedicalTestArray = response.result?.medicalTest?.map((val) => { return ({ issueDate: new Date(val.issueDate), number: val.number }) })
            let responsePoliceArray = response.result?.policeCertificate?.map((val) => { return ({ country: val.country._id, issueDate: new Date(val.issueDate) }) })
            let responseRefusalArray = response.result?.refusalVisaDetails?.map((val) => { return ({ country: val.country, visaType: val.visaType, dateOfRefusal: new Date(val.dateOfRefusal), reasonOfRefusal: val.reasonOfRefusal }) })
            setImmigrationVisaDetails(responseImmigrationVisaDetails.length == 0 ? immigrationVisaDetails : responseImmigrationVisaDetails)
            setPassportDetails(responsePassArray.length == 0 ? passportDetails : responsePassArray)
            setMedicalXrayDetails(responseXRayTestArray.length == 0 ? medicalXrayDetails : responseXRayTestArray)
            setMedicalTestDetails(responsemedicalTestArray.length == 0 ? medicalTestDetails : responsemedicalTestArray)
            setPoliceCertificate(responsePoliceArray.length == 0 ? policeCertificate : responsePoliceArray)
            setRefusalVisaDetails(responseRefusalArray.length == 0 ? refusalVisaDetails : responseRefusalArray)
        }
    }

   
    //**************************************FILTER NULL ITEM FROM ARRAY*********************************************************************************************** */
    const filterNullItem = (arr) => {
        let newData = arr?.filter((item) => {
            if (!item.country || !item.visaType || item.startDate == "Invalid date" || item.endDate == "Invalid date") {

            } else {
                return item;
            }
        })
        return newData;
    }
    const filterPassportArray = (data) => {
        let newArr = data?.filter((item) => {
            if (!item.passportCountry || item.passportExpiryDate == "Invalid date" || !item.passportNumber) {
            } else {
                return item;
            }
        })
        return newArr;
    }

    const filterXrayArray = (data) => {
        let newData = data?.filter((item) => {
            if (item.issueDate == "Invalid date" || !item.number) {

            } else {
                return item;
            }
        })
        return newData;
    }
    const filterMedicalArray = (data) => {
        let newData = data?.filter((item) => {
            if (item.issueDate == "Invalid date" || !item.number) {

            } else {
                return item;
            }
        })
        return newData;
    }
    const filterPoliceArray = (data) => {
        let newData = data?.filter((item) => {
            if (item.issueDate == "Invalid date" || !item.country) {

            } else {
                return item;
            }
        })
        return newData;
    }
    const filterRefusalArray = (data) => {
        let newData = data?.filter((item) => {
            if (!item.country || !item.visaType || item.dateOfRefusal == "Invalid date" || !item.reasonOfRefusal) {

            } else {
                return item;
            }
        })
        return newData;
    }
    //************************************** ADD PROFILE DETAILS ********************************************************************* */

    const add_profile_details = async (event, saveAsDraft) => {
        event.preventDefault()
        let clientId = localStorage.clientId;
        let count = primaryCountry_Code.length
        let phone_number = primaryPhoneNo;
        phone_number = localStorage.completeProfile ? phone_number.substring(count - 1) : phone_number.substring(count)
        let count2 = secondaryCountry_Code.length
        let secondaryNo = secondaryPhoneNo;
        secondaryNo = localStorage.completeProfile ? secondaryNo.substring(count2 - 1) : secondaryNo.substring(count2)

        // ************************ HERE REMOVING ID FROM ARRAY **********************************************
        let newImmigrationVisaDetails = filterNullItem(immigrationVisaDetails.map((val) => { return ({ country: val.country, visaType: val.visaType, startDate: moment(val.startDate).format("YYYY/MM/DD"), endDate: moment(val.endDate).format("YYYY/MM/DD") }) }))
        let newPassArray = filterPassportArray(passportDetails.map((val) => { return ({ passportCountry: val.country, passportNumber: val.passportNumber, passportExpiryDate: moment(val.expiryDate).format("YYYY/MM/DD") }) }))
        let newXRayTestArray = filterXrayArray(medicalXrayDetails.map((val) => { return ({ issueDate: moment(val.issueDate).format("YYYY/MM/DD"), number: val.number }) }))
        let newmedicalTestArray = filterMedicalArray(medicalTestDetails.map((val) => { return ({ issueDate: moment(val.issueDate).format("YYYY/MM/DD"), number: val.number }) }))
        let newPoliceArray = filterPoliceArray(policeCertificate.map((val) => { return ({ country: val.country, issueDate: moment(val.issueDate).format("YYYY/MM/DD") }) }))
        let newRefusalArray = filterRefusalArray(refusalVisaDetails.map((val) => { return ({ country: val.country, visaType: val.visaType, dateOfRefusal: moment(val.dateOfRefusal).format("YYYY/MM/DD"), reasonOfRefusal: val.reasonOfRefusal }) }))

        // *************************************************************************************************
        const formdata = new FormData();

        formdata.append("image", image ? image : demoImg)

        formdata.append("dob", moment(dob).format("YYYY/MM/DD"))

        formdata.append("clientId", id);

        formdata.append("draftPage", saveAsDraft);
        formdata.append("martialStatus", addData.maritalStatus);
        formdata.append("visaHold", isHoldVisa);

        formdata.append("firstMeetingDate", (moment(firstMeetingDate).format("YYYY/MM/DD") == "Invalid date") ? "" : moment(firstMeetingDate).format("YYYY/MM/DD"));
        formdata.append("engagementDate", (moment(engagementDate).format("YYYY/MM/DD") == "Invalid date") ? "" : moment(engagementDate).format("YYYY/MM/DD"));
        formdata.append("marriageDate", (moment(marriageDate).format("YYYY/MM/DD") == "Invalid date") ? "" : moment(marriageDate).format("YYYY/MM/DD"));
        formdata.append("summerNotes", addData.partnershipNotes == "undefined" ? null : addData.partnershipNotes);
        formdata.append("convictions", addData.convictions);
        formdata.append("describeConvictions", addData.convictionsDescribe === "undefined" ? "" : addData.convictionsDescribe);
        formdata.append("typeOfConvictions", addData.convictionType);
        formdata.append("potentialClient", isPotential);

        formdata.append("refusalVisa", addData.previousRefusal);
        formdata.append("policeCertificate", JSON.stringify(newPoliceArray));
        formdata.append("notes", addData.medicalNotes);
        formdata.append("medicalTest", JSON.stringify(newmedicalTestArray));
        formdata.append("checstXrayTest", JSON.stringify(newXRayTestArray));

        if (!addData.typeofpartnership?.length == 0) {
            formdata.append("typeOfPartnership", addData.typeofpartnership);
        }
        if (immigrationVisaDetails[0]?.country?.length !== 0 && immigrationVisaDetails[0]?.visaType?.length !== 0) {
            formdata.append("immigrationHistory", JSON.stringify(newImmigrationVisaDetails));
        }
        if (refusalVisaDetails[0]?.country?.length !== 0 && refusalVisaDetails[0]?.visaType?.length !== 0) {
            formdata.append("refusalVisaDetails", JSON.stringify(newRefusalArray));
        }
        if (passportDetails[0]?.country?.length !== 0) {
            formdata.append("passportDetails", JSON.stringify(newPassArray));
        }
        if (!addData.permanentCountry && !addData.permanentState) {
        } else {
            formdata.append("permanentCountry", addData.permanentCountry);
            formdata.append("permanentState", addData.permanentState)
        }

        if (!dob) {
            setError({ ...error, dob: "Please Select dob" })
        }
        else if (!addData.maritalStatus || addData.maritalStatus == "select") {
            setError({ ...error, maritalStatus: "Please Select Marital Status" })
        } else if (isHoldVisa && (immigrationVisaDetails[0]?.country?.length == 0 && !immigrationVisaDetails[0]?.endDate)) {
            setError({ ...error, immigrationVisaDetails: "Please Fill All The Field" })
        } else if (passportDetails[0]?.country?.length == 0) {
            setError({ ...error, passportCountry: "Please Select Country" })
        } else if (passportDetails[0]?.passportNumber?.length == 0) {
            setError({ ...error, passportNumber: "Please Enter Passport Number" })
        } else if (!passportDetails[0]?.expiryDate) {
            setError({ ...error, passportExpiryDate: "Please Passport Expiry Date" })
        } else if (!medicalXrayDetails[0]?.issueDate) {
            setError({ ...error, medicalXrayIssueDate: "Please Select Issue Date" })
        } else if (!medicalXrayDetails[0]?.number) {
            setError({ ...error, medicalXrayNumber: "Please Enter Number" })
        } else if (!medicalTestDetails[0]?.issueDate) {
            setError({ ...error, medicalTestIssueDate: "Please Select Issue Date" })
        } else if (!medicalTestDetails[0]?.number) {
            setError({ ...error, medicalTestNumber: "Please Enter Number" })
        } else if (!addData.medicalNotes) {
            setError({ ...error, medicalNotes: "Please Enter Description" })
        } else if (policeCertificate[0]?.country?.length == 0) {
            setError({ ...error, policeCertificateCountry: "Please Select Country" })
        } else if (!policeCertificate[0]?.issueDate) {
            setError({ ...error, policeCertificateNumber: "Please Select" })
        } else if (String(addData.previousRefusal) == "true" && refusalVisaDetails[0]?.country?.length == 0) {
            setError({ ...error, refusalCountry: "Please Select Country" })
        } else if (String(addData.previousRefusal) == "true" && refusalVisaDetails[0]?.visaType?.length == 0) {
            setError({ ...error, refusalVisaType: "Please Select Visa Type" })
        } else if (String(addData.previousRefusal) == "true" && !refusalVisaDetails[0]?.dateOfRefusal) {
            setError({ ...error, refusalDate: "Please Select Date" })
        } else if (String(addData.previousRefusal) == "true" && !refusalVisaDetails[0]?.reasonOfRefusal) {
            setError({ ...error, refusalReason: "Please Enter Reason Of Refusal" })
        } else if (String(addData.convictions) == "true" && !addData.convictionType) {
            setError({ ...error, convictionType: "Please Select Type of Conviction" })
        } else if (String(addData.convictions) == "true" && !addData.convictionsDescribe) {
            setError({ ...error, convictionsDescribe: "Please Describe Conviction" })
        }
        else {
            setIsLoading(true)
            const response = await add_client_profile_details(formdata)
            if (response.code == 200) {
                setIsLoading(false)
                route.push("/LIA/workplace")
            }
            else {
                setIsLoading(false)
                setErrorMsg(response.message)
            }
        }
    }
    // ****************************** HERE I'M MAKING NON TYPEABLE DATE PICKER ***************************************************************8
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <button style={{ marginLeft: "50px" }} onClick={(e) => { onClick(); e.preventDefault() }} ref={ref}>
            {value}
        </button>
    ))

    return (
        <div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <h3 className="">Profile Details</h3><span style={{ color: "red" }}>{errorMsg}</span>
                        <div className={styles.formArea}>

                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className={styles.progressBar}>
                                            <li className={styles.Active}><span>Basic Personal Details</span></li>
                                            <li className={styles.Active}><span>Contact Details</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">  <span style={{ color: "red" }}></span>
                                    <div className="col-md-2">
                                        Profile Picture
                                        <div className={styles.NameDetail}>
                                            <label htmlFor={`photo`}>
                                                <input id={`photo`} type="file" onChange={handleImageChange} style={{ display: "none" }} accept=".pdf, .jpeg , .jpg ,.png" />
                                                <div className={styles.avatarUpload}>
                                                    <div className={styles.avatarPreview}>
                                                        <img onChange={handleImageChange} src={demoImg ? demoImg : "/images/camera.svg"} alt="choose pic" />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className={styles.NameDetail}>
                                            <h5> {addData.title + " " + addData.fullName}</h5>
                                            <p>CRM ID: #{addData.crmId}</p>
                                            <div className="row">

                                                <p><img src="/images/mail.svg"></img> {addData.email} </p>
                                                <p style={{ marginLeft: "20px" }}><img src="/images/greencall.svg"></img>{addData.phoneNo}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <select className="form-control" onClick={() => { setIsBasicDetails(!isBasicDetails) }} style={{ minWidth: "100%", textAlign: "center" }}> <option>Basic Details</option> </select>
                                        </div>
                                    </div>
                                </div>
                                {isBasicDetails ?
                                    <>

                                        <div class="row">
                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>D.O.B <span className={styles.required}>*</span>
                                                        <span style={{ color: "red" }}> {!dob ? error.dob : ""}</span></label>
                                                    <DatePicker
                                                        customInput={<ExampleCustomInput />}
                                                        selected={dob}
                                                        value={dob}
                                                        onChange={(dob) => setDob(dob)}
                                                        name="dob"
                                                        showMonthDropdown
                                                        showYearDropdown
                                                        yearDropdownItemNumber={15}
                                                        scrollableYearDropdown={true}
                                                        dropdownMode="select"
                                                        maxDate={new Date()} />
                                                    <img src="/images/calendar.svg" alt="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Marital Status<span className={styles.required}>*</span>
                                                        <span style={{ color: "red" }}> {!addData.maritalStatus || addData.maritalStatus == "select" ? error.maritalStatus : ""}</span></label>
                                                    <select class="form-control" name="maritalStatus" value={addData.maritalStatus} onChange={handleChange} size="0">
                                                        <option value="select">Select </option>
                                                        <option value="MARRIED">Married</option>
                                                        <option value="SINGLE">Single</option>
                                                        <option value="DIVORCED">Divorced</option>
                                                        <option value="WIDOWED">Widowed</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3><b>Current Address</b> </h3>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <div className={styles.CheckBox}>
                                                        <input id="checkbox2" name="isHeldVisa" type="checkbox" checked={isHoldVisa} onChange={(e) => { setIsHoldVisa(!isHoldVisa) }} />
                                                        <label for="checkbox2" className={styles.checkboxLabel}>Yes, i hold Visa</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {!isHoldVisa ? ""
                                            :
                                            <>
                                                <div className="col-md-12">
                                                    <h3><b> Immigration History </b> (List of VISAS that you hold now or held before)
                                                        <br />
                                                        <span style={{ color: "red" }}> {isHoldVisa && (immigrationVisaDetails[0]?.country?.length == 0 || !immigrationVisaDetails[0]?.endDate) ? error.immigrationVisaDetails : ""} </span>
                                                    </h3>
                                                </div>
                                                {immigrationVisaDetails?.map((data, index) => {

                                                    return (
                                                        <div key={index} class="row">
                                                            <div className="col-md-3">
                                                                <div className={`form-group ${styles.fromGroup}`}>
                                                                    <label>Country  <span className={styles.required}>*</span>
                                                                        <span style={{ color: "red" }}> {!data.country ? error.visaCountry : ""}</span></label>
                                                                    <select class="form-control" name="country" value={data.country._id} onChange={(e) => { onChangeImmigrationVisaDetails(e, data) }} size="0">
                                                                        <option value="">Select</option>
                                                                        {countryList?.map((li, i) => <option value={li._id}>{li.countryName}</option>)}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className={`form-group ${styles.fromGroup}`}>
                                                                    <label>VISA Type  <span className={styles.required}>*</span><span style={{ color: "red" }}> {!data.visaType || data.length == 0 ? error.visaType : ""}</span></label>
                                                                    <select class="form-control" name="visaType" value={data.visaType._id} onChange={(e) => { onChangeImmigrationVisaDetails(e, data) }} size="0">
                                                                        {visaTypeList.length !== 0 ?
                                                                            <> <option value="">Select</option>
                                                                                {visaTypeList?.map((li, i) => <option value={li._id}>{li.visaType}</option>)}
                                                                            </> :
                                                                            <option value={data.visaType._id}>{data.visaType.visaType} </option>
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-3">
                                                                <div className={`form-group ${styles.fromGroup}`}>
                                                                    <label> Start Date <span className={styles.required}>*</span>
                                                                        <span style={{ color: "red" }}> {!data.startDate ? error.visaStartDate : ""}</span></label>
                                                                    <DatePicker
                                                                        customInput={<ExampleCustomInput />}
                                                                        selected={data.startDate ? new Date(data.startDate) : null}
                                                                        value={data.startDate}
                                                                        onChange={(date) => { onChangeImmigrationVisaDetails(date, "startDate", data) }}
                                                                        name="startDate"
                                                                        maxDate={new Date()}
                                                                    />
                                                                    <img src="/images/calendar.svg" alt="calender" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className={`form-group ${styles.fromGroup}`}>
                                                                    <label> End Date  <span className={styles.required}>*</span>
                                                                        <span style={{ color: "red" }}> {!data.endDate ? error.visaEndDate : ""}</span></label>
                                                                    <DatePicker
                                                                        customInput={<ExampleCustomInput />}
                                                                        selected={data.endDate ? new Date(data.endDate) : null}
                                                                        value={data.endDate}
                                                                        onChange={(date) => { onChangeImmigrationVisaDetails(date, "endDate", data) }}
                                                                        name="endDate"
                                                                    // minDate={new Date()} 
                                                                    />
                                                                    <img src="/images/calendar.svg" alt="calender" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    )
                                                })}

                                                <div className="row">
                                                    <div className={`col-md-12 ${styles.LinkSec}`}>
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <a style={{ cursor: "pointer" }} onClick={handleImmigrationAddMore}>+ Add Another VISA</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>}
                                    </> : ""}
                                <br />
                                <div class="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <select className="form-control" onClick={() => { setIsPassportDetails(!isPassportDetails) }} style={{ minWidth: "100%", textAlign: "center" }}> <option>Passport Details </option></select>
                                        </div>
                                    </div>
                                </div>
                                {isPassportDetails ?
                                    <>
                                        <div class="row">
                                            <h4 className="col-md-12">Passport Details</h4>
                                        </div>
                                        {passportDetails?.map((data, index) => {
                                            return (
                                                <div key={index}>
                                                    <div class="row">
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Country  <span className={styles.required}>*</span><span style={{ color: "red" }}> {passportDetails[0]?.country?.length == 0 ? error.passportCountry : ""}</span></label>
                                                                <select class="form-control" name="country" value={data.country} onChange={(event) => { onChangepassportDetails(event, data) }} size="0">
                                                                    <option value="">Select</option>
                                                                    {countryList?.map((li, i) => <option value={li._id}>{li.countryName}</option>)}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label>Passport Number <span className={styles.required}>*</span> <span style={{ color: "red" }}> {passportDetails[0]?.passportNumber?.length == 0 ? error.passportNumber : ""}</span></label>
                                                                <InputFiled
                                                                    type_name="text"
                                                                    placeholder_name="Passport Number"
                                                                    inputId="License"
                                                                    input_name="passportNumber"
                                                                    value={data.passportNumber?.trim()}
                                                                    onChange={(event) => { onChangepassportDetails(event, data) }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className={`form-group ${styles.fromGroup}`}>
                                                                <label> Expiry Date <span className={styles.required}>*</span>
                                                                    <span style={{ color: "red" }}> {!passportDetails[0]?.expiryDate ? error.passportExpiryDate : ""}</span></label>

                                                                <DatePicker
                                                                    customInput={<ExampleCustomInput />}
                                                                    selected={data.expiryDate ? new Date(data.expiryDate) : null}
                                                                    value={data.expiryDate}
                                                                    onChange={(date) => { onChangepassportDetails(date, "expiryDate", data) }}
                                                                    name="expiryDate"
                                                                    minDate={new Date()}
                                                                />

                                                                <img src="/images/calendar.svg" alt="calender" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className="row">
                                            <div className={`col-md-12 ${styles.LinkSec}`}>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <a style={{ cursor: "pointer" }} onClick={addMorePassportDetails}>+ Add Another Passport</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row">

                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>INZ Client Number
                                                        <span style={{ color: "red" }}> {!addData.inzClientNo || addData.inzClientNo.length !== 9 ? error.inzClientNo : ""}</span></label>

                                                    <InputFiled
                                                        disabled={true}
                                                        type_name="text"
                                                        placeholder_name=""
                                                        inputId="License"
                                                        input_name="inzClientNo"
                                                        value={addData.inzClientNo}
                                                        // onChange={handleChange}
                                                        maxLength={9}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </> : ""}
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <select className="form-control" onClick={() => { setPartnerShipDetails(!isPartnerShipDetails) }} style={{ minWidth: "100%", textAlign: "center" }}> <option>Partnership Details </option></select>
                                        </div>
                                    </div>
                                </div>
                                {isPartnerShipDetails ?
                                    <>
                                        <div className="row">
                                            <div className={`col-md-12 ${styles.LinkSec}`}>
                                                <h3> Partnership Details</h3>
                                                <h4> Please provide details of your partnership </h4>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Type of Partnership <span style={{ color: "red" }}> {!addData.typeofpartnership || addData.typeofpartnership == "select" ? error.typeofpartnership : ""}</span></label>
                                                    <select class="form-control" name="typeofpartnership" value={addData.typeofpartnership} onChange={handleChange} size="0">
                                                        <option value="select">Select</option>
                                                        {allPartnerList?.map((li, i) => <option value={li._id}>{li.title}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label> First Meeting Date
                                                        <span style={{ color: "red" }}> {!firstMeetingDate ? error.firstMeetingDate : ""}</span></label>
                                                    <DatePicker
                                                        customInput={<ExampleCustomInput />}
                                                        selected={firstMeetingDate}
                                                        value={firstMeetingDate}
                                                        onChange={(date) => setFirstMeetingDate(date)}
                                                        name="firstMeetingDate"
                                                        maxDate={new Date()}
                                                    />
                                                    <img src="/images/calendar.svg" alt="calender" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label> Engagement Date
                                                        <span style={{ color: "red" }}> {!engagementDate ? error.engagementDate : ""}</span></label>
                                                    <DatePicker
                                                        customInput={<ExampleCustomInput />}
                                                        selected={engagementDate}
                                                        value={engagementDate}
                                                        onChange={(date) => setEngagementDate(date)}
                                                        name="engagementDate"
                                                    // maxDate={new Date()}
                                                    />
                                                    <img src="/images/calendar.svg" alt="calender" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label> Marriage Date
                                                        <span style={{ color: "red" }}> {!marriageDate ? error.marriageDate : ""}</span></label>
                                                    <DatePicker
                                                        customInput={<ExampleCustomInput />}
                                                        selected={marriageDate}
                                                        value={marriageDate}
                                                        onChange={(date) => setMarriageDate(date)}
                                                        name="marriageDate"
                                                    // maxDate={new Date()}
                                                    />
                                                    <img src="/images/calendar.svg" alt="calender" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div className="col-md-12">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Notes <span style={{ color: "red" }}>{!addData.convictionsDescribe ? error.convictionsDescribe : ""} </span></label>

                                                    <textarea
                                                        placeholder_name="Description"
                                                        inputId="partnershipNotes"
                                                        input_name="partnershipNotes"
                                                        name="partnershipNotes"
                                                        value={addData.partnershipNotes}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </> : ""}
                                <br />

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <select className="form-control" onClick={() => { setIsMedicalDetails(!isMedicalDetails) }} style={{ minWidth: "100%", textAlign: "center" }}> <option>Medical Details </option></select>
                                        </div>
                                    </div>
                                </div>
                                {isMedicalDetails ?
                                    <>
                                        <div className="row" >
                                            <div className="col-md-12">
                                                <h3> Medical Details </h3>
                                                <h4> Chest X-RAY Test</h4>
                                            </div>
                                        </div>

                                        {medicalXrayDetails?.map((data, index) => {
                                            return (

                                                <div key={index} class="row">
                                                    <div className="col-md-6">
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <label> Issue Date  <span className={styles.required}>*</span>
                                                                <span style={{ color: "red" }}> {!medicalXrayDetails[0]?.issueDate ? error.medicalXrayIssueDate : ""}</span></label>
                                                            <DatePicker
                                                                customInput={<ExampleCustomInput />}
                                                                selected={data.issueDate ? new Date(data.issueDate) : null}
                                                                value={data.issueDate}
                                                                onChange={(date) => onChangeMedicalXrayDetails(date, "issueDate", data)}
                                                                name="issueDate"
                                                                maxDate={new Date()}
                                                            />
                                                            <img src="/images/calendar.svg" alt="calender" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <label>Number <span className={styles.required}>*</span>
                                                                <span style={{ color: "red" }}> {!medicalXrayDetails[0]?.number ? error.medicalXrayNumber : ""}</span></label>
                                                            <InputFiled
                                                                type_name="text"
                                                                placeholder_name=""
                                                                inputId="number"
                                                                input_name="number"
                                                                value={data.number?.trim()}
                                                                onChange={(event) => { onChangeMedicalXrayDetails(event, data) }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}


                                        <div className={`col-md-12 ${styles.LinkSec}`}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <a style={{ cursor: "pointer" }} onClick={addMoreMedicalXrayDetails}>+ Add More </a>
                                            </div>
                                        </div>

                                        <div className="row" >
                                            <div className="col-md-12">
                                                <h4>Medical Test </h4>
                                            </div>
                                        </div>

                                        {medicalTestDetails?.map((data, index) => {
                                            return (

                                                <div key={index} class="row">
                                                    <div className="col-md-6">
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <label> Issue Date <span className={styles.required}>*</span>
                                                                <span style={{ color: "red" }}> {!medicalTestDetails[0]?.issueDate ? error.medicalTestIssueDate : ""}</span></label>
                                                            <DatePicker
                                                                customInput={<ExampleCustomInput />}
                                                                selected={data.issueDate ? new Date(data.issueDate) : null}
                                                                value={data.issueDate}
                                                                onChange={(date) => onChangeMedicalTestDetails(date, "issueDate", data)}
                                                                name="issueDate"
                                                                maxDate={new Date()}
                                                            />
                                                            <img src="/images/calendar.svg" alt="calender" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <label>Number  <span className={styles.required}>*</span>
                                                                <span style={{ color: "red" }}> {!medicalTestDetails[0]?.number ? error.medicalTestNumber : ""}</span></label>
                                                            <InputFiled
                                                                type_name="text"
                                                                placeholder_name=""
                                                                inputId="number"
                                                                input_name="number"
                                                                value={data.number?.trim()}
                                                                onChange={(event) => { onChangeMedicalTestDetails(event, data) }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}


                                        <div className={`col-md-12 ${styles.LinkSec}`}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <a style={{ cursor: "pointer" }} onClick={addMoreMedicalTestDetails}>+ Add More </a>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div className="col-md-12">
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <label>Notes <span className={styles.required}>*</span> <span style={{ color: "red" }}>{!addData.medicalNotes ? error.medicalNotes : ""} </span></label>

                                                    <textarea
                                                        placeholder_name="Description"
                                                        inputId="medicalNotes"
                                                        input_name="medicalNotes"
                                                        name="medicalNotes"
                                                        value={addData.medicalNotes}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </> : ""}
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <select className="form-control" onClick={() => { setIsPoliceDetails(!isPoliceDetails) }} style={{ minWidth: "100%", textAlign: "center" }}> <option> Police Certificate </option></select>
                                        </div>
                                    </div>
                                </div>
                                {isPoliceDetails ?
                                    <>
                                        <div class="row">
                                            <div className="col-md-6">
                                                <h3> Police Certificate </h3>
                                            </div>
                                        </div>
                                        <br />

                                        {policeCertificate?.map((data, index) => {
                                            return (

                                                <div class="row">
                                                    <div className="col-md-6">
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <label>Country <span className={styles.required}>*</span>
                                                                <span style={{ color: "red" }}> {policeCertificate[0]?.country?.length == 0 ? error.policeCertificateCountry : ""}</span></label>
                                                            <select class="form-control" name="country" value={data.country} onChange={(event) => { onChangePoliceCertificate(event, data) }} size="0">
                                                                <option value="select">Select</option>
                                                                {countryList?.map((li, i) => <option value={li._id}>{li.countryName}</option>)}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <label> Issue Date <span className={styles.required}>*</span>
                                                                <span style={{ color: "red" }}> {!policeCertificate[0]?.issueDate ? error.policeCertificateNumber : ""}</span></label>
                                                            <DatePicker
                                                                customInput={<ExampleCustomInput />}
                                                                selected={data.issueDate ? new Date(data.issueDate) : null}
                                                                value={data.issueDate}
                                                                onChange={(date) => onChangePoliceCertificate(date, "issueDate", data)}
                                                                name="issueDate"
                                                                maxDate={new Date()}
                                                            />
                                                            <img src="/images/calendar.svg" alt="calender" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div className="row" >
                                            <div className={`col-md-12 ${styles.LinkSec}`}>
                                                <div className={`form-group ${styles.fromGroup}`}>
                                                    <a style={{ cursor: "pointer" }} onClick={addMorePoliceDetails}>+ Add More </a>
                                                </div>
                                            </div>
                                        </div>
                                    </> : ""}
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <select className="form-control" onClick={() => { setIsVisaRefusalDetails(!isVisaRefusalDetails) }} style={{ minWidth: "100%", textAlign: "center" }}> <option> Any Previous VISA refusal  </option></select>
                                        </div>
                                    </div>
                                </div>
                                {isVisaRefusalDetails ?
                                    <>
                                        <div class="row">
                                            <h4 className="col-md-12 mt-3"> Any Previous VISA refusal ? <span style={{ color: "red" }}>*</span></h4>
                                            <div className={`form-group col-12 ${styles.fromGroup}`}>
                                                <label><span className={styles.required}></span> <span style={{ color: "red" }}>{!addData.previousRefusal ? error.previousRefusal : ""} </span></label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className={styles.radio}>
                                                            <input id="radio-1" name="previousRefusal" onChange={handleChange} value="true" checked={String(addData.previousRefusal) == "true" ? true : false} type="radio" />
                                                            <label for="radio-1" className={styles.radioLabel}>Yes</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className={styles.radio}>
                                                            <input id="radio-2" name="previousRefusal" onChange={handleChange} value="false" checked={String(addData.previousRefusal) == "false" ? true : false} type="radio" />
                                                            <label for="radio-2" className={styles.radioLabel}>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {String(addData.previousRefusal) == "true" ?
                                            <>
                                                {refusalVisaDetails?.map((data, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div class="row">

                                                                <div className="col-md-4">
                                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                                        <label>Country <span className={styles.required}>*</span>
                                                                            <span style={{ color: "red" }}> {(addData.previousRefusal && refusalVisaDetails[0]?.country?.length == 0) ? error.refusalCountry : ""}</span></label>
                                                                        <select class="form-control" name="country" value={data.country._id} onChange={(e) => { onChangeVisaRefusalDetails(e, data) }} size="0">
                                                                            <option value="">Select</option>
                                                                            {countryList?.map((li, i) => <option value={li._id}>{li.countryName}</option>)}

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                                        <label>VISA Type <span className={styles.required}>*</span> <span style={{ color: "red" }}> {(addData.previousRefusal && refusalVisaDetails[0]?.visaType?.length == 0) ? error.refusalVisaType : ""}</span></label>
                                                                        <select class="form-control" name="visaType" value={data.visaType._id} onChange={(e) => { onChangeVisaRefusalDetails(e, data) }} size="0">
                                                                            {visaTypeList.length !== 0 ?
                                                                                <> <option value="">Select</option>
                                                                                    {visaTypeList?.map((li, i) => <option value={li._id}>{li.visaType}</option>)}
                                                                                </> :
                                                                                <option value={data.visaType._id}>{data.visaType.visaType} </option>
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-4">
                                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                                        <label>Refusal Date <span className={styles.required}>*</span>
                                                                            <span style={{ color: "red" }}> {(addData.previousRefusal && !refusalVisaDetails[0]?.dateOfRefusal) ? error.refusalDate : ""}</span></label>
                                                                        <DatePicker
                                                                            customInput={<ExampleCustomInput />}
                                                                            selected={data.dateOfRefusal ? new Date(data.dateOfRefusal) : null}
                                                                            value={data.dateOfRefusal}
                                                                            onChange={(date) => { onChangeVisaRefusalDetails(date, "dateOfRefusal", data) }}
                                                                            name="dateOfRefusal"
                                                                            maxDate={new Date()}
                                                                        />
                                                                        <img src="/images/calendar.svg" alt="calender" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div className="col-md-12">
                                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                                        <label> Reason of Refusal <span className={styles.required}>*</span> <span style={{ color: "red" }}>{(addData.previousRefusal && !refusalVisaDetails[0]?.reasonOfRefusal) ? error.refusalReason : ""} </span></label>

                                                                        <textarea
                                                                            placeholder_name="Description"
                                                                            inputId="reasonOfRefusal"
                                                                            input_name="reasonOfRefusal"
                                                                            name="reasonOfRefusal"
                                                                            value={data.reasonOfRefusal}
                                                                            onChange={(e) => { onChangeVisaRefusalDetails(e, data) }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                <div className="row" >
                                                    <div className={`col-md-12 ${styles.LinkSec}`}>
                                                        <div className={`form-group ${styles.fromGroup}`}>
                                                            <a style={{ cursor: "pointer" }} onClick={addMoreVisaRefusalDetails}>+ Add More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> : ""}
                                    </> : ""}
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <select className="form-control" onClick={() => { setIsConvictions(!isConvictions) }} style={{ minWidth: "100%", textAlign: "center" }}> <option> Any Convictions</option></select>
                                        </div>
                                    </div>
                                </div>
                                {isConvictions ?
                                    <>
                                        <div class="row">
                                            <h4 className="col-md-12 mt-3"> Any Convictions ? <span style={{ color: "red" }}>*</span> </h4>
                                            <div className={`form-group col-12 ${styles.fromGroup}`}>
                                                <label><span className={styles.required}></span> <span style={{ color: "red" }}>{!addData.convictions ? error.convictions : ""} </span></label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className={styles.radio}>
                                                            <input id="radio-3" name="convictions" onChange={handleChange} value="true" checked={String(addData.convictions) == "true" ? true : false} type="radio" />
                                                            <label for="radio-3" className={styles.radioLabel}>Yes</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className={styles.radio}>
                                                            <input id="radio-4" name="convictions" onChange={handleChange} value="false" checked={String(addData.convictions) == "false" ? true : false} type="radio" />
                                                            <label for="radio-4" className={styles.radioLabel}>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {String(addData.convictions) == "true" ?
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label>Type Of Conviction <span className={styles.required}>*</span>{!addData.convictionType ? error.convictionType : ""} </label>
                                                        <select className="form-control" name="convictionType" onChange={handleChange} value={addData.convictionType}>
                                                            <option></option>
                                                            {allConvictionList?.map((data, index) => <option key={index} value={data._id}>{data.title}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className={`form-group ${styles.fromGroup}`}>
                                                        <label> Describe Conviction <span className={styles.required}>*</span> <span style={{ color: "red" }}>{!addData.convictionsDescribe ? error.convictionsDescribe : ""} </span></label>
                                                        <textarea
                                                            placeholder_name="Description"
                                                            inputId="convictionsDescribe"
                                                            input_name="convictionsDescribe"
                                                            name="convictionsDescribe"
                                                            value={addData.convictionsDescribe}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div> : ""}
                                    </> : ""}
                                <br />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="checkbox3" name="isPotential" type="checkbox" checked={isPotential} onChange={(e) => { setIsPotential(!isPotential) }} />
                                                <label for="checkbox3" className={styles.checkboxLabel}>Yes, Client is potential to me</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ********************************************************************************** */}
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className={`col-md-9 ${styles.ButtonGroup}`}>
                                        <div className="row">
                                            <div className="col-md-4">
                                            </div>
                                            <div className="col-md-4">
                                                <button disabled={isLoading} className={styles.SandBtn} onClick={(event) => { add_profile_details(event, false) }}>{isLoading ? <> <i class="fa fa-refresh fa-spin"></i>  Loading </> : "Submit"}</button>
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
export default ClientProfile;