import React from 'react';
import backgroundBlur from '../assets/images/background-blur.svg';
import eventImage from '../assets/images/event-image-31e03c.png';

function AnnouncementCard() {
  return (
    <div className="w-full max-w-[1492px] h-auto min-h-[637.5px] bg-[#87CEEB] rounded-[20px] backdrop-blur-[10px] relative mt-[34.96px] overflow-hidden">
      {/* Background Blur Effect */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundBlur})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(21px)',
          opacity: 0.8
        }}
      />
      
      {/* Content Wrapper */}
      <div className="relative z-[1] flex flex-row justify-center items-center gap-[150px] p-[37px] h-full">
        {/* Text Content */}
        <div className="flex flex-col items-center gap-8 w-[704px]">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-['Lexend'] font-medium text-[58px] leading-[1.25em] tracking-[-0.58px] text-center text-black w-full min-h-[100px]">
              Aagaz 4.0
            </h2>
            <p className="font-['Poppins'] font-normal text-[24px] leading-[1.5em] text-white text-left w-full min-h-[336px]">
              Lorem ipsum dolor sit amet consectetur. Neque pellentesque vestibulum facilisis a. In convallis id viverra dignissim tincidunt quisque. Ullamcorper mi quis facilisis mauris id. Duis egestas dui dui nullam rutrum magna. Lorem ipsum dolor sit amet consectetur. Neque pellentesque vestibulum facilisis a. In convallis id viverra dignissim tincidunt quisque. Ullamcorper mi quis facilisis mauris id. Duis egestas dui dui nullam rutrum magna.
            </p>
          </div>
          <button className="w-[324px] h-[63px] bg-[#E644A3] border-2 border-[#E644A3] rounded-lg font-['Lexend'] font-normal text-[28px] leading-[1.25em] text-center text-white cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90">
            Register Now
          </button>
        </div>
        
        {/* Event Image */}
        <div className="w-[442px] h-[442px] relative">
          <img 
            src={eventImage} 
            alt="Aagaz 4.0" 
            className="w-full h-full object-cover rounded-[10px]"
            style={{
              filter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.75))',
              boxShadow: 'inset 0px 0px 10px 6px rgba(0, 0, 0, 0.5)'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AnnouncementCard;

