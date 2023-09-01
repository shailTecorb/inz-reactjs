
// import AddLiaStaff from "../../../../components/Business_Owner/add_lia_staff"
import dynamic from "next/dynamic";
const AddLiaStaff = dynamic(()=>import("../../../../components/Business_Owner/add_lia_staff"), {
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