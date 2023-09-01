import React from 'react'
import ReactModal from "react-modal";
import ReactDOM from 'react-dom';   
function advance_search() {
    return (
        <div>
              <ReactModal
                className={`${styles.customeModal} ${styles.customeTemplateModal}  ${styles.customeAccountModal}`}
                isOpen={open}
                style={
                    { overflowY: "scroll" }}
            ></ReactModal>
        </div>
    )
}

export default advance_search
