import { GetStaticProps } from 'next';
import Group from '@/components/Group';
import prisma from '../lib/prisma';
import { getGroups } from '@/lib/utils';

type HomeProps = {
  topics: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const topics = await prisma.topic.findMany({
    where: {
      snaps: {
        some: {
          id: { gt: 0 },
        },
      },
    },
    include: {
      snaps: { orderBy: { createdAt: 'desc' }, take: 1 },
      // users: { select: { user: true }, distinct: ['userId'] },
    },
  });

  return {
    props: {
      topics: JSON.stringify(
        topics.map((topic) => ({
          ...topic,
          image: topic.snaps[0].image,
        }))
      ),
    },
  };
};

const Home: React.FC<HomeProps> = ({ topics }) => {
  const groups: any[] = getGroups(JSON.parse(topics));
  return (
    <div className='flex flex-wrap -m-1 md:-m-2'>
      {groups.map((group, index) => (
        <Group
          key={group[0].image}
          groupId={group[0].image}
          data={group}
          reversed={index % 2 != 0}
        />
      ))}
    </div>
  );
};

export default Home;
