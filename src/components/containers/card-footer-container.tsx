import { PropsWithChildren } from "react";

const CardFooterContainer: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="items-center p-6 pt-0 flex justify-between">
            {children}
        </div>
    )
}
export default CardFooterContainer