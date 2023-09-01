import { data } from "jquery";
import { useEffect, useState } from "react";
import {
  BONotificatioStatus,
  BONotificatioStatusUpdate,
} from "../../helpers/business_owner_service";

const NotificationsSection = ({
  styles,
  notification_tab,
  activeTab,
  active,
  backButton,
}) => {
  const [keyData, setKeyData] = useState({
    email_notification: false,
    push_notification: false,
  });
  useEffect(() => {
    getStatus();
  }, []);

  const getStatus = async () => {
    const setRes = await BONotificatioStatus();
    if (setRes.code === 200) {
      let status = setRes.result;
      delete status.isActive;
      delete status.isDelete;
      delete status._id;
      setKeyData((prev) => {
        return { ...prev, ...status };
      });
    }
  };
  const updateStatus = async (updateData) => {
    const updateRes = await BONotificatioStatusUpdate(updateData);
    if (updateRes.code === 200) {
    }
  };
  const handleStatus = (status, name) => {
    switch (name) {
      case "email":
        setKeyData((prev) => {
          return { ...prev, email_notification: !status };
        });
        keyData.email_notification = !status
        updateStatus(keyData)
        break;
      case "push":
        setKeyData((prev) => {
          return { ...prev, push_notification: !status };
        });
        keyData.push_notification = !status
        updateStatus(keyData)
        break;
      default:
        break;
    }
  };
  return (
    <div
      className={`tab-pane fade shadow rounded ${
        active ? "show active " : ""
      } `}
      id={activeTab}
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      <div className={styles.rightPageDetail}>
        <h5>{backButton} Notifications Setting</h5>
        <div className={styles.rightBox}>
          <div className={`${styles.checkboxes} checkboxes-and-radios`}>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-email"
              checked={keyData.email_notification}
              onClick={() => handleStatus(keyData.email_notification, "email")}
            />
            <label for="checkbox-email">Email Notifications</label>
          </div>
          <div className={`${styles.checkboxes} checkboxes-and-radios`}>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox-push"
              value="1"
              checked={keyData.push_notification}
              onClick={() => handleStatus(keyData.push_notification, "push")}
            />
            <label for="checkbox-push">Email Notifications</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;
