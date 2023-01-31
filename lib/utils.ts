export function getGroups(data: any[]) {
  const groups: any[] = [];
  for (let i = 0; i < data.length; i += 3) {
    const last_index = i + 3 >= data.length ? data.length : i + 3;
    groups.push(data.slice(i, last_index));
  }
  return groups;
}
