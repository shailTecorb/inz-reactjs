import styles from "../../../styles/dashboard.module.scss";
import BarSec from "./bar";
import "react-datepicker/dist/react-datepicker.css";

import LeftSection from "./leftSection";
import TaskList from "./TaskList";
const NewBoDashboard = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className="container-fluid  custome_small_padding">
        <div className="row mx-0 ">
          <LeftSection styles={styles} />
          <TaskList styles={styles} />
        </div>
    
      </div>
    </div>
  );
};
export default NewBoDashboard;
