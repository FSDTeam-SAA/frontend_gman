import Featured_Farms from '@/components/Featured_Farms';
import HeroSection from '@/components/Hero';
import Searchbar from '@/components/Searchbar';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div className="relative">
        <HeroSection />
        <div className="absolute w-full lg:max-w-5xl bottom-[-50px] left-[50%] translate-x-[-50%] right-0 z-10">
          <Searchbar />
        </div>
      </div>
      <Featured_Farms />
    </div>
  );
}

export default Page;
