import React from 'react';
import TimezonePicker from 'react-timezone-picker';

const TimeZone = () => {
    return (
        <>
            <TimezonePicker onChange={console.log} />
        </>
    )
}
export default TimeZone