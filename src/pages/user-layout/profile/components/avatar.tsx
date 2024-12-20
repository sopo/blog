import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
interface AvatarProps {
  avatar_url?: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar_url }) => {
  const avatar = useMemo(() => {
    return createAvatar(lorelei, {
      size: 32,
      // ... other options
    }).toDataUri();
  }, [avatar_url]);

  return (
    <img
      src={avatar_url ? avatar_url : avatar}
      alt="Avatar"
      className="rounded-full w-9 h-9"
    />
  );
};
export default Avatar;
