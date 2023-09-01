import { Fragment, useState,useEffect } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import {business_add_visa_type_by_modal,businesOwnerCountryList} from "../../helpers/business_owner_service"
const AddVisaType = ({ isModalOpen, setIsModalOpen,style }) => {

    const [allSelectedCountry, setAllSelectedCountry] = useState([])
    const [ countryId, setCountryData] = useState()
    const [ title, setTitle] =useState("");
    const [status,setStatus] = useState(true)
    const [msg,setMsg] = useState("")

useEffect(()=>{
    getCountryList()
},[])
const onChangeCountry = (e) =>{
       setCountryData(e.target.value) 
}
//************************************ getting country list whose select status is true **************************************************************** */
const getCountryList = async()=>{
    const response = await businesOwnerCountryList()
    if(response.code == 200){
        let newArr = response.result?.countries
         const newcountry = newArr.filter((item)=>item.select)
        setAllSelectedCountry(newcountry)
    }
}
//************************************ on submit function  ******************************************************* */
    const handleSubmit = async(e) =>{
        e.preventDefault()

        if(!countryId || countryId=="select"  || !title || !status || status == "select"){
            setMsg("Please fill all data ")
        }else{
            setMsg("")
            let data = {
                countryId:countryId,
                visaType:title,
                isActive:status
            }
            const response = await business_add_visa_type_by_modal(data)
        if(response.code == 200){
            console.log(response,"response")
            setCountryData("")
            setTitle("")
            setStatus(true)
            setIsModalOpen(false)
            window.location.reload();
        }
        else {
            setMsg("this visa type already exist ")
        }
        }
    }
   let CountryList = allSelectedCountry?.map((item,i) =>(  <option value={item?.countryId?._id} key={i}>{item?.countryId?.countryName}</option>))
    return (
        <Fragment>
           <button onClick={()=>{setIsModalOpen(true)}} className={`${styles.SandBtn} mt-0 mb-0`}>Add Visa Type</button>
            <ReactModal
                className={`${styles.customeModal} ${styles.customeMoneyModal}  ${styles.customeAccountModal}`}
                isOpen={isModalOpen}
                style={
                    { overflowY: "scroll" }}
            >
                <div class={styles.modalHeader} >
                    <div class="row">
                        <div class="col-10">
                            <h4>Add Visa Type</h4>
                             <span style={{color:"red",textAlign:"center"}}>{msg}</span>
                        </div>
                        <div class="col-2">
                            <button style={{cursor:"pointer"}} className={styles.closeBtn} onClick={()=>{setIsModalOpen(false)}}><img src="/images/popupcross.svg" /></button><br />
                        </div>
                    </div>
                </div>
                <div className={styles.genrateLink}>
                    <div className={styles.genrateLinkSec}>
                        <form>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Visa For</h3>
                                <select
                                    class="form-control"
                                    name="country"
                                    size="0" 
                                    value={countryId}
                                    onChange={(e)=>{onChangeCountry(e)}}
                                     >
                                    <option value="select">Select Country </option>                               
                                        {CountryList}
                                </select>
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Visa Title</h3>
                                <input type="text" id="title" name="title"
                                    value={title}
                                    onChange={(e) =>{setTitle(e.target.value)}}
                                    placeholder="Visa Type"
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Status</h3>
                                <select
                                    class="form-control"
                                    name="maritalStatus"
                                    size="0" 
                                    value={status}
                                    onChange={(e) =>{setStatus(e.target.value)}}
                                     >
                                     {/* <option value="">Select  </option>  */}
                                    <option value={true}> Active </option>
                                    <option value={false}>Deactive</option>
                                </select>
                            </div>
                            <div class="row"><div class="col-12">
                                <button onClick={handleSubmit} className={styles.sendBtn}>
                                    Submit
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>
        </Fragment>

    )
}

export default AddVisaType;