import AllClients from "../../../components/LIA/All_Clients"
import BusinessSideNavBar from "../../../components/Header/Owner_Sidenavbar"
import Header from '../../../components/Header/index';
import { useState, useEffect } from "react";
const All_Clients = () => {
  const [isLia, setIsLia] = useState(false)
  useEffect(() => {
    if (localStorage.role == "businessOwner") {
      setIsLia(false)
    } else {
      setIsLia(true)
    }
  }, [])
  return (
    <>
      {/* {!isLia ? < BusinessSideNavBar />
        : <Header />} */}
      <AllClients type="view"/>
    </>
  )
}
export default All_Clients