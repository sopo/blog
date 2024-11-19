import TextBlockProps from "@/utils/interfaces/text-block"
const textCenterMediumBlock:React.FC<TextBlockProps> = ({title, description}) => {
    return(
        <div className="text-center">
        <h1 className="title-medium">{title}</h1>
        <p className="paragraph-medium-secondary">
          {description}
        </p>
      </div>
    )
}
export default textCenterMediumBlock