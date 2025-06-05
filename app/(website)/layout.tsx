import React, { ReactNode } from 'react';

// Define types for the component props
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div >
     {children}
    </div>
  );
}

export default Layout;
