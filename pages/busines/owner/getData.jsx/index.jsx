
// import AddLiaStaff from "../../../../components/Business_Owner/add_lia_staff"
import dynamic from "next/dynamic";
import BusinessSideNavBar from "../../../../components/Header/Owner_Sidenavbar"
const AddLiaStaff = dynamic(()=>import("../../../../components/Business_Owner/get_lia_data"), {
  ssr: false
});

const ProfilePage = () =>{
    return(
        <>
        {/* <BusinessSideNavBar /> */}
      <AddLiaStaff />
        </>
    )
}
export default ProfilePage