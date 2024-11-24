import {Check} from "lucide-react"
interface SuccessProps{
    message: string;
}
const Success:React.FC<SuccessProps> =({message}) => {
    return(
        <div>
            <Check className="h-[1.2rem] w-[1.2rem] text-green-500" />
            <h4 className="title-xsmall">{message}</h4>
        </div>
    )
}
export default Success