import styles from "../../../styles/chat.module.scss"
import React from 'react';
import { io } from 'socket.io-client';
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react"
import { view_all_reports } from "../../helpers/business_owner_service"
import socketIOClient from "socket.io-client"
let socket;
const ChatHeading = () => {
    return (
        <div className="card-header msg_head">
            <div className="d-flex bd-highlight">
                <div className="user_info">
                    <span>ADMIN</span>
                    {/* <p>ACTIVE 2 HOURS AGO</p> */}
                    <h5>#| Not Able To Upload Documents</h5>
                </div>
            </div>
        </div>
    )
}

const AdminMessage = ({ chat }) => {
    return (
        <>
            {chat?.map((payload, i) => {
                return (
                    <>
                        <div className="d-flex justify-content-start mb-4">
                            <div className="msg_cotainer">
                                <div className={`${styles.chatHead} `}>

                                    <h6>Admin</h6>
                                    <p key={i}>{payload.message}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            {/* <div className="d-flex justify-content-start mb-4">
                <div className="msg_cotainer">
                    <div className={`${styles.chatHead} `}>
                        <h6>Admin</h6>
                        <div className={`${styles.smallimgDiv} ${styles.smallAdmin}`} >
                            <img className="img-fluid" src="/images/leftBanner1.png" />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}


const UserMessage = ({ messageList }) => {
    return (
        <>
            {messageList.map((msg) => {
                return (
                    <>
                        <div className="d-flex justify-content-end mb-4">
                            <div className="msg_cotainer_send msg_cotainer_send2">

                                <div className={`${styles.ClientChatHead} `}>
                                    {/* <h6>fullName</h6> */}
                                    <p >{msg}</p>
                                    <div className={styles.receiveArea}>
                                        <img src="/images/double-check_sel.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
            }

            {/* <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send msg_cotainer_send2">
                    <div className={`${styles.ClientChatHead} `}>
                        <h6>fullName</h6>
                        <div className={styles.smallimgDiv} >
                            <img className="img-fluid" src="/images/leftBanner1.png" />
                            <span className={styles.tick}><img src="/images/double-check_sel.svg" /></span>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}


const ChatSocket = () => {
    const CON_PORT = "https://inz-visa.herokuapp.com/inzVisa";
    const [message, setMessage] = useState([])
    const [messageList, setMessageList] = useState([])
    const [chat, setChat] = useState([])
    const [ticketId, setTicketId] = useState()
    const [reportId, setReportId] = useState()
    const [userId, setUserId] = useState()
    const [connectionErr, setConnectionErr] = useState("")
    const [status, setStatus] = useState("")
    const [createdBy, setCreatedBy] = useState()

    useEffect(() => {
        viewUsersDetails()
    }, [])
    const viewUsersDetails = async () => {
        const response = await view_all_reports(localStorage.reportId)
        if (response.code == 200) {
            setTicketId(response.result.ticketId)
            setReportId(response.result._id)
            setUserId(response.result.liaAgentId)
            setStatus(response.result.status)
            setCreatedBy(response.result.createdBy)
        }
    }

    useEffect(() => {
        socket = io(CON_PORT)
    }, [CON_PORT])

    useEffect(() => {
        if (socket.connected) {
            socket.emit("join_room", { room_id: localStorage.reportId });
        }
    }, []);
    useEffect(() => {
        if (socket.connected) {
            socket.on("chat_message", function (payload) {
                setChat([...chat, payload])
                // console.log("heeeelooooo",payload)
            })
        }

    }, [])


    //  console.log("rrrrrrrrrrrrrrr",reportId)
    //  console.log(chat)

    const chatHandler = async (e) => {
        e.preventDefault()
        if (socket.connected) {
            socket.emit("send_message", {
                userId: userId,
                date: new Date(),
                send_from: localStorage.role,
                send_to: "admin",
                room_id: reportId,
                reportId: reportId,
                message: message,
                date_now: new Date()
            })
            if (message) {
                setMessageList((data) => [...data, message])
                setMessage("");
            }
        } else {
            setConnectionErr("waiting for connection")
        }

    }
    // console.log(messageList)
    return (
        <div className="row mt-5 mx-0">
            <div className="col-md-7 m-auto">
                <div className={styles.chatArea}>
                    <div className="chat">
                        <div className="card">
                            <ChatHeading />
                            <div id="chatList" className={`card-body msg_card_body bodyHeight`}>
                                <AdminMessage
                                    chat={chat}
                                />

                                <UserMessage
                                    messageList={messageList} />
                            </div>
                            <form>
                                <div className={`card-footer `}>
                                    <div className={`${styles.FooterArea} pt-2`}>
                                        <div className="inputBoxChat">
                                            <div className="input-group">
                                                <input
                                                    type="text"
                                                    name="sentMessage"
                                                    className="form-control type_msg"
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    placeholder="Type a message..."
                                                    value={message}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.btnGroup}>
                                        </div>
                                        <div className={styles.attachmentBtn}>
                                            <button type="submit" onClick={chatHandler} >
                                                <img src="/images/send.svg" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatSocket
