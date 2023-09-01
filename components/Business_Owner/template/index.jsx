import { useEffect } from "react";
import { Fragment, useState } from "react";
import styles from "../../../styles/query.module.scss"
import AddTemplate from "../../Common/Modals/addTemplate";
import { all_template_list, edit_template_type, duplicate_template, view_template } from "../../helpers/lia_services";
import moment from 'moment';
const Template = () => {

    const [type, setType] = useState("")
    const [tempTitle, setTempTitle] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isView, setIsView] = useState(false)
    const [Isdata, setdata] = useState({
        checkbox2: false,
        checkbox3: false,

    })


    const [role, setRole] = useState("")
    const [error, setError] = useState("")

    const [templateType, setTemplateType] = useState("")
    const [templateTitle, setTemplateTitle] = useState("")
    const [content, setContent] = useState("")



    useEffect(() => {
        templateList()
    }, [])

    const templateList = async () => {
        let page = 1; let per_page = 20;
        typeof window !== "undefined" && setRole(localStorage.role)
        const response = await all_template_list(per_page, page, localStorage.role)
        if (response.code == 200) {
            setTempTitle(response.result)
        } else {
            setError(response.message)
        }


        // console.log(response.result._id)
    }

    const checkedCondition = () => {
        setIsChecked(!isChecked)
    }
    const handleChange = () => {
        setdata((prev) => { return { ...prev, checkbox2: !Isdata.checkbox2, checkbox3: !Isdata.checkbox3 } })
    }

    const OpenModal = (e) => {
        // e.preventDefault();
        setIsOpen(true)
    }
    const CloseModal = () => {
        setIsOpen(false)
        setIsView(false)
    }
    const editTemplate = async (data, type) => {
        OpenModal()
        setType("")
        setTemplateType(data.templateType)
        setTemplateTitle(data.tittle)
        setContent(data.content)
        const response = await edit_template_type(data._id, data.tittle, data.templateType)
        console.log(data)
        console.log(response)
        if (response.code == 200) {
            console.log(response)
            window.location.href = "/"
        } else {
        }
    }
    const duplicateTemplate = async (data) => {
        setTemplateType(data.templateType)
        setTemplateTitle(data.tittle)
        setContent(data.content)
        const response = await duplicate_template(localStorage.role, data._id)
        if (response.code == 200) {
            templateList()
        } else {
        }
    }

    const viewTemplate = async (data, type) => {
        setType(type)
        setIsView(true)
        OpenModal()
        setTemplateType(data.templateType)
        setTemplateTitle(data.tittle)
        setContent(data.content)
        const response = await view_template(data._id, localStorage.role)
        if (response.code == 200) {
            console.log(response)
        } else {
        }
    }
    const printTemplate = (e) => {
        e.preventDefault()
        window.print()
    }
    let renderdata = tempTitle?.map((item, index) => {
        // console.log(item)
        return (
            <tr>
                <td>{item.tittle} </td>
                <td>{moment(item.createdAt).format("D MMM  YYYY")}</td>
                <td >
                    <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`} onClick={() => { viewTemplate(item, "view") }}>View</button>
                    <button className={`${styles.Btn5} ${styles.BtnWithoutImg}`} onClick={() => { editTemplate(item, "") }}>Update</button>
                    <button className={`${styles.Btn3} ${styles.BtnWithoutImg}`} onClick={() => { duplicateTemplate(item) }}>Duplicate</button>
                    <button className={`${styles.Btn4} ${styles.BtnWithoutImg}`}>Documents</button>
                    <button className={`${styles.Btn5} ${styles.BtnWithoutImg}`} onClick={printTemplate}>Print</button>
                </td>
            </tr>

        )
    })

    return (
        <Fragment>
            <div className={styles.contentWrapper}>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-9">
                                    <h3>Template</h3>
                                </div>
                                <div className={`col-md-3 pr-0 ${styles.ButtonGroup}`}>

                                    <AddTemplate styles={styles}
                                        closeModal={CloseModal}
                                        open={isOpen}
                                        templateType={templateType}
                                        setTemplateType={setTemplateType}
                                        templateTitle={templateTitle}
                                        setTemplateTitle={setTemplateTitle}
                                        content={content}
                                        setContent={setContent}
                                        openModal={OpenModal}
                                        isView={isView}
                                        type={type}
                                        setIsView={setIsView} />
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className={`col-12 ${styles.tableArea}`}>
                                            <div className="table-responsive ">
                                                <table class="table table-striped">
                                                    <thead >
                                                        <tr>
                                                            <th>Title</th>
                                                            <th>Updated On</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {renderdata}
                                                    </tbody>
                                                </table>
                                                {error && <h6 className={styles.Nodata}> {error}</h6>}
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
                                    <li><a href="/busines/owner/visa/visaStatusNotification">VISA Status Notification</a></li>
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
export default Template;