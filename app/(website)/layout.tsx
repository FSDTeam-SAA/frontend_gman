import { Footer } from '@/components/sheard/Footer';
import { Navbar } from '@/components/sheard/Navbar';
import Testimonial from '@/components/sheard/Testimonial';
import React, { ReactNode } from 'react';

// Define types for the component props
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div >
      <Navbar />
     {children}
     <Testimonial/>
     <Footer />
    </div>
  );
}

export default Layout;
