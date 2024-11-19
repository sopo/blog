import { PropsWithChildren } from "react";

const LowLevelCardContainer: React.FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="rounded-xl w-full bg-surface-variant text-onSurfaceVariant p-6">
            {children}
        </div>
    )
}
export default LowLevelCardContainer