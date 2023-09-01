
import { Fragment, useEffect, useState } from 'react'
import Moment from 'moment'


export default function MonthlyData({ styles, taskList,nextDay,selected,weekDates }) {    //,setToday,today,setpreviousToday, previoustoday, setnextToday, nexttoday
    const dateFormat = (i, date) => {
        let formate = new Date(date)

        return formate.setDate(formate.getDate() - i)
    }
    const dateNextFormat = (i, date) => {
        let formate = new Date(date)

        return formate.setDate(formate.getDate() + i)
    }
    const [today, setToday] = useState(new Date())
    const [previoustoday, setpreviousToday] = useState(dateFormat(1, new Date()))
    const [nexttoday, setnextToday] = useState(dateNextFormat(1, new Date()))
    const [weekDate, setWeekDate] = useState({
        startOf: "",
        endOf: ""
    })
    const previouClick = () => {
        let set1 = (dateFormat(3, today))
        let set2 = (dateFormat(3, previoustoday))
        let set3 = (dateFormat(3, nexttoday))
        setToday(set1)
        setpreviousToday(set2)
        setnextToday(set3)
    }
    const nextClick = () => {
        let set1 = (dateNextFormat(3, today))
        let set2 = (dateNextFormat(3, previoustoday))
        let set3 = (dateNextFormat(3, nexttoday))

        setToday(set1)
        setpreviousToday(set2)
        setnextToday(set3)

    }
    useEffect(() => {
        // end day is the first day + 6 
        var monday = new Date(current.setDate(weekstart));
        var sunday = new Date(current.setDate(weekend));
        setWeekDate((prev) => {
            return {
                ...prev,
                startOf: monday,
                endOf: sunday
            }
        })
    }, [])

    var current = new Date;     // get current date    
    var weekstart = current.getDate() - current.getDay() + 1;
    var weekend = weekstart + 6;
    var i = 0;
    const handlenextweek = (type) => {
        if (type == "next") {
            nextDay(selected,Moment(weekDates.endDate).format())
          
        } else {
            nextDay("previousMonth",Moment(weekDates.endDate).format())
            
        }
    }

    return (
        <Fragment>
            <div className={styles.selectSection}>
                <div className="row">
                    <div className="col-1">
                        <button onClick={() => { previouClick(); handlenextweek("prev") }} className={styles.arrowBtn}>
                            <img src="/images/leftarrowgray.svg" />
                        </button>
                    </div>
                    {/* <div className="col-3">
                        <h4> {Moment(previoustoday).format('ddd, DD MMM YY')} </h4>
                    </div>
                    <div className="col-4">
                        <h4>  {Moment(today).format('ddd, DD MMM YY')}  </h4>
                    </div>
                    <div className="col-3">
                        <h4>{Moment(nexttoday).format('ddd, DD MMM YY')} </h4>
                    </div> */}
                    <div className="col-10">
                        <h4>  {Moment(weekDates?.startDate).format('DD MMM YY')} - {Moment(weekDates?.endDate).format('DD MMM YY')}</h4>
                    </div>
                    <div className="col-1">
                        <button onClick={() => { nextClick(); handlenextweek("next") }} className={styles.arrowBtn}>
                            <img src="/images/rightarrowgray.svg" />
                        </button>
                    </div>
                </div>
            </div>

            {/* --------------static design----------- */}
            <div className={styles.weeklySec}>
                <div className={styles.weekScrollSec}>

                    {
                        taskList?.slice(0)
                            .reverse()?.map((data, index) => {
                                let { _id, messages } = data;

                                let renderMessage = messages?.map((msgData, index) => {
                                    let { description, tittle, startTime, dueTime } = msgData
                                    if (index % 2 !== 0) {
                                        return (
                                            <>
                                                <div  className={`${styles.box} ${styles.voice}`}>
                                                    <h5> {tittle} </h5>
                                                    <h6>{description}</h6>
                                                    <p>{startTime + " to " + dueTime} </p>
                                                </div>

                                            </>

                                        )
                                    }
                                    else {
                                       return <div  className={`${styles.box} ${styles.work}`}>
                                            <h5> {tittle} </h5>
                                            <h6>{description}</h6>
                                            <p>{startTime + " to " + dueTime} </p>
                                        </div>
                                    }
                                })
                                return (
                                    <div className={styles.lisItems}>
                                        <div className={styles.daySec}><h4>{Moment(_id).format('DD')} </h4></div>
                                        <div className={styles.whiteSec}>
                                            {renderMessage}
                                            {/* <div className={`${styles.box} ${styles.voice}`}>
                                                <h5> 1 day </h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.work}`}>
                                                <h5>19: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.video}`}>
                                                <h5>20: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.telephonic}`}>
                                                <h5>Interview: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div> */}
                                        </div>
                                    </div>
                                )
                            })
                    }

                    {/* <div className={styles.lisItems}>
                        <div className={styles.daySec}><h4>Tue</h4></div>
                        <div className={styles.whiteSec}>
                            <div className={`${styles.box} ${styles.voice}`}>
                                <h5> 1 day </h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.work}`}>
                                <h5>19: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.video}`}>
                                <h5>20: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.telephonic}`}>
                                <h5>Interview: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lisItems}>
                        <div className={styles.daySec}><h4>Wed</h4></div>
                        <div className={styles.whiteSec}>
                            <div className={`${styles.box} ${styles.voice}`}>
                                <h5> 1 day </h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.work}`}>
                                <h5>19: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.video}`}>
                                <h5>20: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.telephonic}`}>
                                <h5>Interview: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lisItems}>
                        <div className={styles.daySec}><h4>Thu</h4></div>
                        <div className={styles.whiteSec}>
                            <div className={`${styles.box} ${styles.voice}`}>
                                <h5> 1 day </h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.work}`}>
                                <h5>19: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.video}`}>
                                <h5>20: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.telephonic}`}>
                                <h5>Interview: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lisItems}>
                        <div className={styles.daySec}><h4>Fri</h4></div>
                        <div className={styles.whiteSec}>
                            <div className={`${styles.box} ${styles.voice}`}>
                                <h5> 1 day </h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.work}`}>
                                <h5>19: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.video}`}>
                                <h5>20: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.telephonic}`}>
                                <h5>Interview: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lisItems}>
                        <div className={styles.daySec}><h4>Sat</h4></div>
                        <div className={styles.whiteSec}>
                            <div className={`${styles.box} ${styles.voice}`}>
                                <h5> 1 day </h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.work}`}>
                                <h5>19: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.video}`}>
                                <h5>20: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.telephonic}`}>
                                <h5>Interview: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lisItems}>
                        <div className={styles.daySec}><h4>Sun</h4></div>
                        <div className={styles.whiteSec}>
                            <div className={`${styles.box} ${styles.voice}`}>
                                <h5> 1 day </h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.work}`}>
                                <h5>19: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.video}`}>
                                <h5>20: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                            <div className={`${styles.box} ${styles.telephonic}`}>
                                <h5>Interview: Voice</h5>
                                <h6>Rahman for Software Developer at SG North</h6>
                                <p>11:00 to 11:30</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* ----------------end static design-------------- */}
            {/* <div className={styles.weeklySec}>
                <div style={{ overflow: "scroll" }}>
                    <div className="row">

                        {
                            taskList?.map(item => {

                                if (new Date(item._id).toDateString() == new Date(previoustoday).toDateString()) {
                                    return <div className="col-md-4">

                                        <div className={styles.whiteSec}>
                                            <div className={`${styles.box} ${styles.voice}`}>
                                                <h5> 1 day </h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.work}`}>
                                                <h5>19: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.video}`}>
                                                <h5>20: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.telephonic}`}>
                                                <h5>Interview: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>

                                        </div>
                                    </div>
                                }

                                else if (new Date(item._id).toDateString() == new Date(today).toDateString()) {
                                    return item?.messages?.map(data => {
                                        console.log("HIt")

                                        return (
                                            <div className="col-md-4">

                                                <div className={styles.whiteSec}>
                                                    <div className={`${styles.box} ${styles.voice}`}>
                                                        <h5> {data?.tittle} </h5>
                                                        <h6>{data?.description}</h6>
                                                        <p>{data?.startTime + "to" + data?.dueTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                                else if (new Date(item._id).toDateString() == new Date(nexttoday).toDateString()) {
                                    return (<div className="col-md-4">

                                        <div className={styles.whiteSec}>
                                            <div className={`${styles.box} ${styles.voice}`}>
                                                <h5> 1 day </h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.work}`}>
                                                <h5>19: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.video}`}>
                                                <h5>20: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>
                                            <div className={`${styles.box} ${styles.telephonic}`}>
                                                <h5>Interview: Voice</h5>
                                                <h6>Rahman for Software Developer at SG North</h6>
                                                <p>11:00 to 11:30</p>
                                            </div>

                                        </div>
                                    </div>
                                    )
                                }
                                else {
                                    return (<div className="col-md-4">

                                        <div className={styles.whiteSec}>
                                            <div className={`${styles.box} ${styles.voice}`}>
                                                <h5> Not Availbale </h5>

                                            </div>


                                        </div>
                                    </div>
                                    )
                                }
                            })
                        }

                    </div>
                </div>
            </div> */}

        </Fragment>


    )
}
