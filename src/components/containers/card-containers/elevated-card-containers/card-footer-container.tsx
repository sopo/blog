import { PropsWithChildren } from "react";

const CardFooterContainer: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="items-center p-6 pt-0 flex justify-between w-auto">
            {children}
        </div>
    )
}
export default CardFooterContainer