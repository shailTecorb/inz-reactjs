import { Fragment, useState,useEffect } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"

const VisaStatusModal = ({  }) => {
    const[isModalOpen, setIsModalOpen] = useState(false)
    const [ countryId, setCountryData] = useState()
    const [ title, setTitle] =useState("");
    const [status,setStatus] = useState(true)
    const [msg,setMsg] = useState("")


const onChangeCountry = (e) =>{
       setCountryData(e.target.value) 
}
//************************************ getting country list whose select status is true **************************************************************** */

//************************************ on submit function  ******************************************************* */
    const handleSubmit = async(e) =>{
        e.preventDefault()
    }
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
                            <h4>Add New VISA Status</h4>
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
                                <h3>Type</h3>
                                <select
                                    class="form-control"
                                    name="country"
                                    size="0" 
                                    value={countryId}
                                    onChange={(e)=>{onChangeCountry(e)}}
                                     >
                                    <option value="select">Submitted Status </option>   
                                    <option value="select">Working Status </option>                               
                                    <option value="select">Completed Status </option>                               

                                        
                                </select>
                            </div>
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>VISA Status Title</h3>
                                <input type="text" id="title" name="title"
                                    value={title}
                                    onChange={(e) =>{setTitle(e.target.value)}}
                                    placeholder="Visa Type"
                                    className={`form-control ${styles.stepbarInput}`}
                                />
                            </div>
                            
                            <div class="row"><div class="col-12">
                                <button onClick={handleSubmit} className={styles.sendBtn}>
                                    Save
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

export default VisaStatusModal;