import { useEffect, useRef, useState } from "react";
import { messagesData } from "../Data/message.jsx";
import RounderButton from "./Common/rounderButton.jsx"
import { MdSearch } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { cs1 ,cs2} from "../Asset/whatsapp.js";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import Message from "./Message.jsx";

export default function ChatDetails () {

    const [messages , setMessages] = useState(messagesData);
    const [typing, settyping] = useState(false);
    const inputRef=useRef(null);
    const BottomRef=useRef(null);

    const getTime=()=>{
        return new Date()
        .toLocaleString("en-US",{
            hour : "numeric",
            minute : "numeric",
            hour12 : true,
        })
        .toLocaleLowerCase();
    }


    const handleInput =()=>{
        inputRef.current.value.length===0?settyping(false):settyping(true);
    }

    const addmessages =(msg)=>{
        const newMessages=[...messages, msg];
        setMessages(newMessages);
    };

    const handlesubmit=()=>{
        if(inputRef.current.value.length>0)
        addmessages({
            msg : inputRef.current.value,
            time : getTime(),
            sent : true,
        });
        console.log(addmessages)
        settyping(false);
        inputRef.current.value="";
        inputRef.current.focus();
    };
     
    const handleImage =()=>{
        addmessages({
            img : cs1,
            time : getTime(),
            sent : true,
        });
    }


    const handleEnter=(event)=>{
        if (event.key === 'Enter') {
            handlesubmit();
        }
    };

    useEffect(()=>{
        BottomRef.current?.scrollIntoView({
            behavior:"smooth",
        });
    },[messages])

    const handleEmoji = ()=>{
        inputRef.current.value += "😊";
        inputRef.current.focus();
        settyping(true);
    };



    return(
       <div className="flex flex-col h-screen">
        <div className="flex justify-between bg-[#202d33] h-[60px] p-3">
            <div className="flex items-center">
                <img src={cs1} alt="profile" className="rounded-full w-[45px] h-[45px] mr-5" />
                <div className="flex flex-col mt-4 justify-start  ">
                    <h4 className="text-white font-medium pb-0 mb-0">Coding Spot</h4>
                    <p className="text-[#8796a1] text-xs ">online</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-[85px]">
                <RounderButton icon={<MdSearch />}/>
                <RounderButton icon={<HiDotsVertical />}/>
            </div>
        </div>
        <div className="h-100 bg-[#0a131a] overflow-y-scroll py-3  "
        style={{padding: "12px 7%"}}
        >
            {
                messages.map((msg)=>{
                    return(
                        <Message 
                        msg={msg.msg}
                        time={msg.time}
                        isLink={msg.isLink}
                        img={msg.img}
                        sent={msg.sent}
                        />
                    );
                })
            }
            <div ref={BottomRef}/>
        </div>
        <div className="flex items-center bg-[#202d33] w-100 h-[70px] p-2">
            <RounderButton icon={<BiHappy /> } onClick={handleEmoji}/>
            <span className="mr-2">
            <RounderButton icon={<AiOutlinePaperClip />} onClick={handleImage}/>
            </span>
            <input
              placeholder="Type a message"  
             type="text" 
             className="bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-[#8796a1]"
             ref={inputRef}
             onChange={()=>
                handleInput()
             }
             onKeyDown={handleEnter}
             />
             <span className="ml-2">
             {
                typing?<RounderButton icon={<MdSend />} onClick={handlesubmit}/>:<RounderButton icon={<BsMicFill />}/>
             }
             
             </span>
        </div>
       </div>
    )
}