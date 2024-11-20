import TextBlockProps from "@/utils/interfaces/text-block"
const textCenterSmallBlock:React.FC<TextBlockProps> = ({title, description}) => {
    return(
        <div className="flex flex-col gap-2 text-center">
        <h1 className="title-small">{title}</h1>
        <p className="paragraph-small-secondary">
          {description}
        </p>
      </div>
    )
}
export default textCenterSmallBlock