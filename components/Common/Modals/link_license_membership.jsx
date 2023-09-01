import React,{useState} from 'react';
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss"
import {useRouter} from "next/router"
const LinkLicenseMembership = ({open,closeModal,OpenModal,setLink,link,style}) => {

    const [linkErr, setErr] = useState()
    const handleChange = (e) =>{
       let linkValidation = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        if(!linkValidation.test(e.target.value)){
            setErr("Please Enter Valid Link")
        }else{
            setLink(e.target.value)
        }
        }
        const handleSubmit = (e) =>{
            e.preventDefault()
            if(link){
                closeModal()
            }else{
            }
        }
  return <div > 
      <div>
      <div >
          
    <a  style={{cursor:"pointer", 
                color: "#00a2ff",
                display: "block",
                marginTop: "40px"}}  onClick={OpenModal}>{link? link  : "Link your Licence/Membership"}</a><span  onClick={OpenModal}>{link?  <a style={{cursor:"pointer",color:"#00ed97"}}>  Edit</a> :""}</span>
 </div>  
  </div>
       <ReactModal
                className={`${styles.customeModal} ${styles.customeAccountModal}`}
                isOpen={open}
                style={
                    { overflowY: "scroll" }}
            >
                    <div class={styles.modalHeader} >
                    <div class="row">
                        <div class="col-10">
                            <h4>Link your License/Membership</h4> <span style={{color:"red"}}></span>
                        </div>
                        <div class="col-2">
                            <button className={styles.closeBtn} onClick={closeModal}><img src="/images/popupcross.svg" /></button><br />
                        </div>
                    </div>
                </div>
                <div className={styles.genrateLink}>
                    <div className={`${styles.genrateLinkSec} text-center`}>
                        <form>
                       
                            <div class="row">
                            <div class="col-12">
                            <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                                <h3>Link your License/Membership</h3>
                                <input
                                                type_name="text"
                                                placeholder_name="link"
                                                inputId="link"
                                                input_name="link" 
                                                onChange={handleChange}
                                                // onChange={(e) => {setLink(e.target.value)}}
                                                value={link}
                                                maxLength={35}
                                                />
                                </div>
                                </div>
                                </div>
                                <div class="row"><div class="col-12">
                                <button onClick={handleSubmit} className={styles.sendBtn} style={{float : "unset"}}>
                                  Done
                                </button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ReactModal>
      
  </div>;
};

export default LinkLicenseMembership;
