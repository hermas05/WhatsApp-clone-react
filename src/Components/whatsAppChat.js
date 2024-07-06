export default function WhatsAppChat (props) {
    return (
        <div className={`flex justify-between items-center w-100 h-[85px] cursor-pointer px-3 hover:bg-[#202d33] ${props.filter ? 'bg-[#202d33]' : ''}`}>
            <img src={props.pp} alt='profile_picture' className="rounded-full w-[50px] mr-5" />
            <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">

                <div className="flex flex-col justify-between text-white">
                    <h3 className="font-medium mb-1">{props.contact}</h3>
                    <p className={`text-sm ${!props.unreadMsgs ? "text-neutral-400" : ""}`}>{props.msg}</p>
                </div>
                <div className="flex flex-col justify-between items-end h-100 text-xs">
                    <p className="text-emerald-500 min-w-[55px]">{props.time}</p>
                    {props.unreadMsgs && (
                        <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px]">
                            <p className="text-emerald-900 mt-3">{props.unreadMsgs}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}