import React from 'react'
import Moment from 'react-moment'

const DateDetails = ({ date }) => {
    console.log(date)
    return (
        <>
        <Moment  format="DD/MM/yyyy">{date}</Moment>
       
        </>
    );
}
export default DateDetails;