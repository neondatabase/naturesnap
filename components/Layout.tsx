import React from 'react';
import Breadcrumb from './Breadcrumbs';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='container py-12 px-6 h-full mx-auto'>
        <section className='overflow-hidden text-gray-700'>
          <div className='container px-2 mx-auto lg:pt-18 lg:px-32'>
            <div className='py-8'>
              <Breadcrumb />
            </div>
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;
