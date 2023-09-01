import React, { Fragment } from "react"
import styles from "../../../styles/auth.module.scss"

const LeftBanner = ({ }) => {
    return (
        <Fragment>
            <div className={`col-lg-6 pl-0 d-none d-lg-block`}>
                <div className={`${styles.leftBanner}`}>
                    <div className={styles.leftImage}>
                        {/* <img alt={banner_alt} src="" /> */}
                        <img src="/images/leftBanner.png" className="img-fluid" />
                    
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default LeftBanner;