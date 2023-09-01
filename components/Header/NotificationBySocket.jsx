
import React from 'react';
import { io } from 'socket.io-client';
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react"
import styles from "../../styles/header.module.scss"
import socketIOClient from "socket.io-client"
import PermissionNotification from '../Common/Modals/permission_to_view_lia';
let socket;
const NotificationBySocket = ({BoId}) => {
    const CON_PORT = "https://inz-visa.herokuapp.com/inzVisa";
    const [chat, setChat] = useState("")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        socket = io(CON_PORT)
    }, [CON_PORT])

    useEffect(() => {
        if(BoId){
            socket.emit("join_room", {BO: BoId }); 
            // chatHandler()
        }
    }, []);

    useEffect(() => {
        socket.on("chat_message1", function (payload) {
            // setChat({...chat, payload})
            if(payload){
                 setChat(payload.message)
                 setOpen(true)
            }
           
            console.log("heeeelooooo", payload)
        })
    }, [])
// console.log(chat,"chat")
// console.log(socket)
    return (
        <>
        <PermissionNotification
        open={open}
        setOpen={setOpen}
        setChat={setChat}
        />
        <div className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby="alertsDropdown">
        <h6 className="dropdown-header">New Alerts:</h6>
        <div className="dropdown-divider"></div>
        <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
            <div><span className="text-success">
                <strong>
                    <i className="fa fa-long-arrow-up fa-fw"></i>{chat}</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span></div>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
        <div><span className="text-danger">
                <strong>
                    <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span></div>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className={`dropdown-item ${styles.dropdownItem}`} href="#">
        <div><span className="text-success">
                <strong>
                    <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
            </span>
            <span className="small float-right text-muted">11:21 AM</span></div>
            <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div className="dropdown-divider"></div>
        <a className={`dropdown-message small ${styles.dropdownViewAll}`} href=""><h6>View all alerts</h6></a>
    </div>
    </>
    )
}

export default NotificationBySocket

