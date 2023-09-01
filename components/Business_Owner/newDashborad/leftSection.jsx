import { useEffect, useState } from "react";
import { convertToInternationalCurrencySystem } from "../../Auth/Common/methods";
import { businesOwnerDashboard } from "../../helpers/business_owner_service";
import BarSec from "./bar";

const LeftSection = ({ styles }) => {
  const [details, setDetails] = useState({
    // Idle Application
    allIdleApplication: 0,
    IdleAppPer: 0,

    // All clients
    allClient: 0,
    clientPer: 0,

    // All PPI's
    allPpi: 0,
    ppiPer: 0,

    // All complaints
    complaintsPer: 0,
    allComplaints: 0,

    // Revenue
    revenue: 0,
    revenuePer: 0,

    // Application  ** Percenatge Remaining **
    allApplication: 0, // Submitted
    allApplicationPer: 0,
    applicationApp: 0, // Approved
    applicationAppPer: 0,
    applicationDec: 0, // Declined
    applicationDecPer: 0,

    //  All Queries  ** Percenatge Remaining **
    allQueries: 0, // Total
    allQueriesPer: 0,
    queriesAns: 0, // Answered
    queriesAnsPer: 0,
    queriesUnAns: 0, // Unanswered
    queriesUnAnsPer: 0,

    // All Reviews
    allreview: 0,
    reviewPer: 0,
  });

  useEffect(() => {
    dashboarddetails();
  }, []);

  const dashboarddetails = async () => {
    const response = await businesOwnerDashboard();
    let data = { ...response.result };
    if (response.code === 200) {
      setDetails((prev) => {
        return { ...prev, ...data };
      });
    }
  };

  const checkNullabilty = (data, per) => {
    return data <= 0 ? (
      <h4>NIL</h4>
    ) : (
      <>
        <h4>
          {data}&nbsp;
          <span>{per}%</span>{" "}
          {per !== 0 && (
            <img
              src={per < 0 ? "/images/downarrow.svg" : "/images/uparrow.svg"}
            />
          )}
        </h4>
      </>
    );
  };
  return (
    <div className="col-lg-8 px-2 pt-5 custome_small_padding">
      <div className="row mx-2 custome_small_margin">
        <h3 className="col-md-12 custome_small_padding">Dashboard</h3>
        <div className="col-md-5 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box7}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/revenue.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>Revenue</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-5 pr-2">
                <h6>Total Revenue</h6>
                {/* <h4>${details.revenue}</h4> */}
                <h4>
                  {details.revenue === 0
                    ? "NIL"
                    : `${convertToInternationalCurrencySystem(
                        details.revenue
                      )}`}{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box8}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/allapplication.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>All Application</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 pr-2">
                <h6>Submitted</h6>
                {checkNullabilty(
                  details.allApplication,
                  details.allApplicationPer
                )}
              </div>
              <div className="col-4 px-2">
                <h6>Declined</h6>
                {checkNullabilty(
                  details.applicationApp,
                  details.applicationAppPer
                )}
              </div>
              <div className="col-4 px-2">
                <h6>Approved</h6>{" "}
                {checkNullabilty(
                  details.applicationDec,
                  details.applicationDecPer
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Queries Section */}
      <div className="row mx-2 custome_small_margin">
        <div className="col-md-7 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box9}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/allqueries.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>All Queries</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-4 pr-2">
                <h6>Total</h6>
                {checkNullabilty(details.allQueries, details.allQueriesPer)}
              </div>
              <div className="col-4 px-2">
                <h6>Answered</h6>
                {checkNullabilty(details.queriesAns, details.queriesAnsPer)}
              </div>
              <div className="col-4 px-2">
                <h6>Unanswered</h6>
                {checkNullabilty(details.queriesUnAns, details.queriesUnAnsPer)}
              </div>
            </div>
          </div>
        </div>

        {/* Idle Applications */}
        <div className="col-md-5 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box10}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/idleapplication.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>Idle Applications</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-5 pr-2">
                <h6>Applications</h6>
                {checkNullabilty(
                  details.allIdleApplication,
                  details.IdleAppPer
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* All Clients */}
      <div className="row mx-2 custome_small_margin">
        <div className="col-md-6 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box11}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/allclients.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>All Clients</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-5 pr-2">
                <h6>Total</h6>
                {checkNullabilty(details.allClient, details.clientPer)}
              </div>
            </div>
          </div>
        </div>
        {/* AIl PPI */}
        <div className="col-md-6 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box12}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/allppi.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>AIl PPI</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-5 pr-2">
                <h6>Received</h6>
                {checkNullabilty(details.allPpi, details.ppiPer)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-2 custome_small_margin">
        {/* All Complaints Section */}
        <div className="col-md-6 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box13}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/allreviews.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>All Reviews</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-5 pr-2">
                <h6>Reviews</h6>
                {checkNullabilty(details.allreview, details.reviewPer)}
              </div>
            </div>
          </div>
        </div>

        {/* All Complaints Section */}
        <div className="col-md-6 px-2 custome_small_padding">
          <div className={`${styles.DashboardBox} ${styles.Box14}`}>
            <div className="row">
              <div className="col-9 pr-0">
                <div className={styles.ImgSec}>
                  <img src="/images/dashboard/allcomplaints.svg" />
                </div>
                <div className={styles.contentSec}>
                  <h3>All Complaints</h3>
                </div>
              </div>
              <div className="col-3 pl-0 pr-1">
                <div className={styles.viewAllSec}>
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-5 pr-2">
                <h6>Received</h6>
                {checkNullabilty(details.allComplaints, details.complaintsPer)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-2 custome_small_margin">
        <div className={`col-12 px-2  custome_small_padding`}>
          <div className={`${styles.invoiceSection}`}>
            <div className="row">
              <BarSec styles={styles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSection;
