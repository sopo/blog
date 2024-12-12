interface PersonListItemProps {
  name: string;
  proffesion: string;
  imgSrc: string;
}
const PersonListItem: React.FC<PersonListItemProps> = ({
  name,
  proffesion,
  imgSrc,
}) => {
  return (
    <li className="flex justify-between mb-4 gap-x-6 ">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="size-12 flex-none rounded-full bg-gray-300"
          src={imgSrc}
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-md/6 font-semibold text-gray-900 dark:text-gray-50">
            {name}
          </p>
          <p className="mt-1 truncate text-sm/5 text-gray-500">{proffesion}</p>
        </div>
      </div>
    </li>
  );
};
export default PersonListItem;
