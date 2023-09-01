import InputFiled from "../Auth/Common/input_filed"
import { Fragment, useEffect, useState } from "react";
import styles from "../../styles/query.module.scss"
import { useRouter } from 'next/router';
import { business_allCountry_list, business_UpdateCountry } from "../helpers/business_owner_service";
import { country_list_for_lia, lia_agent_add_country } from "../helpers/lia_services"
import { Backdrop, CircularProgress } from "@mui/material";


const BOCountryList = () => {
    const route = useRouter()
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [isAllSelected, setIsAllSelected] = useState(false)
    const [isSearching, setSearching] = useState("")
    const [countryList, setCountryList] = useState([])
    const [count, setCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [isLiaAgent, setIsLiaAgent] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false);
    const [isResponse, setIsResponse] = useState(false)

    const handleChange = (e) => {
        setSearching(e.target.value)
    }

    useEffect(() => {
        getCountryFromLocalAndSetData()
        if (localStorage.role == "liaAgent") {
            setIsLiaAgent(true)
        } else if (localStorage.role == "businessOwner") {
            setIsLiaAgent(false)
        } else if (!localStorage.token) {
            window.location.href = "/"
        }

    }, [])

    const getCountryFromLocalAndSetData = () => {
        countryListAPiData()

    }
    const countryListAPiData = async () => {
        setLoading(true)
        let ID = localStorage.countryId ? localStorage.countryId : []
        if (localStorage.role == "businessOwner") {
            const countryResponse = await business_allCountry_list(isSearching)
            if (countryResponse.code == 200) {
                setLoading(false)
                let isCountryList = countryResponse?.result?.countries?.map((item, i) => {
                    // return ({ ...item, isChecked: ID?.includes(item._id) ? true : false })
                    return ({ ...item, isChecked: item.select })
                }
                )
                setCountryList(isCountryList)
                isCountryList.filter((data) => data.select).length == isCountryList.length && setIsAllSelected(true)
                setTotalCount(isCountryList.filter((data) => data.select).length)
                setCount(isCountryList.length - isCountryList.filter((data) => data.select).length)

            }
            // let newData =

        } else if (localStorage.role == "liaAgent") {
            const countryResponse = await country_list_for_lia(isSearching)
            if (countryResponse.code == 200) {
                setTotalCount(countryResponse.totalCountry)
                setLoading(false)
                let isCountryList = countryResponse?.result?.countryId.map((item, i) => {
                    return ({ ...item, isChecked: ID?.includes(item._id) ? true : false })
                })
                setCountryList(isCountryList)
            } else {
                setLoading(false)
            }
        } else {

        }
    }



    const updateCountry = async (e) => {
        let isNewData = countryList.map((item) => {
            return ({ countryId: item.countryId?._id, select: item.isChecked })
        })
        if (isNewData.length == 0) {
            e.preventDefault()
            setError("Please Select Country")

        }
        else {
            setIsResponse(true)

            if (localStorage.role == "businessOwner" && isNewData.length !== 0) {
                const response = await business_UpdateCountry(isNewData)
                if (response.code == 200) {
                    setIsResponse(false)
                    route.push("/busines/owner/dashboard")
                }
                else if (response.code == 400) {
                    setError(response.message)
                    setIsResponse(false)
                }
                else {
                    setError("Please Select Country")

                }
            } else if (localStorage.role == "liaAgent" && !isNewData == "") {
                const response = await lia_agent_add_country(isNewData)
                if (response.code == 200) {
                    setIsResponse(false)
                    localStorage.setItem("countryId", JSON.stringify(isNewData))
                    route.push("/LIA/Selectvisa")
                }
                else if (response.code == 400) {
                    setError(response.message)
                    setIsResponse(false)
                }
                else {
                    setError("Please Select Country")

                }
            }
        }


    }
    const CheckedBox = (id, status) => {
        let tempParent = countryList
        for (let j = 0; j < countryList.length; j++) {
            if (tempParent[j]._id === id) {
                tempParent[j].isChecked = !tempParent[j].isChecked
            }
            else {
                tempParent[j].isChecked = tempParent[j].isChecked
            }
        }
        let newData = tempParent.map((itm) => {
            return ({ ...itm, isChecked: itm._id == id ? !itm.isChecked : itm.isChecked })

        })

        let _checkNumberOfVisaSelect = newData.filter((item) => item.isChecked)
        let checkTrueAll = tempParent.reduce((acc, curr) => {
            if (curr.isChecked) {
                acc.push(curr._id)
            }
            return acc;
        }, [])

        setCountryList([...tempParent])
        setIsAllChecked(false)
        setError("")
        if (checkTrueAll.length == tempParent.length) {
            setIsAllSelected(true)
        } else {
            setIsAllSelected(false)

        }
    }

    const selectAllCheckeBox = (e, i) => {

        setIsAllSelected(!isAllSelected)
        const { name, checked } = e.target;
        if (name == "allselect") {
            let tempUser = countryList?.map(user => { return { ...user, isChecked: isAllSelected ? false : true } })
            setCountryList(tempUser)
            setIsAllChecked(isAllSelected)
            if (isAllSelected) {

                setCount(countryList.length)
                setTotalCount(0)
                setError("")
            }
            else if (!isAllSelected) {
                setTotalCount(countryList.length)
                setCount(0)

            }
            else {
            }
        }
    }
    const handleCheckbox = (type) => {
        if (type) {
            setCount(count - 1)
            setTotalCount(totalCount + 1)
        }
        else {
            setCount(count + 1)
            setTotalCount(totalCount - 1)

        }

    }
    let FilterValue = countryList?.filter((flterData) => {
        if (isSearching == "") {
            return flterData
        } else if (flterData.countryId?.countryName?.toLowerCase().includes(isSearching.toLowerCase())) {
            return flterData
        }
    })
    let CountryList
    if (FilterValue.length > 0) {
        CountryList = FilterValue?.map((item, index) => {
            return (
                <div className={`form-group ${styles.fromGroup}`}>
                    <div className={styles.selectinputBox}>
                        <input id={item.countryId?._id}
                            name="checkbox"
                            type="checkbox"
                            checked={item.isChecked === true ? item.countryId?._id : ""}
                            onChange={(e) => {
                                CheckedBox(item._id, item.isChecked);
                                (item.isChecked ? handleCheckbox(true) : handleCheckbox(false))
                            }} />
                        <label for={item.countryId?._id} className={styles.checkboxLabel}>{item.countryId?.countryName}</label>
                    </div>
                </div>
            )
        })
    }
    else {
        CountryList = []

    }
    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <h3 className=""> Countries I'm workiing for </h3>
                            <div className={styles.visaStatus}>

                                {CountryList.length > 0 ?


                                    <div className="row">
                                        <div className={`col-md-8 m-auto  ${styles.clientStatus}`}>
                                            <ul>
                                                <li>
                                                    Total Selected Countries <span>{totalCount}</span>
                                                </li>
                                                <li>
                                                    Not Selected Countries <span>{count} </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    : ""}
                                <span style={{ color: "red", marginLeft: "178px" }}> {error}</span>

                                <div className="row mt-3">
                                    <div className="col-md-8 m-auto">
                                        <div className={styles.searchSection}>
                                            <div className="input-group">
                                                <InputFiled type_name="" placeholder_name="Search by name, id, or internal" inputId=""
                                                    input_name="" class_name="form-control" value={isSearching} onChange={handleChange} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`col-md-8 m-auto`}>
                                        <div className={styles.visaStatusDiv}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                {CountryList.length > 0 && isSearching.length == 0 ?
                                                    <div className={styles.selectinputBox}>
                                                        <input id="allselect"
                                                            name="allselect"
                                                            type="checkbox"
                                                            checked={isAllSelected}
                                                            onChange={(e) => { selectAllCheckeBox(e, null) }}
                                                        />
                                                        <label for="allselect" className={styles.checkboxLabel}>Select all countries</label>
                                                    </div> : ""}
                                            </div>
                                            {isLoading ? <Backdrop
                                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                open={open} >
                                                <CircularProgress color="inherit" />
                                            </Backdrop>


                                                : (CountryList.length > 0 ? CountryList : <p style={{ color: "red" }}> No data found</p>)}
                                        </div>
                                    </div>

                                    {CountryList.length > 0 ? <div className={`col-md-7 text-right  m-auto ${styles.buttonGroup}`}>
                                        {isResponse ?
                                            <button disabled className="mt-5"> Loading... </button>
                                            : <button onClick={updateCountry} className="mt-5">Update </button>
                                        }

                                    </div> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default BOCountryList;