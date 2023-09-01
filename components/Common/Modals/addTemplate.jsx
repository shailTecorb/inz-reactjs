import { data } from "jquery";
import { Fragment, useState, useEffect, createContext } from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss";
import { add_template } from "../../helpers/lia_services";
import { template_type_list } from "../../helpers/lia_services";

export const GlobleInfo = createContext();

const AddTemplate = ({
  open,
  openModal,
  closeModal,
  type,
  tempType,
  templateType,
  setTemplateType,
  templateTitle,
  setTemplateTitle,
  content,
  setContent,
  isView,
  setIsView,
}) => {
  const hashData = [
    { id: 1, title: "@fullname", isSelected: false },
    { id: 2, title: "@firstname", isSelected: false },
    { id: 3, title: "@lastname", isSelected: false },
    { id: 4, title: "@dob", isSelected: false },
    { id: 5, title: "@mobilenumber", isSelected: false },
    { id: 6, title: "@address", isSelected: false },
    { id: 7, title: "@zipcode", isSelected: false },
    { id: 8, title: "@doa", isSelected: false },
    { id: 9, title: "@city", isSelected: false },
    { id: 10, title: "@country", isSelected: false },
  ];

  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [businessOwner, setBusinessOwner] = useState("businessOwner");
  const [addData, setAddData] = useState({
    templateType: "",
    templateTitle: "",
    content: "",
    hash: "",
  });
  const [list, setList] = useState([]);
  const [error, setErr] = useState("");
  const saveApiData = async (event) => {
    event.preventDefault();
    if (!templateType) {
      setErr("Please Select Template Type");
    } else if (!templateTitle) {
      setErr("Please Enter Title");
    } else if (!content) {
      setErr("Please Enter Content");
    } else {
      const response = await add_template(
        templateTitle,
        localStorage.role,
        content,
        templateType
      );
      console.log(response);
      if (response.code == 200) {
        closeModal();
        window.location.reload();
      } else {
      }
    }
  };

  const templateTypeData = async () => {
    const response = await template_type_list(perPage, page);
    console.log(response);
    if (response.code == 200) {
      console.log(response);
      setList(response.result);
    } else {
    }
  };
  useEffect(() => {
    templateTypeData();
  }, []);
  return (
    <Fragment>
      <button
        onClick={openModal}
        className={`${styles.SaveBtn} ${
          tempType == "setup" ? "mt-0 mb-0" : ""
        }`}
      >
        + Add Template
      </button>

      <ReactModal
        className={`${styles.customeModal} ${styles.customeTemplateModal}  ${styles.customeAccountModal}`}
        isOpen={open}
        style={{ overflowY: "scroll" }}
      >
        <div class={styles.modalHeader}>
          <div class="row mx-0">
            <div class="col-10">
              <h4>
                Add New Template <span style={{ color: "red" }}>{error}</span>
              </h4>
            </div>
            <div class="col-2">
              <button className={styles.closeBtn} onClick={closeModal}>
                <img src="/images/popupcross.svg" />
              </button>
              <br />
            </div>
          </div>
        </div>
        <div class="row mx-0">
          <div class="col-8">
            <div className={styles.genrateLink}>
              <div className={styles.genrateLinkSec}>
                <form>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <h3>Template Type</h3>
                    <select
                      class="form-control"
                      name="templateType"
                      size="0"
                      value={templateType}
                      disabled={type == "view"}
                      onChange={(e) => setTemplateType(e.target.value)}
                    >
                      <option value=""> Select</option>
                      {list.map((data) => (
                        <option key={data.id} value={data.typeName}>
                          {data.typeName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <h3>Template Title</h3>
                    <input
                      type="text"
                      id="contact"
                      name="templateTitle"
                      value={templateTitle}
                      readOnly={type == "view"}
                      onChange={(e) => setTemplateTitle(e.target.value)}
                      placeholder="Title"
                      autoComplete="off"
                      className={`form-control ${styles.stepbarInput}`}
                    />
                  </div>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <h3>Content</h3>
                    <textarea
                      type="text"
                      id="content"
                      name="content"
                      readOnly={type == "view"}
                      value={content + addData.hash}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                      placeholder="Write here"
                      className={`form-control ${styles.stepbarInput}`}
                    />
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {isView ? (
                        ""
                      ) : (
                        <button
                          className={styles.sendBtn}
                          onClick={saveApiData}
                        >
                          Save
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.templateSec}>
              <h4>Agreements/Templates</h4>
              <div className={styles.templateList}>
                <div className="row mx-0">
                  <div className="col-12">
                    {hashData.map((item, index) => {
                      // return <a  key={index} style={{ cursor: "pointer" }} onClick={(e) => { handleHashData(item.title) }} >{item.title}</a>
                      return (
                        <a key={index} style={{ cursor: "pointer" }}>
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </Fragment>
  );
};
export default AddTemplate;
