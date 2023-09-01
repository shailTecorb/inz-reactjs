import { Fragment, useState } from 'react'
import Moment from 'moment'
export default function InCrementDate({ styles,previousDay,nextDay }) {
    const dateFormat = (i, date) => {
        let formate = new Date(date)

        return formate.setDate(formate.getDate() - i)
    }
    const dateNextFormat = (i, date) => {
        let formate = new Date(date)

        return formate.setDate(formate.getDate() + i)
    }
    const [today, setToday] = useState(new Date())
    const [count, setCount] = useState(1)


    const previouClick = () => {
        let set = (dateFormat(1, today))
        setToday(set)
        previousDay("today",Moment(set).format())
    }
    const nextClick = () => {
        setCount(count + 1)
        let set = (dateNextFormat(1, today))
        setToday(set)
        nextDay("today",Moment(set).format())
        

    }
    return (
        <Fragment>
            <div className={styles.selectSection}>
                <div className="row">
                    <div className="col-1">
                        <button onClick={()=>{previouClick();}} className={styles.arrowBtn}>
                            <img src="/images/leftarrowgray.svg" />
                        </button>
                    </div>
                    <div className="col-10">
                        <h4>{Moment(today).format('ddd, DD MMM YY')}</h4>
                    </div>
                    <div className="col-1">
                        <button onClick={()=>{nextClick(); }} className={styles.arrowBtn}>
                            <img src="/images/rightarrowgray.svg" />
                        </button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
