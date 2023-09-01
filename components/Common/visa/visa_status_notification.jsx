import { Fragment, useState, useEffect } from "react";
import styles from "../../../styles/query.module.scss"
import VisaStatusModal from '../Modals/visa_status_modal';
import { visa_status_notification, visa_status_remove_notification } from "../../helpers/business_owner_service"
import { useRouter } from "next/router";
function visaStatusNotification() {

    let route = useRouter()
    const [visaList, setVisaList] = useState()
    const [isOption, setIsOption] = useState(false)
    const [id, setId] = useState()
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [role, setRole] = useState("admin")
    // const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        visaStatusNotificationService(role)
    }, [role])


    const visaStatusNotificationService = async (selectedRole) => {

        let response = await visa_status_notification(selectedRole)
        if (response.code == 200) {
            setVisaList(response.result)
        } else if (response.code == 403) {
            route.push("/")
        } else {
        }
    }


    // remove notification 

    const removeNotification = async () => {
        let response = await visa_status_remove_notification(id, role)
        if (response.code == 200) {
            // console.log(response)
        } else {
        }
    }

    const handleDefault = (role) => {
        setIsOption(false)
        // setIsChecked(false)
        setRole(role)
        // visaStatusNotificationService(role)
    }
    const handleUpdate = () => {
        openModal(e)
        setId(item._id)
        setTitle(item.title)
        setDescription(item.description)
    }
    const openModal = (e) => {
        e.preventDefault()
        setOpen(true)
    }
    const closeModal = (event) => {
        //   event.preventDefault()
        setOpen(false)
    }



    let allData = visaList?.map((item, i) => {
        return (
            <>
                <tr>
                    <td>{i + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    {
                        isOption ?
                            <tr>
                                <td>

                                    <button className={`${styles.Btn2} ${styles.BtnWithoutImg}`} onClick={removeNotification}>Remove</button>
                                </td>
                                <td>

                                    <button className={`${styles.Btn5} ${styles.BtnWithoutImg}`}
                                        onClick={handleUpdate}

                                    > update </button>
                                </td>
                            </tr>
                            :
                            <td>
                                <button className={`${styles.Btn5} ${styles.BtnWithoutImg}`}
                                    onClick={handleUpdate}
                                > update</button>
                            </td>
                    }
                </tr>
            </>
        )
    })


    return (
        <Fragment>
            <VisaStatusModal
                closeModal={closeModal}
                open={open}
                id={id}
                title={title}
                description={description}
                setTitle={setTitle}
                setDescription={setDescription}
                role={role}
            />
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8">
                                    <h3>VISA Status Notifications</h3>
                                </div>
                                <div className={`col-md-5 pr-0 ${styles.buttonGroup}`}>
                                    <button className={styles.downloadBtn}>Download</button>
                                    <button className={styles.downloadBtn}><img src="/images/printing.svg"
                                        style={{ marginTop: "-2px" }} /> Print</button>
                                </div>
                                <div className="col-12">
                                    <h6>List of Documents</h6>
                                </div>
                                <div className="col-12">
                                    <ul className={`nav nav-tabs ${styles.NavTabs}`}>
                                        <li className={isOption ? "" : styles.active} style={{ cursor: "pointer" }} >
                                            <a onClick={() => { handleDefault("admin") }} data-toggle="tab">Default</a>
                                        </li>
                                        <li className={isOption ? styles.active : ""} style={{ cursor: "pointer" }} >
                                            <a onClick={() => { handleDefault(localStorage.role); setIsOption(true) }} data-toggle="tab">Optional</a>
                                        </li>

                                    </ul>
                                    <div className={`tab-content ${styles.TabContent}`}>
                                        <div className="tab-pane active" id="1">
                                            <div className={`col-12 ${styles.tableArea}`}>
                                                <div className="table-responsive ">
                                                    <table class="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Title</th>
                                                                <th>Message/Notification</th>
                                                                <th>Action</th>
                                                            </tr>
                                                            {allData}
                                                        </thead>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4 ${styles.templateBtnGroup}`}>
                            <h4>Agreements/Templates</h4>
                            <button className={styles.btnBox}>
                                <img src="/images/letter.svg" className="mr-2" /><span>Letter</span> <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} />
                            </button>
                            <button className={styles.btnBox}>
                                <img src="/images/emailtemplate.svg" className="mr-2" /><span>Email Templates</span> <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} />
                            </button>
                            <button className={styles.btnBox}>
                                <img src="/images/invoice.svg" className="mr-2" /><span>Invoices</span> <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} />
                            </button>
                            <button className={styles.btnBox}>
                                <img src="/images/filenote.svg" className="mr-2" /><span>Files Notes</span> <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} />
                            </button>
                            <div className={`dropdown ${styles.dropDown1}`}>
                                <button className={`btn btn-warning dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown"> <span>Document Centre</span>
                                    <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} /></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Phantom</a></li>
                                    <li><a href="#">Cluster</a></li>
                                </ul>
                            </div>
                            <div className={`dropdown ${styles.dropDown1}`}>
                                <button className={`btn btn-warning dropdown-toggle ${styles.dropDownBtn}`} type="button" data-toggle="dropdown"><span>Notification Templates</span>

                                    <img src="/images/blueleftarrow.svg" style={{ float: "right", marginTop: "10px" }} /></button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">VISA Status Notification</a></li>
                                    <li><a href="#">Reminders</a></li>
                                    <li><a href="#">Birthday Greetings</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default visaStatusNotification;
