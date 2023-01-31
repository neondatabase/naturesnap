// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

type Data = {
  snaps: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const snaps = await prisma.snap.findMany();
  res.status(200).json({ snaps: snaps });
}
