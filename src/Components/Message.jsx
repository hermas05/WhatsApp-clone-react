import React from 'react'

function Message(props) 
{
  return (
    <div className={`flex justify-center items-center rounded-md w-fit my-1
    ${props.sent? "bg-[#005c4b] ml-auto":"bg-[#202d33] mr-auto"}`}>
        {props.img ? (
            <div className='relative w-100 p-2'>
                <img src={props.img} alt="img-message" className='rounded-md max-w-[270px] w-100' />
                <p className='absolute right-2 -bottom-2.5 text-[#8796a1] text-[12px] min-w-[50px]'>{props.time}</p>
            </div>
        ):
        (
            <div className='flex justify-between items-end max-w-[410px] p-2'
            style={{wordBreak:"break-word"}}
            >
                {
                    props.isLink?(
                        <a
                        href={props.msg}
                        target='_blank'
                        className='text-[#53beec] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm underline hover:underline mr-2'
                        >
                            {props.msg}
                        </a>
                    ):
                    (
                        <p className='text-white text-sm mr-2'>{props.msg}</p>
                    )
                }
                <p className='mb-0  text-[#8796a1] text-[12px] min-w-[50px] '>{props.time}</p>
            </div>
        )
        }
    </div>
  );

}

export default Message