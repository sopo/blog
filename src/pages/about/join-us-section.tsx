import TextCenterMediumBlock from "@/components/ui-blocks/text-blocks/text-center-medium-block"
import { Button } from "@/components/ui/button"

const JoinUsSection:React.FC = () => {
    return(
        <div className="flex flex-col gap-4 items-center">
            <TextCenterMediumBlock title="join" description="desc"/>
            <Button variant="default">join</Button>
        </div>
    )
}
export default JoinUsSection