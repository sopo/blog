import { PropsWithChildren } from "react";

const Screen2Xl: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="max-w-screen-2xl mx-4 sm:mx-12 md:mx-16 2xl:mx-auto">
            {children}
        </div>
    )
}
export default Screen2Xl
