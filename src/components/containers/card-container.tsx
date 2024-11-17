import { PropsWithChildren } from "react";

const CardContainer: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="mt-32 rounded-xl border dark:border-gray-800 bg-card shadow w-full max-w-md bg-white dark:bg-gray-900">
            {children}
        </div>
    )
}
export default CardContainer