import { PropsWithChildren } from "react"

const ContainerGridCol3:React.FC<PropsWithChildren>=({children})=>{
    return(
        <div className="grid md:grid-cols-3 gap-6 items-center">
            {children}
        </div>
    )
}
export default ContainerGridCol3