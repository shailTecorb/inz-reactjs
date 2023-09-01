import React, { useEffect, useState } from 'react';
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

        </div>
    );
}

const ActiveDays = ({ styles,activeDays, setAddData }) => {
    let array = [
        {
            name: "weekday",
            value: "Monday",
            checked: false,
        },
        {
            name: "weekday",
            value: "Tuesday",
            checked: false,
        },
        {
            name: "weekday",
            value: "Wednesday",
            checked: false,
        },
        {
            name: "weekday",
            value: "Thursday",
            checked: false,
        },
        {
            name: "weekday",
            value: "Friday",
            checked: false,
        }, {
            name: "weekday",
            value: "Saturday",
            checked: false,
        }, {
            name: "weekday",
            value: "Sunday",
            checked: false,
        },
    ]

    const [isAllSelected, setAllSelected] = useState(false)
    const [checkList, setCheckList] = useState(array)

useEffect(()=>{
    if(activeDays){
        let AllSelected = (array.findIndex((item) => item.checked === false) === -1) ;
        setAllSelected(AllSelected)
        activeDays.forEach((value, i) => {
            if(value == array[i].value) {
              array[i].checked = true;
            }
          });
          setCheckList(array)
    }
    console.log(array,activeDays)
},[])

    const onCheckBoxChange = (checkName, isChecked) => {
        let isAllChecked = (checkName === 'all' && isChecked);
        let isAllUnChecked = (checkName === 'all' && !isChecked);
        const checked = isChecked;
        console.log(isAllChecked)
        let data = checkList.filter((item) => item.checked == true).map(filterdata => (filterdata.value))
        setAddData((prev) => {
            return {
                ...prev,
                activeDay: data
            }
        })
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

export default ActiveDays









{/* <div className="col-md-3">
<div className={`form-group ${styles.fromGroup}`}>
    <div className={styles.CheckBox}>
        <input id="Monday" checkBox={checkBox.Monday}
            onChange={onChangeMonday} name="Monday" type="checkbox" />
        <label for="Monday" className={styles.checkboxLabel} style={{ color: "#0c101a" }}  >Monday</label>
    </div>
</div>
</div>
 <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="Client" checkBox={accessRights.Client}
                                                    onChange={onChangeClient} name="Client" type="checkbox" />
                                                <label for="Client" className={styles.checkboxLabel} style={{ color: "#0c101a" }}  >Client </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="ViewClients" checkBox={accessRights.ViewClients}
                                                    onChange={onChangeViewClients} name="ViewClients" type="checkbox" />
                                                <label for="ViewClients" className={styles.checkboxLabel} style={{ color: "#0c101a" }}>View Client</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="Reports" onChange={onChangeReports} checkBox={accessRights.Reports} name="Reports" type="checkbox" />
                                                <label for="Reports" className={styles.checkboxLabel} style={{ color: "#0c101a" }}>Reports</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="CreateStaff" onChange={onChangeCreateStaff} checkBox={accessRights.CreateStaff} name="CreateStaff" type="checkbox" />
                                                <label for="CreateStaff" className={styles.checkboxLabel} style={{ color: "#0c101a" }}>Create Staff</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="ClientFullProfile" onChange={onChangeClientFullProfile} checkBox={accessRights.ClientFullProfile} name="ClientFullProfile" type="checkbox" />
                                                <label for="ClientFullProfile" className={styles.checkboxLabel} style={{ color: "#0c101a" }}>Client (Full Profile) </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="ClientDoc" onChange={onChangeClientDoc} checkBox={accessRights.ClientDoc} name="ClientDoc" type="checkbox" />
                                                <label for="ClientDoc" className={styles.checkboxLabel} style={{ color: "#0c101a" }}>Clients (Docs)</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="ClientAggrement" onChange={onChangeClientAggrement} checkBox={accessRights.ClientAggrement} name="ClientAggrement" type="checkbox" />
                                                <label for="ClientAggrement" className={styles.checkboxLabel} style={{ color: "#0c101a" }}>Clients (Aggrement)</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={`form-group ${styles.fromGroup}`}>
                                            <div className={styles.CheckBox}>
                                                <input id="ClientVisa" onChange={onChangeClientVisa} checkBox={accessRights.ClientVisa} name="ClientVisa" type="checkbox" />
                                                <label for="ClientVisa" className={styles.checkboxLabel} style={{ color: "#0c101a" }}>Clients (Visa)</label>
                                            </div>
                                        </div>
                                    </div> */}