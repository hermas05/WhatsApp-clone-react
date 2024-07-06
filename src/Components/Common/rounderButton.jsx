export default function RounderButton (props) {
    return(
    <button className="text-[#8796a1] text-xl p-2 rounded-full hover:bg-[#3c454c]" 
    onClick={props.onClick}>{props.icon}</button>
    )
}