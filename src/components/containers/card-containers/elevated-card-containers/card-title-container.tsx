import { PropsWithChildren } from "react";

const CardTitleContainer: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="flex flex-col space-y-1.5 p-6">
            {children}
        </div>
    )
}
export default CardTitleContainer