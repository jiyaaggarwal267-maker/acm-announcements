import React from 'react';
import AnnouncementCard from './components/AnnouncementCard';

function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-5">
      <div className="w-full max-w-[1492px] h-auto min-h-[765px] relative">
        {/* Title */}
        <h1 className="font-['Lexend'] font-medium text-[72px] leading-[1.25em] tracking-[-1.44px] text-center text-black w-full max-w-[589px] mx-auto relative z-[2] md:text-[56px] sm:text-[48px]">
          Announcements
        </h1>
        
        {/* Announcement Card */}
        <AnnouncementCard />
      </div>
    </div>
  );
}

export default App;

