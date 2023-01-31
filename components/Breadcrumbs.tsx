import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const crumbs = useRouter()
    .route.split('/')
    .filter((crumb) => crumb)
    // construct the breadcrumb
    .map((crumb, index, array) => ({
      name: crumb,
      href: `/${array.slice(0, index + 1).join('/')}`,
    }));

  console.log(crumbs);
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <a
            href='/'
            className='inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-600'
          >
            <svg
              aria-hidden='true'
              className='w-4 h-4 mr-2'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
            </svg>
            Home
          </a>
        </li>
        <li>
          {crumbs.map(({ name, href }) => (
            <div key={href} className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-teal-600'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <a
                href={href}
                className='ml-1 text-sm font-medium text-teal-600 hover:text-teal-600'
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </a>
            </div>
          ))}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
