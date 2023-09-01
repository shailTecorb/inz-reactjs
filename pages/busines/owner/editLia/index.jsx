import React from 'react'
import dynamic from "next/dynamic";
const EditLiaStaff = dynamic(()=>import("../../../../components/Business_Owner/edit_lia_staff"), {
  ssr: false
});

const EditStaff = () => {
  return (
    <div>
        <EditLiaStaff/>
    </div>
  )
}

export default EditStaff