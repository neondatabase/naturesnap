import { Snap } from '@/types';
import SnapCard from '@/components/SnapCard';

type GroupProps = {
  snaps: Snap[];
  reversed?: boolean;
};

const SnapGroup: React.FC<GroupProps> = ({ snaps, reversed = false }) => {
  return (
    <div className='flex flex-wrap w-1/2'>
      {snaps.map((snap, index) => (
        <div
          key={`${snap.image}`}
          className={`${
            (index === 0 && reversed) || (index === 2 && !reversed)
              ? 'w-full'
              : 'w-1/2'
          } p-1 md:p-2`}
        >
          <SnapCard {...snap} />
        </div>
      ))}
    </div>
  );
};

export default SnapGroup;
