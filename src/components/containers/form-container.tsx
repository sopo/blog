import { PropsWithChildren } from "react";
interface FormContainerProps extends PropsWithChildren {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const FormContainer:React.FC<FormContainerProps> = ({children, onSubmit}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4 p-6 pt-0">
            {children}
        </form>
    )
}
export default FormContainer