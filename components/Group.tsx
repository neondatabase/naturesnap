import Card from './Card';

type GroupProps = {
  groupId: string;
  data: Array<any>;
  reversed?: boolean;
};

const Group: React.FC<GroupProps> = ({ groupId, data, reversed = false }) => {
  return (
    <div className='flex flex-wrap w-1/2'>
      {data.map((item, index) => (
        <div
          key={`${groupId}-${item.id}`}
          className={`${
            (index === 0 && reversed) || (index === 2 && !reversed)
              ? 'w-full'
              : 'w-1/2'
          } p-1 md:p-2`}
        >
          <Card cardId={`${groupId}-${item.id}`} {...item} />
        </div>
      ))}
    </div>
  );
};

export default Group;
