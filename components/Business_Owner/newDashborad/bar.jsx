import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { businesOwnerDashboardGraph } from "../../helpers/business_owner_service";
import { getLongMonthName, getLongWeekName } from "../../Auth/Common/methods";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      // text: "Chart.js Bar Chart"
    },
  },
};
let Type = {
  Application: "application",
  Client: "client",
  Revenue: "revenue",
};
let Filter_Type = {
  Weekly: "weekly",
  Monthly: "monthly",
  Annualy: "annual",
};

const BarSec = ({ styles }) => {
  const [keyData, setKeyData] = useState({
    type: Type.Application, //
    filter_type: Filter_Type.Annualy,
  });
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getGraphDetails();
  }, [keyData]);
  const getGraphDetails = async () => {
    setIsLoading(true);
    console.log("Key Data", keyData);
    let { type, filter_type } = keyData;
    let data = {
      type,
      filter_type,
    };
    const response = await businesOwnerDashboardGraph(data);
    if (response.code === 200) {
      setResults(response.result);
      setIsLoading(false);
    }
  };

  const getLabels = () => {
    let setLabel;
    switch (keyData.filter_type) {
      case Filter_Type.Annualy:
        let getMonthName = results.map((data) =>
          getLongMonthName(new Date(data.date))
        );
        console.log("GetMonth", getMonthName);

        setLabel = getMonthName;
        break;
      case Filter_Type.Weekly:
        let getWeekName = results.map((data) =>
          getLongWeekName(new Date(data.date))
        );
        console.log("GetWeek", getWeekName);
        setLabel = getWeekName;
        break;
      case Filter_Type.Monthly:
        let getDate = results.map((data) =>
          moment(data.date).format("D MMM, YY")
        );
        console.log("GetDate", getDate);

        setLabel = getDate;
        break;
      default:
        // setLabel = getMonthName
        break;
    }
    return setLabel;
  };
  const data = {
    labels: !isLoading && getLabels(),
    datasets: [
      (keyData.type === Type.Application && {
        label: "Submitted",
        data: results?.map((data) => data.submitApp),
        backgroundColor: "#f39321",
      },
      {
        label: "Declined",
        data: results?.map((data) => data.declineApp),
        backgroundColor: "#66dfa3",
      },
      {
        label: "Approved",
        data: results?.map((data) => data.approveApp),
        backgroundColor: "#fb7878",
      }),
      keyData.type === Type.Client && {
        label: "Total Client",
        data: results?.map((data) => data.count),
        backgroundColor: "#f39321",
      },
      keyData.type === Type.Revenue && {
        label: "Total Revenue",
        data: results?.map((data) => data.count),
        backgroundColor: "#66dfa3",
      },
    ],
  };
  const filterType = (e) => {
    setKeyData((prev) => {
      return { ...prev, type: e.target.value };
    });
  };
  const filterByType = (filter_type) => {
    setKeyData((prev) => {
      return { ...prev, filter_type };
    });
  };
  return (
    <>
      <div className="col-md-6 pr-0">
        <h2>Status</h2>
        <div className={`${styles.radioSec} mt-3`}>
          <div className={styles.radio}>
            <input
              type="radio"
              name="radio"
              value={Type.Application}
              onChange={filterType}
              checked={keyData.type === Type.Application}
            />
            <h6> Application </h6>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="radio"
              value={Type.Client}
              onChange={filterType}
              checked={keyData.type === Type.Client}
            />
            <h6> Client </h6>
          </div>
          <div className={styles.radio}>
            <input
              type="radio"
              name="radio"
              value={Type.Revenue}
              onChange={filterType}
              checked={keyData.type === Type.Revenue}
            />
            <h6> Revenue </h6>
          </div>
        </div>

        {keyData.type === Type.Application && (
          <div className={styles.graphColor}>
            <h6>
              <div className={`${styles.colorBox} ${styles.colorBox1}`}></div>
              Submitted
            </h6>
            <h6>
              <div className={`${styles.colorBox} ${styles.colorBox3}`}></div>
              Declined
            </h6>
            <h6>
              <div className={`${styles.colorBox} ${styles.colorBox2}`}></div>
              Approved
            </h6>
          </div>
        )}
        {keyData.type === Type.Client && (
          <div className={styles.graphColor}>
            <h6>
              <div className={`${styles.colorBox} ${styles.colorBox1}`}></div>
              Total Client
            </h6>
          </div>
        )}
        {keyData.type === Type.Revenue && (
          <div className={styles.graphColor}>
            <h6>
              <div className={`${styles.colorBox} ${styles.colorBox2}`}></div>
              Total Revenue
            </h6>
          </div>
        )}
      </div>
      <div className="col-md-6 px-0 text-right">
        <button
          onClick={() => filterByType(Filter_Type.Weekly)}
          className={
            Filter_Type.Weekly === keyData.filter_type && styles.active
          }
        >
          Week
        </button>
        <button
          onClick={() => filterByType(Filter_Type.Monthly)}
          className={
            Filter_Type.Monthly === keyData.filter_type && styles.active
          }
        >
          Month
        </button>
        <button
          onClick={() => filterByType(Filter_Type.Annualy)}
          className={
            Filter_Type.Annualy === keyData.filter_type && styles.active
          }
        >
          Annual
        </button>
      </div>
      <div className="col-md-12">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};
export default BarSec;
