import React, { useState } from 'react';
function CheckBox({ name, value, styles, tick, onCheck }) {
    return (
        <>
            <div className="col-md-3">
                <div className={`form-group ${styles.fromGroup}`}>
                    <div className={styles.CheckBox}>
                        <input
                            name={name}
                            type="checkbox"
                            value={value}
                            checked={tick || false}
                            onChange={onCheck}
                            id={value}
                        />
                        <label for={value} className={styles.checkboxLabel} style={{ color: "#0c101a" }}  >{value}</label>

                    </div>
                </div>
            </div>

        </>
    );
}
const CheckedBox = (options) => {
    let tempParent = []

    let data = options.filter((item) => item.checked == true).map(filterdata => (filterdata.value))
    console.log(data, "data")

}

function CheckBoxList({ options, isCheckedAll, styles, onCheck }) {
    const checkBoxOptions = (
        <div className="checkbox-list">
            {options.map((option, index) => {
                return (
                    <>
                        <CheckBox styles={styles} key={index} name={option.name} value={option.value} tick={option.checked} onCheck={(e) => onCheck(option.value, e.target.checked)} />

                    </>
                );
            })}
        </div>
    );

    return (
        <div className="checkbox-list">
            <CheckBox name="select-all" styles={styles} value="ALL" tick={isCheckedAll} onCheck={(e) => onCheck('all', e.target.checked)} />
            {checkBoxOptions}
            <button onClick={(e) => { e.preventDefault(); CheckedBox(options) }}>Submit</button>

        </div>
    );
}

const AccessRights = ({ styles, setAddData }) => {
    let array = [
        {
            name: "access",
            value: "Client",
            checked: false,
        },
        {
            name: "access",
            value: "View Client",
            checked: false,
        },
        {
            name: "access",
            value: "Reports",
            checked: false,
        },
        {
            name: "access",
            value: "Create Staff",
            checked: false,
        },
        {
            name: "access",
            value: "Client (Full Profile)",
            checked: false,
        }, {
            name: "access",
            value: "Clients (Docs)",
            checked: false,
        }, {
            name: "access",
            value: "Clients (Aggrement)",
            checked: false,
        },{
            name: "access",
            value: "Clients (Visa)",
            checked: false,
        },
    ]

    const [isAllSelected, setAllSelected] = useState(false)
    const [checkList, setCheckList] = useState(array)




    const onCheckBoxChange = (checkName, isChecked) => {
        let isAllChecked = (checkName === 'all' && isChecked);
        let isAllUnChecked = (checkName === 'all' && !isChecked);
        const checked = isChecked;
        let data = checkList.filter((item) => item.checked == true).map(filterdata => (filterdata.value))
        // setAddData((prev) => {
        //     return {
        //         ...prev,
        //         activeDay: data
        //     }
        // })
        const List = checkList.map((city, index) => {
            if (isAllChecked || city.value === checkName) {
                return Object.assign({}, city, {
                    checked,
                });
            } else if (isAllUnChecked) {
                return Object.assign({}, city, {
                    checked: false,
                });
            }

            return city;
        });

        let AllSelected = (List.findIndex((item) => item.checked === false) === -1) || isAllChecked;
        setAllSelected(AllSelected)
        setCheckList(List)

    }

    return (<CheckBoxList styles={styles} options={checkList} isCheckedAll={isAllSelected} onCheck={onCheckBoxChange} />);
}

export default AccessRights