import TextBlockProps from "@/utils/interfaces/text-block"
const textCenterLargeBlock:React.FC<TextBlockProps> = ({title, description}) => {
    return(
        <div className="flex flex-col gap-2 text-center">
        <h1 className="title-large">{title}</h1>
        <p className="paragraph-large-secondary">
          {description}
        </p>
      </div>
    )
}
export default textCenterLargeBlock