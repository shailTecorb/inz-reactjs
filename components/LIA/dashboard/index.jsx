import styles from "../../../styles/dashboard.module.scss"
import { useState, useEffect, useContext } from "react"
import { IdContext } from "../../MyContext/IdDetailsContext"
import { dashboard_count_services } from "../../helpers/lia_services"
import router from "next/router"
const Dashboard = () => {
    const { UserName } = useContext(IdContext)
    const [cases, setCases] = useState([])
    const [application, setApplication] = useState([])
    const [reviews, setreviews] = useState([])
    const [client, setClient] = useState([])
    const [ppi, setPpi] = useState([])
    const [complaints, setComplaints] = useState([])
    useEffect(() => {
        countSection()
    }, [])


    const countSection = async () => {
        const response = await dashboard_count_services()
        if (response.code == 200) {
            setCases(response.result?.case)
            setApplication(response.result?.application)
            setreviews(response.result.reviews)
            setClient(response.result.client)
            setPpi(response.result.ppi)
            setComplaints(response.result.complaints)
        }
    }
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.bannerImg}>
                <ul class={`${styles.breadcrumb} ${styles.breadcrumbClassic}`}>
                    <li>
                        <a >  Dashboard	</a>
                    </li>

                </ul>
                <h3>Have a Great Day, {UserName} <img src="/images/hand.svg" /></h3>
            </div>
            <div className="container-fluid">
                <div className="row mx-2">
                    <div className="col-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box1}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/cases.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>Cases</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            </div>
                            {
                                cases.map((item, index) => {
                                    return (
                                        <>
                                            <div className="row mt-4">
                                                <div className="col-4 pr-2">

                                                    <h6>Total</h6>
                                                    <h4>{item.totalcase} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                                </div>
                                                <div className="col-4 px-2">
                                                    <h6>Idle</h6>
                                                    <h4>{item.idleCase} <span>20%</span> <img src="/images/downarrow.svg" /></h4>
                                                </div>
                                                <div className="col-4 px-2">
                                                    <h6>Active</h6>
                                                    <h4>{item.activeCase} <span>20%</span> <img src="/images/uparrow.svg" /></h4>

                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="col-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box1}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/application.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>Application</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            </div>
                            {
                                application.map((item, index) => {
                                    return (
                                        <>
                                            <div className="row mt-4">
                                                <div className="col-4 pr-2">
                                                    <h6>Submited</h6>
                                                    <h4>{item.applicationSubmited} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                                </div>
                                                <div className="col-4 px-2">
                                                    <h6>Declined</h6>
                                                    <h4>{item.declineApplication}</h4>
                                                </div>
                                                <div className="col-4 px-2">
                                                    <h6>Approved</h6>
                                                    <h4>{item.approvedApplication} <span>20%</span> <img src="/images/uparrow.svg" /></h4>

                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="col-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box1}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/allqueries.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>Reviews</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            </div>
                            {
                                reviews.map((item) => {
                                    return (
                                        <div className="row mt-4">
                                            <div className="col-4 pr-2">
                                                <h6>Reviews</h6>
                                                <h4>{item.reviews} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className="row mx-2">
                    <div className="col-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box1}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/client.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>Clients</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0" >
                                    <div className={styles.viewAllSec}>
                                        <a style={{cursor:"pointer"}} onClick={()=>{router.push("/LIA/allClient")}}>View All</a>
                                    </div>
                                </div>
                            </div>
                            {
                                client?.map((item, index) => {
                                    return (
                                        <>
                                            <div className="row mt-4">
                                                <div className="col-4 pr-2">
                                                    <h6>Total</h6>
                                                    <h4>{item.allClient} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                                </div>
                                                <div className="col-4 px-2">
                                                    <h6>Active</h6>
                                                    <h4>{item.activeClient} <span>20%</span> <img src="/images/downarrow.svg" /></h4>
                                                </div>
                                                <div className="col-4 px-2">
                                                    <h6>Added</h6>
                                                    <h4>{item.clientAdded} <span>20%</span> <img src="/images/uparrow.svg" /></h4>

                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="col-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box1}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/ppi.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>PPIs</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            </div>
                            {
                                ppi.map((item) => {
                                    return (
                                        <>
                                            <div className="row mt-4">
                                                <div className="col-4 pr-2">
                                                    <h6>Received</h6>
                                                    <h4>{item.receivedPPi} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                                </div>
                                                <div className="col-4 px-2">
                                                    <h6>Dues</h6>
                                                    <h4>{item.duePPi} <span>20%</span> <img src="/images/downarrow.svg" /></h4>
                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="col-4 px-2">
                        <div className={`${styles.DashboardBox} ${styles.Box1}`}>
                            <div className="row">
                                <div className="col-9 pr-0">
                                    <div className={styles.ImgSec}>
                                        <img src="/images/complaints.svg" />
                                    </div>
                                    <div className={styles.contentSec}>
                                        <h3>Complaints</h3>
                                    </div>
                                </div>
                                <div className="col-3 pl-0">
                                    <div className={styles.viewAllSec}>
                                        <a >View All</a>
                                    </div>
                                </div>
                            </div>
                            {
                                complaints.map((item) => {
                                    return (
                                        <div className="row mt-4">
                                            <div className="col-4 pr-2">
                                                <h6>Received</h6>
                                                <h4>{item.allResolvedComplaints} <span>20%</span> <img src="/images/uparrow.svg" /></h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mx-2">
                    <div className={`col-12 `}>
                        <div className={`${styles.invoiceSection}`}>
                            <div className="row">
                                <div className="col-md-5">
                                    <h4>Invoice</h4>
                                    <div className={styles.graphSec}>
                                        <img src="/images/graph.png" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6>Invoices Raised</h6>
                                            <h5>340 <span>$1.5K</span></h5>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>Invoices Recieved</h6>
                                            <h5>340 <span>$1.5K</span></h5>
                                        </div>
                                        <div className="col-md-6">
                                            <h6>Invoices Overdue</h6>
                                            <h5>340 <span>$1.5K</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h2>Invoices</h2>
                                            <h3>(Cost vs Days)</h3>
                                        </div>
                                        <div className="col-md-8 px-0 text-right">
                                            <button className={styles.active}>Week</button>
                                            <button>Month</button>
                                            <div className={styles.graphColor}>
                                                <h6><div className={`${styles.colorBox} ${styles.colorBox1}`}></div>Raised</h6>
                                                <h6><div className={`${styles.colorBox} ${styles.colorBox2}`}></div>Cleared</h6>
                                                <h6><div className={`${styles.colorBox} ${styles.colorBox3}`}></div>Remaining</h6>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className={styles.linearGraph}>
                                                <img src="/images/linearGraph.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard