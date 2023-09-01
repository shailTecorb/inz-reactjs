import InputFiled from "../../Auth/Common/input_filed";
import { Fragment, useContext, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { IdContext } from "../../MyContext/IdDetailsContext";
import { useRouter } from 'next/router';
import { list_of_appointment } from "../../helpers/business_owner_service";
const AppointmentMode = () => {

    const [ isChecked , setIsChecked] = useState(false);
    const route = useRouter()
    const {visaId} = useContext(IdContext)

    const [ Isdata, setData] = useState({
        checkbox2 : false,
        checkbox3 : false,
        checkbox4 : false,
        checkbox5 : false
    })
    console.log(visaId)
    useEffect(() => {
        apidata()
    }, [])
   
    const apidata = async () => {
        let Id = visaId?.filter(item => item.isChecked==true).map((item,index)=>{
             //  console.log(item._id)
           
           return item._id
        
    })
        const response = await list_of_appointment(Id)

        if(response.code==200){
            let isVisaList = response?.result?.map((item, i) => {
                return ({ ...item, isChecked: false }) }
           )
        }
        // if (response.code == 400) {
        //     setNodata(response.message)
        // }
       
    }
    const checkedCondition = () =>{
        setIsChecked(!isChecked)
        if(!isChecked){
            setData((prev) =>{
                prev.checkbox2 = true,
                prev.checkbox3 = true,
                prev.checkbox4 = true,
                prev.checkbox5 = true
                return ({ ...prev })
            })
        }else{
            setData((prev) =>{
                prev.checkbox2 = false,
                prev.checkbox3 = false,
                prev.checkbox4 = false,
                prev.checkbox5 = false
                return ({ ...prev })
            })
        }
    }

        const handleCheckbox2 = (prev) =>{
            setData((prev) => { return { ...prev, checkbox2: !Isdata.checkbox2 } })
            if(!Isdata.checkbox2  && Isdata.checkbox3  && Isdata.checkbox4  && Isdata.checkbox5 ){
                setIsChecked(true)
            }else{
                setIsChecked(false)
            }
        }
        const handleCheckbox3 = (prev) =>{
            setData((prev) => { return { ...prev, checkbox3: !Isdata.checkbox3 } })
            if(Isdata.checkbox2  && !Isdata.checkbox3  && Isdata.checkbox4  && Isdata.checkbox5 ){
                setIsChecked(true)
            }else{
                setIsChecked(false)
            }
        }
        const handleCheckbox4 = (prev) =>{
            setData((prev) => { return { ...prev, checkbox4: !Isdata.checkbox4 } })
            if(Isdata.checkbox2  && Isdata.checkbox3  && !Isdata.checkbox4  && Isdata.checkbox5 ){
                setIsChecked(true)
            }else{
                setIsChecked(false)
            }
        }
        const handleCheckbox5 = (prev) =>{
            setData((prev) => { return { ...prev, checkbox5: !Isdata.checkbox5 } })
            if(Isdata.checkbox2  && Isdata.checkbox3  && Isdata.checkbox4  && !Isdata.checkbox5 ){
                setIsChecked(true)
            }else{
                setIsChecked(false)
            }
        }



        const upDate = async () => {
            const response = await appointment_booking_mode(isChecked);
            if (response.code == 200) {
              console.log(response);
             // setListData(response.result)
            } else {
         }
          };

    return (
          <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <h3 className="">Appointment Booking Mode </h3>
                            <div className={styles.visaStatus}>

                                <div className="row">
                                    <div className={`col-12`}>
                                        <div className={styles.visaStatusDiv}>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox1" checked={ isChecked} onClick={checkedCondition} name="checkbox" type="checkbox" />
                                                    <label for="checkbox1" className={styles.checkboxLabel}>Select All Visa Type</label>
                                                </div>
                                            </div>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox2" value={Isdata.checkbox2} onChange={handleCheckbox2} checked={Isdata.checkbox2  } name="checkbox" type="checkbox" />
                                                    <label for="checkbox2" className={styles.checkboxLabel}>Face to Face</label>
                                                </div>
                                            </div>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox3" value={Isdata.checkbox3} onChange={handleCheckbox3} checked={Isdata.checkbox3} name="checkbox" type="checkbox" />
                                                    <label for="checkbox3" className={styles.checkboxLabel}>On Call</label>
                                                </div>
                                            </div>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox4" value={Isdata.checkbox4} checked={Isdata.checkbox4} onChange={handleCheckbox4} name="checkbox" type="checkbox" />
                                                    <label for="checkbox4" className={styles.checkboxLabel}>Video Call</label>
                                                </div>
                                            </div>
                                            <div className={`form-group ${styles.fromGroup}`}>
                                                <div className={styles.selectinputBox}>
                                                    <input id="checkbox5" value={Isdata.checkbox5} onChange={handleCheckbox5}name="checkbox" type="checkbox" checked={Isdata.checkbox5} />
                                                    <label for="checkbox5" className={styles.checkboxLabel}>In Office</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`col-md-12 text-right${styles.buttonGroup}`}>
                                        <button onClick={()=>{route.push("/busines/owner/dashboard")}} className={`${styles.submitBtn}`}>Save</button>
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
export default AppointmentMode;