import { Fragment, useEffect, useState } from "react";
import styles from "../../../styles/query.module.scss"
import { useRouter } from 'next/router';
import InputFiled from "../../Auth/Common/input_filed";
import { list_of_employers } from "../../helpers/employer_services";
import {businesTypeList,businesOwnerCountryList,admin_allCountry_list} from "../../helpers/business_owner_service";
import InfiniteScroll from "react-infinite-scroll-component";
const Employers = () => {
    const route = useRouter()
    const [allEmployee, setAllEmployee] = useState([])
    const [allBusinessType,setAllBusinessType] = useState([])
    const [allCountryList, setAllCountryList] = useState([])
    const [businessType , setBusinessType] = useState("")
    const [country, setCountry] = useState("")
    const [totalEmployer, setTotalEmployer] = useState(0)
    const [search, setSearch] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 10,
        hashMore: true
    })
    useEffect(()=>{
        getAllEmployersList()
        getAllBusinessType()
        getAllCountry()
    },[])
    /*********************************** GET ALL EMPLOYERS LIST **************************************************88 */
    const getAllEmployersList = async(page,per_page,search,businessType,country)=>{
        let data = {
            "page":page ? page : pagination.page,
            "perPage":per_page ? per_page : pagination.per_page,
            "search":search,
            "businessType":businessType,
            "countryId":country
        }
        const response = await list_of_employers(data)
        if(response.code == 200){
            setAllEmployee(response.result)
            setTotalEmployer(response.totalEmployers)
        }else{
            setErrorMsg(response.message)
            setAllEmployee([])
        }
    }
    //************************ GET ALL BUSINESS TYPE ************************************************* */
    
    const getAllBusinessType = async()=>{
        const response = await businesTypeList()
        if(response.code == 200){
            setAllBusinessType(response.result)
        }
    }
        //************************ GET ALL COUNTRY LIST ************************************************* */

    const getAllCountry = async() =>{
        const response = await admin_allCountry_list()
        if(response.code == 200){
            setAllCountryList(response.result)
        }
    }
        //************************ HANDLE COUNTRY LIST  ************************************************* */
        const handleCountry = (e) =>{
            if(e.target.value == "Select"){

            }else{
                setCountry(e.target.value)
                console.log(e.target.value)
                getAllEmployersList("1","",search,businessType,e.target.value)
            }
        }

      //************************ ON CHANGE BUSINESS TYPE ************************************************* */
    const handleBusinessType = (e) =>{
        if(e.target.value == "Select"){

        }else{
            setBusinessType(e.target.value)
            getAllEmployersList("1","",search,e.target.value,country)
        }
    }
        //************************ HANDLE SEARCH FUNCTION  ************************************************* */

    const handleSearch = (e) => {
        e.preventDefault()
        getAllEmployersList("1","",e.target.value,businessType,country)
        setSearch(e.target.value)
    }
    //*************************************** PAGINATION ******************************************** */
    const fetchMoreData = async () => {
        let data = {
            "page":pagination.page + 1,
            "perPage":pagination.per_page,
            "search":search,
            "businessType":businessType,
            "countryId":country
        }
        const res = await list_of_employers(data)
        if (res.code === 200) {
            const newPosts = res.result;
            if (res.result.length == 0) {
                setPagination((prev) => { return { ...prev, hashMore: false } })
            }
            else {
                setTimeout(() => {
                    setAllEmployee((prev) => {
                        return ([...prev, ...newPosts])
                    })
                }, 1500);
            }
        }
    }
    const handlePageChanges = () => {
        setPagination((prev) => { return { ...prev, page: pagination.page + 1 } })
    }

//************************************* LIST OF ALL EMPLOYER ************************************************************* */
  let employeeList =  allEmployee?.map((data, index) => {
        return (
            <tr key={index}>
                <td scope="row">{data.companyName } <br/> {data.NZBNumber}</td>
                <td>{data.businessType?.title} <br/> {data.gst}</td>
                <td>{data.email}<br/> {data.address}</td>
                <td> {data.ownerName} <br/> {data.mobileNumberCountryCode + " " + data.mobileNumber}</td>
                <td >
                     <button className={`${styles.Btn1} ${styles.BtnWithoutImg}`}>View</button>
                </td>
            </tr>
        )
    })
  return (
    <Fragment>
    <div className={styles.contentWrapper}>
        <div className="container-fuild">
            <div className="row">
                <div className="col-12">
                    <h3>Employers </h3> 
                </div>
                <div className={`col-12 ${styles.clientStatus}`}>
                    <ul>
                        <li>
                            Total Employers <span>{totalEmployer ? totalEmployer : "00" }</span>
                        </li>
                        <li>
                            <span style={{ color: "red" }}> {allEmployee.length == 0 ? errorMsg :""} </span>
                        </li>
                    </ul>
                </div>
                <div className="col-12">
                    <div className="row">
                                <div className="col-md-2 pl-0">
                                <div className="input-group">
                                    <select className="form-control" style={{minWidth:"100%"}} onChange={handleBusinessType}>
                                    <option value="Select" > BusinessType </option>
                                      {allBusinessType?.map((data,index)=><option value={data._id} key={index}> {data.title} </option>)}
                                    </select>
                                </div>
                                </div>
                                <div className="col-md-2 pl-0">
                                <div className="input-group">
                                    <select onChange={handleCountry} className="form-control" style={{minWidth:"100%"}}>
                                    <option value="Select"> Country </option>
                                       {allCountryList?.map((data,index)=> <option key={index} value={data._id}>{data.countryName} </option>)}
                                    </select>
                                </div>
                                </div>
                                    <div className="col-md-4 pl-0">
                                        <div className={styles.searchSection}>
                                            <form>
                                                <div className="input-group">
                                                    <InputFiled type_name="text" placeholder_name="Search by name, id"
                                                        inputId="" input_name="" class_name="form-control" value={search} onChange={handleSearch} />
                                                    <div className="input-group-append">
                                                        <a className="btn btn-secondary" >
                                                            <button onClick={(e) => { e.preventDefault() }}><i className="fa fa-search"></i></button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                        <div className={`col-sm-12 ${styles.buttonGroup}`}>
                            <button>+ Add </button>
                        </div>
                        {allEmployee.length == 0 ? <div className={styles.noDataSection}>
                            <div className={styles.staffImage}>
                                <img src="/images/nostaff.svg" />
                            </div>
                        </div> :
                        <div className={`col-12 ${styles.tableArea}`}>
                            <div className="table-responsive ">
                                <InfiniteScroll
                                    dataLength={allEmployee?.length}
                                    next={() => { fetchMoreData(); handlePageChanges() }}
                                    hasMore={pagination.hashMore}
                                    endMessage={pagination.hashMore == false ? <h3></h3> : ""}
                                >
                                    <table class="table table-striped">
                                        <thead >
                                            <tr>
                                                <th>Company Name <br/> NZBN </th>
                                                <th>Business Type <br/> GST</th>
                                                <th>Email <br/> Address </th>
                                                <th>FullName <br/>Mobile No.</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {employeeList}
                                        </tbody>
                                    </table>
                                </InfiniteScroll>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</Fragment>
  )
}

export default Employers