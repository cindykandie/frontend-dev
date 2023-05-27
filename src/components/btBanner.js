import React from 'react';
import '@/globals.css'

const BtBanner = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-grey text-black py-2">
      <div className="container mx-auto flex justify-center items-center font-bold">
        <p>Built on Good Vibes by Cindy Kandie | Copyright {currentYear}</p>
      </div>
    </div>
  );
};

export default BtBanner;
