import {React, useEffect, useState, useRef} from "react";
import { ImFolderDownload } from "react-icons/im";
import { chatsData } from "../Data/message";
import WhatsAppChat from "./whatsAppChat";
export default function Chats(props) {
    const filterData = props.filter
    const chats = useRef('')
    useEffect (() => {
        const newChat = filterData ? (chatsData.filter((chat) => (
            chat.unreadMsgs))) : chatsData;
            chats.current= newChat
            
    },[filterData]);
    return (
        <div className="flex flex-col overflow-y-scroll cursor-pointer h-100">
              <div className="flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]">
                 <div className="flex justify-around items-center w-[150px] pl-5">
                  <span className="text-emerald-500 text-lg mr-5">
                    <ImFolderDownload />
                  </span>
                  <h3 className="font-medium m-auto text-white ">Archived</h3>
                </div> 
                <p className="text-emerald-500 text-xs font-light">7</p>
              </div>
              {chatsData && chatsData.map((item, i) => {
                return(
                    <WhatsAppChat
                    pp={item.pp}
                    contact={item.contact} 
                    msg={item.msg}
                    unreadMsgs={item.unreadMsgs}
                    time={item.time}
                    active={i === false}
                    />
                )
              })}
              </div>
    )
}