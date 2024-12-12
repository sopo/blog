import { Link } from "react-router-dom";
import { badgeVariants } from "@/components/ui/badge";
import { PopularTagsArray } from "@/utils/interfaces/popular-tags";

interface TagBlockProps {
  content: PopularTagsArray;
  variant: "default" | "secondary" | "destructive" | "outline";
}

const TagBlock: React.FC<TagBlockProps> = ({ content, variant }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {content.map((tag, index) => {
        return (
          <Link key={index} to={tag} className={badgeVariants({ variant })}>
            {tag}
          </Link>
        );
      })}
    </div>
  );
};
export default TagBlock;
