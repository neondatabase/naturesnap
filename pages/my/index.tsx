import { GetStaticProps } from 'next';
import Group from '@/components/Group';
import { getGroups } from '@/lib/utils';

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
  const groups: any[] = getGroups(JSON.parse(snaps));
  return (
    <div className='flex flex-wrap -m-1 md:-m-2'>
      {groups.map((group, index) => (
        <Group
          key={`group-${index}`}
          groupId={`group-${index}`}
          data={group}
          reversed={index % 2 != 0}
        />
      ))}
    </div>
  );
};

export default My;
