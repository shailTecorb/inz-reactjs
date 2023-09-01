import React from 'react';

import Select from 'react-select';

var OptionList = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', clearableValue: false },
    { value: 'three', label: 'three' },
    { value: 'four', label: 'four' },
    { value: 'five', label: 'five' },
];

const Datepicker = () => {



    return (
        <Select
        options={OptionList}
        isMulti={true}
    />
    )
}

export default Datepicker;