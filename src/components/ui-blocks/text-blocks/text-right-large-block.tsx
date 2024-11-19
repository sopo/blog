import TextBlockProps from "@/utils/interfaces/text-block"
const textRightLargeBlock:React.FC<TextBlockProps> = ({title, description}) => {
    return(
        <div className="flex flex-col gap-2">
        <h1 className="title-large">{title}</h1>
        <p className="paragraph-large-secondary">
          {description}
        </p>
      </div>
    )
}
export default textRightLargeBlock