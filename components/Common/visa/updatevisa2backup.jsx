import InputFiled from "../../Auth/Common/input_filed";
import { Fragment, useEffect, useState, useRef } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import { visalist_for_particular_lia } from "../../helpers/business_owner_service";
import {  lia_agent_add_visa_type, visaTpe_update_for_lia } from "../../helpers/lia_services";
import AdminApprovedBW from '../Modals/admin_approved_BW';
import { uniq as _uniq } from "lodash";

const UpdateVisaList = ({ type }) => {
    const route = useRouter()
    const [isSearching, setSearching] = useState("")
    const [error, setError] = useState("")
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [visaList, setVisaList] = useState([])
    const [noData, setNodata] = useState("")
    const [selectedCountryName, setSelectedCountryName] = useState([])
    const [isLiaAgent, setIsLiaAgent] = useState(false)
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isResponse, setIsResponse] = useState(false)
    const [checkedVisa, setCheckedVisa] = useState({})
    const [reRender, setReRender] = useState(false)

    const isCheckRender = useRef(true)

    useEffect(() => {
            getAllVisaList()
            if (localStorage.role == "liaAgent") {
                setIsLiaAgent(true)
            } else {
                setIsLiaAgent(false)
                visa_type_perticular_lia()
            }
            isCheckRender.current = false
        const arry = [1, 2, 1, 3, 4, 3, 5];



    }, [reRender])

    const visa_type_perticular_lia = async () => {
        const response = await visalist_for_particular_lia()
        if (response.code == 200) {
            setVisaList((prev) => {
                return ([...prev, ...response.result[0].visaTypes])
            })

        }
    }

    const getAllVisaList = async () => {
        setIsLoading(true)
        if (localStorage.role == "liaAgent") {
            if (type == "update") {
                const response = await visaTpe_update_for_lia()
                let tempArray = visaList
                if (response.code == 200) {
                    setIsLoading(false)
                    handleAddVisaType(response.country)
                    let isVisaList = response?.result?.map((item, i) => {
                        return ({ ...item, isChecked: item.select, visaTypeId: item._id, NewId: Math.floor(1000 + Math.random() * 9000) })
                    })
                    setVisaList(isVisaList)
                    response.result?.filter((data=>data.select)).length == tempArray.length ? setIsAllChecked(true): setIsAllChecked(false)
console.log(response.result?.filter((data=>data.select)).length, tempArray.length)
                }
                else if (response.code == 400) {
                    setNodata(response.message)
                    setIsLoading(false)
                }
            }
        }
    }

    const addVisaType = async () => {
        let CountId = visaList.length > 0 && visaList?.reduce(function (acc, current) {
            if (current.isChecked == true)
                acc.push(current)


            return acc;
        }, [])
        let isNewData = visaList.filter((data) => data.isChecked).map((itm) => {
            return ({ countryId: itm.countryId._id, visaTypeId: itm._id })
        }).filter((data) => {
            if (data.visaTypeId.length > 0) {
                return data
            }
        })
        if (isNewData.length > 0) {
            setIsResponse(true)
            let visaID = CountId.map((li) => li._id);
            if (localStorage.role == "liaAgent") {
                const response = await lia_agent_add_visa_type(isNewData)
                if (response.code == 200) {
                    // localStorage.setItem("visaType", JSON.stringify(visaID))
                    route.push("/LIA/dashboard")
                    setIsResponse(false)
                } else {
                    setIsResponse(false)
                    setError(response.message)
                }
            }
        } else {
            setError("Please select visa type")
        }

    }
    const handleChange = (e) => {
        e.preventDefault()
        setSearching(e.target.value)
    }
   

    const CheckedBox = (id) => {
        let tempArray = visaList;
        let checkBoxArrayVisa = [];
        let checkNumberOfVisaSelect = [];
        let newData = tempArray.map((itm) => {
            return ({ ...itm, isChecked: itm._id == id ? !itm.isChecked : itm.isChecked })
        })

        newData.forEach((item) => {
            checkBoxArrayVisa.push(item)
        })

        checkNumberOfVisaSelect = checkBoxArrayVisa;
        let _checkNumberOfVisaSelect = checkNumberOfVisaSelect.filter((item) => item.isVisaChecked)
        if (checkBoxArrayVisa.length === _checkNumberOfVisaSelect.length) {
            setIsAllChecked(true)
        } else {
            setIsAllChecked(false)
        }
        setVisaList((prev) => {
            return ([...newData])
        })

    }

    let VisaList = visaList?.filter((flterData) => {
        if (isSearching == "") {
            return flterData
        } else if (flterData?.visaType?.toLowerCase().includes(isSearching.toLowerCase())) {
            return flterData
        }
    }).map((item, index) => {
        return (
            <div key={item._id + index} className={`form-group ${styles.fromGroup}`}>
                <div className={styles.selectinputBox}>
                    <input
                        id={item.NewId + '' + item._id}
                        name="checkbox"
                        type="checkbox"
                        checked={item.isChecked === true ? item._id : ""}
                        onChange={(e) => { CheckedBox(item._id, item) }} />

                    <label for={item.NewId + '' + item._id} className={styles.checkboxLabel}>{`${item.visaType} ( ${item.countryId.countryName})`}</label>


                </div>
            </div>
        )
    })


    // for add visa type 
    const handleAddVisaType = (selectedCountryData) => {
        let _countryData = selectedCountryData?.reduce(function (acc, curr) {
            if (selectedCountryData) {
                acc.push(curr)
            }
            return acc;
        }, [])
        if (_countryData?.length > 0) {
            _countryData?.map((item, i) => {
                let name = [{ isname: item.countryName, id: item._id }];
                setSelectedCountryName((prev) => {
                    return ([...prev, ...name])
                })
                return (item)
            })
        }
    }

    const selectAllCheckeBox = (e, i) => {
        const { name, checked } = e.target;
        if (name == "allselect") {
            setVisaList((prev) => {
                return ([...prev.map((itm) => {
                    return ({ ...itm, isChecked: isAllChecked ? false : true, visaTypeId: itm._id })
                })])
            })
            setIsAllChecked(!isAllChecked)
        }

        visaList.map((data, index) => {
            let { _id, countryId } = data

            if (_id in checkedVisa && isAllChecked) {
                delete checkedVisa[_id]
            }
            else {
                checkedVisa[_id] = countryId._id
            }
            setCheckedVisa(checkedVisa)
        })
        // console.log("Viusalist", val);

    }
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <AdminApprovedBW
                    open={open} />
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <h3 className="">VISA Types I'm Working for  </h3>
                            <div className={styles.visaStatus}>
                                <div className="row"><span style={{ color: "red" }}>{error}</span>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-8 m-auto">
                                        <div className={styles.searchSection}>
                                            <form>
                                                <div className="input-group">
                                                    <InputFiled type_name="" placeholder_name="Search by Visa Type"
                                                        inputId="" input_name="" value={isSearching} onChange={handleChange} class_name="form-control" />
                                                </div>
                                                <span className="mt-4 d-block">
                                                    <span style={{ color: "red" }}>  </span>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-8 m-auto`}>
                                        <div className={styles.visaStatusDiv}>
                                            {VisaList.length > 0 && isSearching.length == 0 ? <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox" checked={isAllChecked} name="allselect" type="checkbox" onChange={(e) => selectAllCheckeBox(e, null)} />
                                                    <label for="checkbox" className={styles.checkboxLabel}>Select All Visa Type</label>
                                                </div>
                                            </div> : ""}
                                            {isLoading ?
                                                <p>Loading...</p>
                                                : VisaList.length > 0 ? VisaList : <p className={styles.Nodata}> No data found</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                        {VisaList.length > 0 ? <div className="row">
                                            <div className={`col-md-7 m-auto text-right ${styles.buttonGroup}`}>
                                                {isResponse ? <button desabled > Loading... </button>
                                                    :
                                                    <button onClick={addVisaType}> Update </button>}
                                            </div>
                                        </div> : ""}
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
export default UpdateVisaList;
