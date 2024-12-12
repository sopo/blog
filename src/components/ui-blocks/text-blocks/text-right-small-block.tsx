import TextBlockProps from "@/utils/interfaces/text-block";
const textRightSmallBlock: React.FC<TextBlockProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="title-small">{title}</h1>
      <p className="paragraph-small-secondary">{description}</p>
    </div>
  );
};
export default textRightSmallBlock;
