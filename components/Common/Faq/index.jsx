import { Fragment,useState,useEffect } from "react"
import styles from "../../../styles/faq.module.scss"
import InputFiled from "../../Auth/Common/input_filed"
import {faq_for_all} from "../../helpers/business_owner_service"
import { useRouter } from 'next/router';
import InfiniteScroll from "react-infinite-scroll-component";
const Faq = () =>{

    const route = useRouter()
    const [search,setSearch] = useState()
    const [ role,setRole] = useState("")
    const [data,setData] = useState([])
    const [message,setMessage] = useState()
    const [pagination, setPagination] = useState({
        page: 1,
        per_page: 10,
        hashMore: true
    })
    useEffect(()=>{
        faqListing()
    },[role])

    const fetchMoreData = async () => {
        const res = await faq_for_all(pagination.page + 1, pagination.per_page)
        if (res.code === 200) {
            const newPosts = res.result;
            setData([...newPosts, ...data])
            if (res.result.length == 0) {
                setPagination((prev) => { return { ...prev, hashMore: false } })
            }
            else {
                setTimeout(() => {
                    setData(data.concat(newPosts))
                }, 1500);
            }
        }
    }
    const handlePageChanges = () => {
        setPagination((prev) => { return { ...prev, page: pagination.page + 1 } })
    }
    const faqListing = async() =>{
       const response = await faq_for_all(pagination.page,pagination.per_page,localStorage.role,search)
       if(response.code == 200){
           setData(response.result)
       }else{
        setMessage(response.message)
       }
    }

    let ListOfFaq = data?.map((li,index)=>{
        return(
            <div className={`panel panel-default ${styles.panelArea}`} key={index}>
            <div  className={`panel-heading  active ${styles.panelHeading}`} role="tab" id={`heading${index+1}`}>
                <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapseOne${index+1}`}
                        aria-expanded="true" aria-controls={`collapseOne${index+1}}`}>
                     {li.question}

                    </a>
                </h4>
            </div>
            <div  id={`collapseOne${index+1}`}
                className={`panel-collapse collapse `}
                role="tabpanel"
                aria-labelledby={`heading${index+1}`}>
                <div className={`panel-body ${styles.panelBody}`}>
                <p>{li.answer}</p>
                </div>
            </div>
        </div>
        )
        
    })
return(
<Fragment>
<div className={styles.contentWrapper}>
            <div className="container-fuild">
                <div className="row">
                <div className="col-md-9 m-auto">
                        <h3>FAQs and Support</h3>
                    <div className={styles.formArea}>
                    <section className={styles.FaqSection} >
                <div className="container">
                <div className="row">
                                    <div className="col-md-7">
                                        <div className={styles.searchSection}>
                                            <form>
                                                <div className="input-group">
                                                    <InputFiled type_name="text" placeholder_name="Search anything"
                                                        inputId="search" input_name="" onChange={(e)=>{setSearch(e.target.value)}} value={search} class_name="form-control" />
                                                    <div className="input-group-append">
                                                        <a className="btn btn-secondary" onClick={(e)=>{faqListing(e)}}>
                                                           <i className="fa fa-search"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                             
                                            </form>
                                        </div>
                                    </div>
                                </div>
                    <div className="row">
                    <div className={`col-12 ${styles.faqSec}`}>
                <div className={`panel-group ${styles.panelGroup}`} id="accordion" role="tablist" aria-multiselectable="true">
                                     <InfiniteScroll
                                            dataLength={data.length}
                                            next={() => { fetchMoreData(); handlePageChanges() }}
                                            hasMore={pagination.hashMore}
                                            endMessage={pagination.hashMore == false ? <h3></h3> : ""}
                                            
                                        >
                                        {ListOfFaq} 
                                        </InfiniteScroll>    
                   
                </div>
                <a style={{color:"blue",cursor:"pointer"}}  onClick={()=>{route.push("/Client/reportAnIssue")}}>Didn't got what you're looking for ? Report An Issue</a>
            </div>
                    </div>
                </div>
                {/* <span style={{color:"red"}}>{message}</span> */}
            </section>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </Fragment>
)
}
export default Faq