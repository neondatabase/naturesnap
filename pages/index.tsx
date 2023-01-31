import { data } from '@/data';
import { GetStaticProps } from 'next';
import Group from '@/components/Group';
import prisma from '../lib/prisma';

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
    props: { topics: JSON.stringify(topics) },
  };
};

type HomeProps = {
  topics: string;
};

const Home: React.FC<HomeProps> = ({ topics }) => {
  const groups: any[] = getGroups(JSON.parse(topics));
  return (
    <div className='flex flex-wrap -m-1 md:-m-2'>
      {groups.map((data, index) => (
        <Group
          key={data[0].snaps[0].image}
          groupId={data[0].snaps[0].image}
          data={data}
          reversed={index % 2 != 0}
        />
      ))}
    </div>
  );
};

export default Home;

function getGroups(data: any[]) {
  const groups: any[] = [];
  for (let i = 0; i < data.length; i += 3) {
    const last_index = i + 3 >= data.length ? data.length : i + 3;
    groups.push(data.slice(i, last_index));
  }
  return groups;
}
