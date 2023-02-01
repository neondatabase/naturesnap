import prisma from '@prisma/client';

export type Item = {
  id: number;
  name: string;
  image: string;
  seen: boolean;
};

export type Snap = prisma.Snap & { users?: User[] };

export type Topic = prisma.Topic & {
  snaps: Snap[];
  users?: User[];
};

export type User = prisma.User;
