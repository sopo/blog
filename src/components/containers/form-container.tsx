import { PropsWithChildren } from "react";

const FormContainer:React.FC<PropsWithChildren> = ({children}) => {
    return (
        <form className="space-y-4 p-6 pt-0">
            {children}
        </form>
    )
}
export default FormContainer