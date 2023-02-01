import { GetStaticProps } from 'next';
import SnapGroup from '@/components/SnapGroup';
import { groupSnaps } from '@/lib/utils';
import { prisma } from '@/lib/prisma';

type MyProps = {
  snaps: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const snaps = await prisma.snap.findMany({
    where: {
      authorId: {
        equals: 4,
      },
    },
  });

  return {
    props: { snaps: JSON.stringify(snaps) },
  };
};

const My: React.FC<MyProps> = ({ snaps }) => {
  const groups: any[] = groupSnaps(JSON.parse(snaps));
  return (
    <div className='flex flex-wrap -m-1 md:-m-2'>
      {groups.map((snaps, index) => (
        <SnapGroup
          key={`group-${index}`}
          snaps={snaps}
          reversed={index % 2 != 0}
        />
      ))}
    </div>
  );
};

export default My;
