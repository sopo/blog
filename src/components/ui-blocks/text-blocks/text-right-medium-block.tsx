import TextBlockProps from "@/utils/interfaces/text-block"
const textRightmediumBlock:React.FC<TextBlockProps> = ({title, description}) => {
    return(
        <div>
        <h1 className="title-medium">{title}</h1>
        <p className="paragraph-medium-secondary">
          {description}
        </p>
      </div>
    )
}
export default textRightmediumBlock