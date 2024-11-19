import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Twitter, Github, Users } from "lucide-react";
import TextRightMediumBlock from "@/components/ui-blocks/text-blocks/text-right-medium-block";

const AuthorInfoSection: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-8 mt-8">
          <Avatar className="size-24">
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-y-4">
            <TextRightMediumBlock title="Jane Doe" description="Tech enthusiast, software engineer, and avid blogger. Passionate about AI, web development, and the future of technology."/>

            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Twitter className="h-[1.2rem] w-[1.2rem] text-onSurfaceVariant" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-[1.2rem] w-[1.2rem] text-onSurfaceVariant" />
              </Button>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                <Users className="h-[1.2rem] w-[1.2rem] text-onSurfaceVariant" />
                <p className="paragraph-small-secondary">1234 Followers</p>
              </div>
              <div className="flex gap-1">
                <Users className="h-[1.2rem] w-[1.2rem] text-onSurfaceVariant" />
                <p className="paragraph-small-secondary">567 following</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default AuthorInfoSection;
