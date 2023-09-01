import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../../styles/settings.module.scss";
import InputFiled from "../../Auth/Common/input_filed";
import SuccessModal from "../../Common/Modals/success_modal";
import { Register } from "../../Common/validation/index";
import { changePasswordService } from "../../helpers/business_owner_service";

const ChangePasswordSection = ({
  profile_tab,
  activeTab,
  active,
  backButton,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    reset,
  } = useForm();

  const [keyData, setKeyData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [getErrors, setGetErrors] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const handleChange = async (event) => {
    event.persist();
    setKeyData((keyData) => ({
      ...keyData,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = async (data) => {
    if (keyData.confirmNewPassword === keyData.newPassword) {
      setIsLoading(true);
      delete keyData.confirmNewPassword;
      const response = await changePasswordService(keyData);
      if (response.code == 200) {
        setIsLoading(false);
        setSuccessModal(true);
        reset({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
        setKeyData((keyData) => ({
          ...keyData,
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }));
      } else if (response.code == 400) {
        setGetErrors(response.message);
        setIsLoading(false);
        reset({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
        setKeyData((keyData) => ({
          ...keyData,
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        }));
      } else {
        setGetErrors(response.message);
        setIsLoading(false);
      }
    } else {
      setGetErrors("New password and Comfirm new password not matched.");
      reset({
        newPassword: "",
        confirmNewPassword: "",
      });
      setKeyData((keyData) => ({
        ...keyData,
        newPassword: "",
        confirmNewPassword: "",
      }));
      setIsLoading(false);
    }
  };

  const onError = (data) => {};
  return (
    <>
      <div
        className={`tab-pane fade shadow rounded ${
          active ? "show active " : ""
        } `}
        id={activeTab}
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      >
        <div className={styles.rightPageDetail}>
          <h5>{backButton} Change Password</h5>
          {/* Error Message */}
          <div className={`${styles.rightBox} `}>
            <div className="row">
              <div className="col-lg-7 col-md-12 order-lg-1 order-md-2 order-2">
                <form>
                  {<h2 className={styles.userExist}>{getErrors} </h2>}

                  {/* <--------- Old password < Field ---------> */}
                  <div className={`${styles.formGroup} form-group`}>
                    <label>
                      Old password <span className={styles.required}>*</span>
                      <small className={styles.ErrorMsg}>
                        {errors.oldPassword?.message}
                      </small>
                    </label>
                    <InputFiled
                      type_name="password"
                      placeholder_name="Old Password"
                      inputId="oldPassword"
                      input_name="oldPassword"
                      value={keyData.oldPassword}
                      register={register("oldPassword", {
                        ...Register.Password,
                        onChange: (e) => handleChange(e),
                      })}
                    />
                  </div>

                  {/* <--------- New password Field ---------> */}
                  <div className={`${styles.formGroup} form-group`}>
                    <label>
                      New password <span className={styles.required}>*</span>
                      <small className={styles.ErrorMsg}>
                        {errors.newPassword?.message}
                      </small>
                    </label>
                    <InputFiled
                      type_name="password"
                      placeholder_name="New Password"
                      inputId="newPassword"
                      input_name="newPassword"
                      value={keyData.newPassword}
                      register={register("newPassword", {
                        ...Register.New_Password,
                        onChange: (e) => handleChange(e),
                      })}
                    />
                  </div>

                  {/* <--------- Confirm password Field ---------> */}
                  <div className={`${styles.formGroup} form-group`}>
                    <label>
                      Confirm password{" "}
                      <span className={styles.required}>*</span>
                      <small className={styles.ErrorMsg}>
                        {errors.confirmNewPassword?.message}
                      </small>
                    </label>
                    <InputFiled
                      type_name="password"
                      placeholder_name="Confirm New Password"
                      inputId="confirmNewPassword"
                      input_name="confirmNewPassword"
                      value={keyData.confirmNewPassword}
                      register={register("confirmNewPassword", {
                        ...Register.Confirm_New_Password,
                        onChange: (e) => handleChange(e),
                      })}
                    />
                  </div>

                  {/* <--------- Current Password Field ---------> */}
                  <div className={`${styles.formGroup} form-group`}></div>
                  <div className={styles.buttonArea}>
                    {/* <--------- Save Button --------->  */}

                    <button
                      className={styles.saveBtn}
                      type="submit"
                      onClick={handleSubmit(onSubmit, onError)}
                    >
                      {isLoading && (
                        <i
                          className="fa fa-spinner fa-spin"
                          style={{ marginRight: "5px" }}
                        />
                      )}
                      {isLoading && <span>Updating</span>}
                      {!isLoading && <span>Update</span>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {successModal && (
            <SuccessModal
              open={successModal}
              closeModal={() => {
                setSuccessModal(false);
              }}
              message="Please check your email. Instructions were sent to your email address."
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ChangePasswordSection;
