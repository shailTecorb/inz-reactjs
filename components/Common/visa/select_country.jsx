import InputFiled from "../../Auth/Common/input_filed";
import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import { lia_allCountry_list } from "../../helpers/business_owner_service";
import { country_list_for_lia, country_update_for_lia, lia_agent_add_country } from "../../helpers/lia_services"
import { Backdrop, CircularProgress } from "@mui/material";
import { IdContext } from "../../MyContext/IdDetailsContext";

const SelectCountry = ({type}) => {
    const route = useRouter()
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [isSearching, setSearching] = useState("")
    const [countryList, setCountryList] = useState([])
    const [count, setCount] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [checkLocalCountryId, setLocalCountryId] = useState()
    const [isLiaAgent, setIsLiaAgent] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false);
    const [isResponse, setIsResponse] = useState(false)
     const{setCountryId} = useContext(IdContext)
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
        if (localStorage.countryId) {
            let selectCountries = JSON.parse(localStorage.countryId)
            setCount(selectCountries.length)
            setLocalCountryId(selectCountries.length)
        }
    }
    const countryListAPiData = async () => {
        setLoading(true)
        let ID = localStorage.countryId ? localStorage.countryId : []
        if (localStorage.role == "businessOwner") {
            const countryResponse = await lia_allCountry_list(isSearching)
            if (countryResponse.code == 200) {
                setLoading(false)
                setTotalCount(countryResponse.result.length)
                let isCountryList = countryResponse?.result?.countryId?.map((item, i) => {
                    return ({ ...item, isChecked: ID?.includes(item._id) ? true : false })
                }
                )
                setCountryList(isCountryList)
                let checkSelectedCountry = countryResponse?.result?.filter((data)=>data.select)
                setCount(checkSelectedCountry.length)
                if(checkSelectedCountry.length == countryResponse?.result.length){
                   
                    setIsAllChecked(true)
                }else{
                    setIsAllChecked(false)
                }
            }

        } else if (localStorage.role == "liaAgent" || localStorage.role=="manager") {
            if(type=="update"){
                const countryResponse = await country_update_for_lia(isSearching)
                if (countryResponse.code == 200) {
                    setTotalCount(countryResponse.result.length)
                    setLoading(false)
                let checkSelectedCountry = countryResponse?.result?.filter((data)=>data.select)
                setCount(checkSelectedCountry.length)
                if(checkSelectedCountry.length == countryResponse?.result.length){
                   
                    setIsAllChecked(true)
                }else{
                    setIsAllChecked(false)
                }
                    let isCountryList = countryResponse?.result?.map((item, i) => {
                        return ({ ...item, isChecked: item.select })
                    })
                    setCountryList(isCountryList)
                }
            }
            else{
                const countryResponse = await country_list_for_lia(isSearching)
                if (countryResponse.code == 200) {
                    setTotalCount(countryResponse.result.length)
                    setLoading(false)
                    let isCountryList = countryResponse?.result?.map((item, i) => {
                        return ({ ...item, isChecked: item.select })
                    })
                    setCountryList(isCountryList)
                    let checkSelectedCountry = countryResponse?.result?.filter((data)=>data.select)
                    setCount(checkSelectedCountry.length)
                if(checkSelectedCountry.length == countryResponse?.result.length){
                   
                    setIsAllChecked(true)
                }else{
                    setIsAllChecked(false)
                }
                } else {
                    setLoading(false)
                }
            }
           
        } 
    }
    const addCountry = async (e) => {
        let CountId = countryList?.reduce(function (acc, current) {
            if (current.isChecked) {
                acc.push(current.countryId?._id)
            }
            return acc;
        }, [])
        if (CountId.length == 0) {
            e.preventDefault()
            setError("Please Select Country")

        }
        else {
            setIsResponse(true)

            if (localStorage.role == "businessOwner" && CountId.length !== 0) {
            //     const response = await business_addCountry(CountId)
            //     if (response.code == 200) {
            //         setIsResponse(false)
            //         localStorage.setItem("countryId", JSON.stringify(CountId))
            //         setCountryId(CountId)
            //         route.push("/busines/owner/visa/visalist")
            //     }
            //     else if (response.code == 400) {
            //         setError(response.message)
            //         setIsResponse(false)
            //     }
            //     else {
            //         setError("Please Select Country")

            //     }
            } 
            else if (localStorage.role == "liaAgent" && !CountId == "") {
                const response = await lia_agent_add_country(CountId)
                if (response.code == 200) {
                    setIsResponse(false)
                    setCountryId(CountId)
                    route.push("/LIA/Selectvisa")
                }
                else if (response.code == 400) {
                    setError(response.message)
                    setIsResponse(false)
                }
                // else {
                //     setError("Please Select Country")

                // }
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
        console.log(newData, _checkNumberOfVisaSelect)

        setCountryList([...tempParent])
        setIsAllChecked(false)
        setError("")
        if(countryList.length == _checkNumberOfVisaSelect.length){
            setIsAllChecked(false)   
        }else{
            setIsAllChecked(true)
        }
    }

    const selectAllCheckeBox = (e, i) => {
        const { name, checked } = e.target;
        if (name == "allselect") {
            let tempUser = countryList?.map(user => { return { ...user, isChecked: isAllChecked ? false : true } })
            setCountryList(tempUser)
            setIsAllChecked(!isAllChecked)
            if (isAllChecked) {
                setCount(0)
                setError("")
            }
            else if (!isAllChecked) {
                setCount(tempUser.length)
            }
            else {
            }
        }
    }
    const handleCheckbox = () => {
        setCount(count + 1)
    }
    let FilterValue = countryList?.filter((flterData) => {
        if (isSearching == "") {
            return flterData
        } else if (flterData.countryId?.countryName.toLowerCase().includes(isSearching.toLowerCase())) {
            return flterData
        }
    })
    let CountryList
    if (FilterValue?.length > 0) {
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
                                (item.isChecked ? handleCheckbox() : setCount(count - 1))
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
                                                    Total Selected Countries <span>{count}</span>
                                                </li>
                                                <li>
                                                    Not Selected Countries <span>{totalCount - count} </span>
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
                                                            checked={isAllChecked}
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


                                                : (CountryList.length > 0 ? CountryList : <p className={styles.Nodata}> No data found</p>)}
                                        </div>
                                    </div>

                                    {CountryList.length > 0 ? <div className={`col-md-7 text-right  m-auto ${styles.buttonGroup}`}>
                                        {isResponse ?
                                            <button disabled className="mt-5"> Loading... </button>
                                            : <button onClick={addCountry} className="mt-5">{type=="update" ? "Update": "Next"} </button>
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
export default SelectCountry;