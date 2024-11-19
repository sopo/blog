import TextBlockProps from "@/utils/interfaces/text-block"
const textCenterMediumBlock:React.FC<TextBlockProps> = ({title, description}) => {
    return(
        <div className="flex flex-col gap-2 text-center">
        <h1 className="title-medium">{title}</h1>
        <p className="paragraph-medium-secondary">
          {description}
        </p>
      </div>
    )
}
export default textCenterMediumBlock