const userId = 4;

type CardProps = {
  cardId: string;
  name: string;
  users: any[];
  image: string;
};

const Card: React.FC<CardProps> = ({ cardId, name, users, image }) => {
  const isGrayscale = users
    ? users && !users.map((u) => u.user.id).includes(userId)
    : false;
  const usersToDisplay = users?.slice(0, 3);
  const usersLeft =
    users && usersToDisplay ? users?.length - usersToDisplay.length : 0;

  return (
    <figure
      className={`group relative transition-all duration-300 cursor-pointer filter hover:grayscale-0 ${
        isGrayscale ? 'grayscale' : 'grayscale-0'
      }`}
    >
      <img
        alt='gallery'
        className='block object-cover object-center w-full h-full rounded-lg'
        src={image}
        width={500}
        height={500}
      />
      <figcaption className='opacity-50 group-hover:opacity-[100%] transition-all duration-300 absolute px-4 text-lg text-white bottom-2'>
        <p>{name}</p>
      </figcaption>
      {users && (
        <div className='absolute bottom-2 right-2'>
          <div className='flex -space-x-2'>
            {usersToDisplay?.map(({ user }) => (
              <img
                key={`${cardId}-${user.id}`}
                src={`/${user.avatar}`}
                className='w-8 h-8 rounded-full dark:border-gray-800'
                alt=''
              />
            ))}
            {usersLeft > 0 && (
              <a
                className='flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-gray-700 rounded-full hover:bg-gray-600 dark:border-gray-800'
                href='#'
              >
                +5
              </a>
            )}
          </div>
        </div>
      )}
    </figure>
  );
};

export default Card;
