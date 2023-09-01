import React from "react";
import ReactModal from "react-modal";
import styles from "../../../styles/customeModal.module.scss";
import { useRouter } from "next/router";
const SignUpModal = ({ open, setOpen, style, closeModal }) => {
  const router = useRouter();
  const handleChange = (e) => {
    e.preventDefault();
    localStorage.profileStatus == "true"
    localStorage.setItem("profileStatus", "false");
    router.push("/busines/owner/setup");
    setOpen(false);
  };
  const handleNotNow = () => {
    localStorage.setItem("profileStatus", "false");
    setOpen(false);
  };
  return (
    <div>
      <ReactModal
        className={`${styles.customeModal} ${styles.customeAccountModal}`}
        isOpen={open}
        style={{ overflowY: "scroll" }}
      >
        <div class={styles.modalHeader}>
          <div class="row">
            <div class="col-10"></div>
            {/* <div class="col-2">
                            <button onClick={closeModal} className={styles.closeBtn}><img src="/images/popupcross.svg" /></button><br />
                        </div> */}
          </div>
        </div>
        <div className={styles.genrateLink}>
          <div className={`${styles.genrateLinkSec} text-center`}>
            <form>
              <div class="row">
                <h3 class="col-13 text-center mb-2">
                  {" "}
                  Your profile is incomplete. Please complete your profile now.{" "}
                </h3>
                <div class="col-12 text-center">
                  <button
                    onClick={handleNotNow}
                    className={styles.sendBtn}
                    style={{ float: "unset" }}
                  >
                    Not Now
                  </button>
                  <button
                    onClick={(e) => {
                      handleChange(e);
                    }}
                    className={styles.sendBtn}
                    style={{ float: "unset" }}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default SignUpModal;
