import { useState,useEffect } from "react";
import LeftMenu from "../Components/LeftMenu";
import ChatDetails from "../Components/chatDetails";
import LoadingScreen from "./loadingScreen";
export default function WhatsApp()

{
    const [progress,setProgress] = useState(0);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const id = setTimeout(() => {
          if (progress >= 100) setLoading(false);
          else {
            const increment = Math.floor(Math.random() * (10 + 1)) + 7;
            setProgress(progress + increment);
          }
        }, 300);
     
        return () => clearTimeout(id);
      }, [progress]);

    return(
         <>
         {
             loading ? (<LoadingScreen progress={progress}/>):(
        
         <>
          <div className="w-screen h-screen overflow-hidden">
            <div className="flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen">
                <div className="bg-[#111a21] min-w-[340px] max-w-[500px w-100 h-100]">
                    <LeftMenu />
                </div>
                <div className="bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100">
                    <ChatDetails />
                </div>
            </div>

         </div>
         </>
            )
 }
        </>
    )
}