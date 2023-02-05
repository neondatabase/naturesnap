import type { GetServerSideProps } from 'next';
import SnapGroup from '@/components/SnapGroup';
import { prisma } from '@/lib/prisma';
import { groupSnaps } from '@/lib/utils';
import { Snap } from '@/types';

type HomeProps = {
  snaps: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
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
      users: { select: { user: true }, distinct: ['userId'] },
    },
  });

  const snaps = topics.map((topic) => ({
    id: topic.id,
    name: topic.name,
    image: topic.snaps[0].image,
    authorId: topic.snaps[0].authorId,
    topicId: topic.id,
    users: topic.users.map((u) => u.user),
  }));

  return {
    props: {
      snaps: JSON.stringify(snaps),
    },
  };
};

const Home: React.FC<HomeProps> = ({ snaps }) => {
  const snapGroups: Array<Snap[]> = groupSnaps(JSON.parse(snaps));
  return (
    <div className="flex flex-wrap -m-1 md:-m-2">
      {snapGroups.map((snaps, index) => (
        <SnapGroup
          key={`group-${index}`}
          snaps={snaps}
          reversed={index % 2 != 0}
        />
      ))}
    </div>
  );
};

export default Home;
