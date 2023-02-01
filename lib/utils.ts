import { Snap } from '@/types';

export function groupSnaps(snaps: Snap[]) {
  const groups: any[] = [];
  for (let i = 0; i < snaps.length; i += 3) {
    const last_index = i + 3 >= snaps.length ? snaps.length : i + 3;
    groups.push(snaps.slice(i, last_index));
  }
  return groups;
}
