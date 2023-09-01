import React, { useRef, useState } from "react";
const IdContext = React.createContext();

const IdProvider = (props) => {
    const [contryId, setCountryId] = useState();
    const [visaId, setVisaId] = useState();
    const [Useremail, setEmail] = useState();
    const [StaffId,setStaffId] = useState()
    const [type,setTpe] = useState()
    const [UserName, setname] = useState();
    const [data,setData] = useState({
      email:"",
      phone:"",
      country:"",
      state:"",
      street:"",
      houseNo:""

    })
    return (
        <IdContext.Provider
            value={{
                contryId,
                setCountryId,
                visaId, setVisaId,
                Useremail, setEmail,
                StaffId,setStaffId,
                type,setTpe,
                UserName, setname,
                data,setData
            }}
        >
            {props.children}
        </IdContext.Provider>
    );
};


export { IdContext, IdProvider };
