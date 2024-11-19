import TextBlockProps from "@/utils/interfaces/text-block"
const textRightmediumBlock:React.FC<TextBlockProps> = ({title, description}) => {
    return(
        <div className="flex flex-col gap-2">
        <h2 className="title-medium">{title}</h2>
        <p className="paragraph-medium-secondary">
          {description}
        </p>
      </div>
    )
}
export default textRightmediumBlock