import moment from "moment";
import { useEffect, useState } from "react";
import ConfirmationModal from "../../../Common/Modals/confirmation_modal";
import TemaplateModal from "../../../Common/Modals/TemplateModals";
import {
  addDuplicateTemplateService,
  getTemplateService,
} from "../../../helpers/business_owner_service";

let VIEW = "view";
let UPDATE = "update";
let ADD = "add";
const TemplateSetting = ({ styles, activeTab, active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [templateList, setTemplateList] = useState([]);
  const [isDuplicate, setDuplicate] = useState(false);
  const [mode, setMode] = useState("");
  const [templateId, setTtemplateId] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reRender, setReRender] = useState(false);

  const openModal = (type, _id, data, index) => {
    setIsOpen(true);
    setMode(type);
    setSelectedData(data);
    setTtemplateId(_id);
    setCurrentIndex(index);
  };

  const duplicateModal = (_id,) => {

    setDuplicate(true)
    setTtemplateId(_id);

  };
  const closeDuplicateModal = (type, _id,) => {
    setDuplicate(false)
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    getTemplates();
  }, []);

  const getTemplates = async () => {
    let keyData = {
      addBy: "liaAgent",
      perPage: 100,
      page: 1,
    };
    let tempRes = await getTemplateService(keyData);
    if (tempRes.code === 200) {
      setTemplateList(tempRes.result);
    }
  };
  const addDuplicateTemplate = async () => {
    setIsLoading(true);
    let keyData = {
      addBy: localStorage.role,
      templateId: templateId,
    };
    const response = await addDuplicateTemplateService(keyData);
    let newTemplateList = [];
    if (response.code == 200) {
      setDuplicate(false)
      setIsLoading(false);
      closeModal();
      newTemplateList.push(
        ...templateList,
        response.result
      );
      setTemplateList(newTemplateList);
    } else {
    }
  };

  const updateTemplate = (newEvent) => {
    let newState = templateList;
    if (mode === UPDATE) {
      newState[currentIndex] = newEvent;
    }
    setTemplateList(newState);
    setReRender(!reRender);
  };


  return (
    <div
      className={`tab-pane fade shadow rounded ${active ? "show active " : ""
        } `}
      id={activeTab}
      role="tabpanel"
      aria-labelledby="v-pills-template-tab"
    >
      <div className={styles.rightPageDetail}>
        <div className={styles.rightBox}>
          <div className="row mx-0">
            <div className="col-md-8">
              <div className="row ">
                <div className="col-md-8">
                  <h3>Template</h3>
                </div>
                <div className={`col-md-4 ${styles.ButtonGroup} text-right`}>
                  {/* <TemaplateModal
                    styles={styles}
                    closeModal={CloseModal}
                    open={isOpen}
                    openModal={OpenModal}
                    tempType="setup"
                  /> */}
                  <button
                    onClick={() => openModal(ADD, "")}
                    className={`${styles.SaveBtn} ${"mt-0 mb-0"}`}
                  >
                    + Add Template
                  </button>
                </div>
              </div>
              <div className="row">
                <div className={`col-12 ${styles.tableArea}`}>
                  <div className="table-responsive ">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Updated On</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {templateList.map((data, index) => {
                          let { _id, createdAt, tittle } = data;
                          console.log("");
                          return (
                            <tr>
                              <td>{tittle} </td>
                              <td>{moment(createdAt).format("D MMM, YYYY")}</td>
                              <td>
                                <button
                                  onClick={() => openModal(VIEW, _id, data)}
                                  className={`${styles.Btn1} ${styles.BtnWithoutImg}`}
                                >
                                  View
                                </button>
                                <button
                                  onClick={() =>
                                    openModal(UPDATE, _id, data, index)
                                  }
                                  className={`${styles.Btn5} ${styles.BtnWithoutImg}`}
                                >
                                  Update
                                </button>
                                <button
                                  // onClick={() => addDuplicateTemplate(_id)}
                                  onClick={() => { duplicateModal(_id) }}
                                  className={`${styles.Btn3} ${styles.BtnWithoutImg}`}
                                  disabled={isLoading}
                                >
                                  {
                                    templateId === _id ? (
                                      <>
                                        {isLoading && (
                                          <i
                                            className="fa fa-spinner fa-spin"
                                            style={{ marginRight: "5px" }}
                                          />
                                        )}
                                        {isLoading && <span>Wait</span>}
                                        {!isLoading && <span>Duplicate</span>}
                                      </>
                                    ) : (
                                      <span>Duplicate</span>
                                    )

                                    // {console.log(templateId === _id )}
                                  }
                                </button>
                                <button
                                  onClick={(e) => e.preventDefault()}
                                  className={`${styles.Btn4} ${styles.BtnWithoutImg}`}
                                >
                                  Documents
                                </button>
                                <button
                                  onClick={(e) => e.preventDefault()}
                                  className={`${styles.Btn5} ${styles.BtnWithoutImg}`}
                                >
                                  Print
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-4 ${styles.templateBtnGroup}`}>
              <h4>Agreements/Templates</h4>
              <button className={styles.btnBox}>
                <img src="/images/letter.svg" className="mr-2" />
                <span>Letter</span>{" "}
                <img
                  src="/images/blueleftarrow.svg"
                  style={{ float: "right", marginTop: "10px" }}
                />
              </button>
              <button className={styles.btnBox}>
                <img src="/images/emailtemplate.svg" className="mr-2" />
                <span>Email Templates</span>{" "}
                <img
                  src="/images/blueleftarrow.svg"
                  style={{ float: "right", marginTop: "10px" }}
                />
              </button>
              <button className={styles.btnBox}>
                <img src="/images/invoice.svg" className="mr-2" />
                <span>Invoices</span>{" "}
                <img
                  src="/images/blueleftarrow.svg"
                  style={{ float: "right", marginTop: "10px" }}
                />
              </button>
              <button className={styles.btnBox}>
                <img src="/images/filenote.svg" className="mr-2" />
                <span>Files Notes</span>{" "}
                <img
                  src="/images/blueleftarrow.svg"
                  style={{ float: "right", marginTop: "10px" }}
                />
              </button>
              <div className={`dropdown ${styles.dropDown1}`}>
                <button
                  className={`btn btn-warning dropdown-toggle ${styles.dropDownBtn}`}
                  type="button"
                  data-toggle="dropdown"
                >
                  {" "}
                  <span>Document Centre</span>
                  <img
                    src="/images/blueleftarrow.svg"
                    style={{ float: "right", marginTop: "10px" }}
                  />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Phantom</a>
                  </li>
                  <li>
                    <a href="#">Cluster</a>
                  </li>
                </ul>
              </div>
              <div className={`dropdown ${styles.dropDown1}`}>
                <button
                  className={`btn btn-warning dropdown-toggle ${styles.dropDownBtn}`}
                  type="button"
                  data-toggle="dropdown"
                >
                  <span>Notification Templates</span>

                  <img
                    src="/images/blueleftarrow.svg"
                    style={{ float: "right", marginTop: "10px" }}
                  />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/busines/owner/visa/visaStatusNotification">
                      VISA Status Notification
                    </a>
                  </li>
                  <li>
                    <a href="#">Reminders</a>
                  </li>
                  <li>
                    <a href="#">Birthday Greetings</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <TemaplateModal
          openModal={isOpen}
          closeModal={closeModal}
          mode={mode}
          templateId={templateId}
          selectedData={selectedData}
          setTemplateList={setTemplateList}
          templateList={templateList}
          updateTemplate={updateTemplate}
        />
      )}
      <ConfirmationModal open={isDuplicate} isLoading={isLoading} handleClick={addDuplicateTemplate} closeModal={closeDuplicateModal} />
    </div>
  );
};
export default TemplateSetting;
