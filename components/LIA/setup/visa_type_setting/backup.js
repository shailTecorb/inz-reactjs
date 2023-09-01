import InputFiled from "../../../Auth/Common/input_filed";
import { Fragment, useContext, useEffect, useState, useRef } from "react";
import styles from "../../../../styles/query.module.scss"
import  { useRouter } from 'next/router';
import {  business_add_visa_type} from "../../../helpers/business_owner_service";
import { IdContext } from "../../../MyContext/IdDetailsContext";
import { lia_agent_list_of_visa_type, lia_agent_add_visa_type } from "../../../helpers/lia_services";
import AdminApprovedBW from '../../../Common/Modals/admin_approved_BW';
import {uniq as _uniq} from  "lodash";

const ALLVISALIST = ({type}) => {
    const route = useRouter()
    const [isSearching, setSearching] = useState("")
    const [error, setError] = useState("")
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [visaList, setVisaList] = useState([])
    const [noData, setNodata] = useState("")
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isResponse, setIsResponse] = useState(false)
    const [checkedVisa, setCheckedVisa] = useState({})
    const {contryId} = useContext(IdContext)

    
    useEffect(() => {
            getAllVisaList()
    }, [])

  

    const getAllVisaList = async () => {
        setIsLoading(true)
        
        let _ID = localStorage.visaType ? localStorage.visaType : [];

        
         if (localStorage.role == "liaAgent") {
            
            const response = await lia_agent_list_of_visa_type(contryId, isSearching)        
                if (response.code == 200) {
                    setIsLoading(false)
                    handleAddVisaType(response.country)
                    let isVisaList = response?.result?.map((item, i) => {
                        return ({ ...item, isChecked: _ID?.includes(item._id) ? true : false ,visaTypeId : item.visaTypeId.map((it)=>{
                            return({...it,NewId : Math.floor(1000 + Math.random() * 9000),isVisaChecked : false})
                        }) })
                    }
                    )
                    let Visa = isVisaList.map((data) => data)
                    let VisaData = Visa.map((data) => data)
                    if (VisaData == []) {
                        setVisaList(Visa)
                    } else {
                        setVisaList(Visa)
                    }
    
                }
                else if (response.code == 400) {
                    setNodata(response.message)
                    setIsLoading(false)
                } 
            
        } 
    }

    const addVisaType = async () => {
        let CountId = visaList.length > 0 && visaList?.reduce(function (acc, current) {
            current.visaTypeId?.map(item=>{
                if(item.isVisaChecked==true)
                acc.push(current)
                
            })
            
            return acc;
        }, [])
        let isNewData = visaList.map((li)=>{
            return({...li,visaTypeId : li.visaTypeId.filter((data)=> data.isVisaChecked )})
        }).map((itm)=>{
           return({countryId : itm.countryId._id,visaTypeId : itm.visaTypeId.map((e)=> e._id)})
        }).filter((data)=>{
            if(data.visaTypeId.length > 0){
                  return data
            }
        })
        if (isNewData.length > 0) {
        setIsResponse(true)
            let countryId = CountId.map((li) => (li.countryId._id));
            let visaID = CountId.map((li) => li._id);
            if (localStorage.role == "businessOwner") {
                const response = await business_add_visa_type(isNewData)
                if (response.code == 200 && localStorage.approved == "false") {
                    localStorage.setItem("visaType", JSON.stringify(visaID))
                    setIsResponse(false)
                    setOpen(true)

                } else if (response.code == 200 && localStorage.approved == "true") {
                    localStorage.setItem("visaType", JSON.stringify(visaID))
                    setIsResponse(false)
                    route.push("/busines/owner/dashboard")
                }
                else {
                    setError(response.message)
                    setIsResponse(false)
                }

            } else if (localStorage.role == "liaAgent") {
                const response = await lia_agent_add_visa_type(isNewData)
                //  localStorage.setItem("visaType",JSON.stringify(visaID))
                if (response.code == 200) {
                    localStorage.setItem("visaType", JSON.stringify(visaID))
                    route.push("/busines/owner/visa/appointmentMode")
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
    const OpenModal = (e) => {
        //    e.preventDefault();
        setIsOpen(true)
    }
    const CloseModal = () => {
        setIsOpen(false)
    }


    const CheckedBox = (id, status) => {
        let tempArray = visaList;
        let checkBoxArrayVisa = [];
        let checkNumberOfVisaSelect = [];
        let newData = tempArray.map((itm)=>{
            return({...itm,visaTypeId : itm.visaTypeId.map((li)=>{
                return({...li,isVisaChecked : li.NewId == id ? !li.isVisaChecked : li.isVisaChecked})
            }) })
        })

        newData.forEach((item)=>{
            item.visaTypeId.forEach((it)=>{
                checkBoxArrayVisa.push(it)
            })
        })

        checkNumberOfVisaSelect = checkBoxArrayVisa;
        let _checkNumberOfVisaSelect = checkNumberOfVisaSelect.filter((item)=> item.isVisaChecked)
        if(checkBoxArrayVisa.length === _checkNumberOfVisaSelect.length){
            setIsAllChecked(true)
        }else{
            setIsAllChecked(false)
        }
        setVisaList((prev)=>{
            return([...newData])
        })

    }

    let VisaList = visaList?.filter((flterData) => {
        if (isSearching == "") {
            return flterData
        } else if (flterData?.visaType?.toLowerCase().includes(isSearching.toLowerCase())) {
            return flterData
        }
    }).map((item, index) => {
        console.log("item====>", item) 
        // // return items.map((item)=>{

        return item.visaTypeId.map((val,i)=>{
            return (
                <div key={item._id+index} className={`form-group ${styles.fromGroup}`}>
                    <div className={styles.selectinputBox}>
                        <input
                            id={val.NewId +''+item._id}
                            name="checkbox"
                            type="checkbox"
                            checked={val.isVisaChecked}
    
                            onChange={(e) => { CheckedBox(val.NewId, item) }} />

                           <label for={val.NewId +''+item._id} className={styles.checkboxLabel}>{`${val.visaType} ( ${item.countryId.countryName})`}</label>
                    </div>
                </div>
            )
        })
       
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
                // setSelectedCountryName((prev) => {
                //     return ([...prev, ...name])
                // })
                return (item)
            })
        }
    }

    const selectAllCheckeBox = (e, i) => {
        const { name, checked } = e.target;
        if (name == "allselect") {
            setVisaList((prev)=>{
                return([...prev.map((itm)=>{
                    return({...itm,visaTypeId : itm.visaTypeId.map((li)=>{
                        return({...li,isVisaChecked : isAllChecked ? false : true})
                    })})
                })])
            })
          
            setIsAllChecked(!isAllChecked)
        }
       
       visaList.map((data, index)=>{
            console.log("Checked", data);
            let {_id, countryId} = data
    
            if(_id in checkedVisa && isAllChecked){
                delete checkedVisa[_id]
            }
            else{
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
                            <h3 className="">VISA Types I’m Working for  </h3>
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
                                                //    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                                //                  open={open} >
                                                //             <CircularProgress color="inherit" />
                                                //    </Backdrop>
                                                : VisaList.length > 0 ? VisaList : <p className={styles.Nodata}> No data found</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                        {VisaList.length > 0 ? <div className="row">
                                            <div className={`col-md-7 m-auto text-right ${styles.buttonGroup}`}>
                                                {isResponse ? <button desabled > Loading... </button>
                                                :
                                                <button onClick={addVisaType}> Next </button>}
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
export default ALLVISALIST;









