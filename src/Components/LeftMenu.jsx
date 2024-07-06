import {React, useState} from "react";
import RounderButton from "./Common/rounderButton";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import ProfilePic from '../Asset/ProfilePic.png';
import Chats from "./chats";

export default function LeftMenu() {
    const [filter, setFilter] = useState(false);
    return (
        <div className="flex flex-col border-r border-neutral-700 w-100 h-screen">
            <div className="flex justify-between items-center bg-[#202d33] h-[60px] p-3">
                <img src={ProfilePic} alt='profilePic' className="rounded-full w-[40px]" />
                <div className="flex justify-between w-[175px]">
                    <RounderButton icon={<MdPeopleAlt />} />
                    <RounderButton icon={<TbCircleDashed />} />
                    <RounderButton icon={<BsFillChatLeftTextFill />} />
                    <RounderButton icon={<HiDotsVertical />} />
                </div>
            </div>
            <div className="flex justify-between items-center p-2 h-[60px]">
                <input type="text" placeholder="Search or start a new chat" className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light" />
                <button
                    className={`text-2xl m-2 p-1 rounded-full ${filter
                            ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
                            : "text-[#8796a1] hover:bg-[#3c454c]"
                        }`}
                    onClick={() => setFilter(!filter)}
                >
                    <BiFilter />
                </button>
            </div>
            <Chats filter={filter}/>
        </div>
    )
}