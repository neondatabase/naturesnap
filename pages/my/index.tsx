import Group from '@/components/Group';
import { data } from '@/data';

const newData = data.slice(0, 4).map((item) => ({ ...item, seen: true }));
const groups: any[] = [];
for (let i = 0; i < newData.length; i += 3) {
  const last_index = i + 3 >= newData.length ? newData.length : i + 3;
  console.log(last_index);
  groups.push(newData.slice(i, last_index));
}

export default function My() {
  return (
    <section className='overflow-hidden text-gray-700'>
      <div className='container px-5 py-2 mx-auto lg:pt-24 lg:px-32'>
        <div className='flex flex-wrap -m-1 md:-m-2'>
          {groups.map((data, index) => (
            <Group key={data[0].id} data={data} reversed={index % 2 != 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
