import { data } from "jquery";
import { Fragment, useState, useEffect, createContext } from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss";
import {
  addUpdateTemplateService,
  listOfKeyAttributeService,
} from "../../helpers/business_owner_service";
import { add_template } from "../../helpers/lia_services";
import { template_type_list } from "../../helpers/lia_services";
import { Register } from "../validation/index";

export const GlobleInfo = createContext();

const TemaplateModal = ({
  openModa,
  closeModal,
  mode,
  templateId,
  selectedData,
  setTemplateList,
  templateList,
  updateTemplate,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [businessOwner, setBusinessOwner] = useState("businessOwner");
  const [keyData, setKeyData] = useState({
    templateType: "",
    tittle: "",
    content: "",
    // hash: "",
  });
  const [list, setList] = useState([]);
  const [listOfAttribute, setListOfAttribute] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState(false);

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    templateTypeData();
    mode !== "view" && listOfKeyAttribut();

    if (selectedData) {
      setKeyData((keyData) => ({
        ...keyData,
        templateId: selectedData._id,
        templateType: selectedData.templateType,
        tittle: selectedData.tittle,
        content: selectedData.content,
      }));
      setValue("templateId", selectedData._id);
      setValue("templateType", selectedData.templateType);
      setValue("tittle", selectedData.tittle);
      setValue("content", selectedData.content);
    }
  }, []);

  const handleAttribute = (attr) => {
    let arr = selected;
    let values = [...arr, attr];
    setSelected([...arr, attr]);
    let contentString = values.join(" ");
    let messageValue = keyData.content + contentString;
    setKeyData((keyData) => ({
      ...keyData,
      content: messageValue,
    }));
    contentString = "";
    setSelected([]);
  };
  const onSubmit = async () => {
    keyData.addBy = localStorage.role;
    setIsLoading(true);
    const response = await addUpdateTemplateService(keyData);
    let newTemplateList = [];
    if (response.code == 200) {
      setIsLoading(false);
      closeModal();

      if (mode === "update") {
        updateTemplate(response.result)
      } else {
        newTemplateList.push(
          ...templateList,
          mode === "update" ? keyData : response.result
        );
        setTemplateList(newTemplateList);
      }
    } else {
    }
  };
  const onError = async (data) => {
    console.log("ERROR!", data);
  };

  const templateTypeData = async () => {
    const response = await template_type_list(perPage, page);
    if (response.code == 200) {
      setList(response.result);
    } else {
    }
  };

  const handleOnchange = (event) => {
    event.persist();
    setKeyData((keyData) => ({
      ...keyData,
      [event.target.name]: event.target.value,
    }));
  };
  const listOfKeyAttribut = async () => {
    let listKeyData = {
      page: "1",
      perPage: "20",
    };
    let respList = await listOfKeyAttributeService(listKeyData);
    if (respList.code === 200) {
      setListOfAttribute(respList.result);
    }
  };

  return (
    <Fragment>
      <ReactModal
        className={`${styles.customeModal} ${styles.customeTemplateModal}  ${styles.customeAccountModal}`}
        isOpen={open}
        style={{ overflowY: "scroll" }}
      >
        <div class={styles.modalHeader}>
          <div class="row mx-0">
            <div class="col-10">
              <h4>
                {mode === "update" && "Update Template"}
                {mode === "view" && `View Template`}
                {mode === "add" && "Add New Template"}{" "}
                <span style={{ color: "red" }}>{error}</span>
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
                    <label>
                      Template Type
                      {/* <span className={styles.required}>*</span> */}
                      <small className={styles.ErrorMsg}>
                        {errors.templateType?.message}
                      </small>
                    </label>
                    <select
                      class="form-control"
                      name="templateType"
                      size="0"
                      value={keyData.templateType}
                      disabled={mode === "view"}
                      //   onChange={(e) => handleOnchange(e)}
                      {...register("templateType", {
                        // ...Register.Common,
                        required: {
                          value: true,
                          message: "Please select template type.",
                        },
                        onChange: (e) => handleOnchange(e),
                      })}
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
                    <label>
                      Template Title
                      {/* <span className={styles.required}>*</span> */}
                      <small className={styles.ErrorMsg}>
                        {errors.tittle?.message}
                      </small>
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="tittle"
                      value={keyData.tittle}
                      readOnly={mode === "view"}
                      //   onChange={(e) => handleOnchange(e)}
                      {...register("tittle", {
                        // ...Register.Common,
                        required: {
                          value: true,
                          message: "Please enter title.",
                        },
                        onChange: (e) => handleOnchange(e),
                      })}
                      placeholder="Title"
                      autoComplete="off"
                      className={`form-control ${styles.stepbarInput}`}
                    />
                  </div>
                  <div className={`form-group px-0 ${styles.customeFormGroup}`}>
                    <label>
                      Content
                      {/* <span className={styles.required}>*</span> */}
                      <small className={styles.ErrorMsg}>
                        {errors.content?.message}
                      </small>
                    </label>
                    <textarea
                      type="text"
                      id="content"
                      name="content"
                      readOnly={mode === "view"}
                      value={keyData.content}
                      {...register("content", {
                        required: {
                          value: true,
                          message: "Please enter content.",
                        },
                        onChange: (e) => handleOnchange(e),
                      })}
                      placeholder="Write here"
                      className={`form-control ${styles.stepbarInput}`}
                    />
                  </div>
                  <div class="row">
                    <div class="col-12">
                      {mode === "view" ? (
                        ""
                      ) : (
                        <button
                          className={styles.sendBtn}
                          //   onClick={saveApiData}
                          onClick={handleSubmit(onSubmit, onError)}
                        >
                          {isLoading && (
                            <i
                              className="fa fa-spinner fa-spin"
                              style={{ marginRight: "5px" }}
                            />
                          )}
                          {isLoading && <span>Wait</span>}
                          {!isLoading && (
                            <span>{mode === "update" ? "Update" : "Save"}</span>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {mode !== "view" && (
            <div className="col-4">
              <div className={styles.templateSec}>
                <h4>Agreements/Templates</h4>
                <div className={styles.templateList}>
                  <div className="row mx-0">
                    <div className="col-12">
                      {listOfAttribute.map((item, index) => {
                        return (
                          <a
                            key={index}
                            onClick={() => handleAttribute(item.name)}
                            style={{ cursor: "pointer" }}
                          >
                            {item.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ReactModal>
    </Fragment>
  );
};
export default TemaplateModal;
