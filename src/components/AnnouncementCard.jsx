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
          opacity: 0.8,
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-[1] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[150px] p-5 lg:p-[37px] h-full">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[704px] text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-2 w-full">
            <h2 className="font-['Lexend'] font-medium text-[36px] sm:text-[44px] lg:text-[58px] leading-[1.25em] tracking-[-0.58px] text-black w-full">
              Aagaz 4.0
            </h2>
            <p className="font-['Poppins'] font-normal text-[16px] sm:text-[18px] lg:text-[24px] leading-[1.5em] text-white w-full">
              Lorem ipsum dolor sit amet consectetur. Neque pellentesque vestibulum facilisis a. In convallis id viverra dignissim tincidunt quisque. Ullamcorper mi quis facilisis mauris id. Duis egestas dui dui nullam rutrum magna. Lorem ipsum dolor sit amet consectetur. Neque pellentesque vestibulum facilisis a. In convallis id viverra dignissim tincidunt quisque. Ullamcorper mi quis facilisis mauris id. Duis egestas dui dui nullam rutrum magna.
            </p>
          </div>
          <button
  className="
    w-[324px] h-[63px] rounded-lg border-2 border-[#E644A3]
    bg-[#E644A3] text-white text-[28px] font-['Lexend'] font-normal
    transition-all duration-200 ease-in-out
    hover:bg-white hover:text-[#E644A3] hover:shadow-[0_0_20px_#E644A3]
    active:scale-95
    sm:w-[280px] sm:h-[56px] sm:text-[24px]
    max-sm:w-full max-sm:text-[20px]
  "
>
  Register Now
</button>


        </div>

        {/* Event Image */}
        <div className="relative flex items-center justify-center w-full max-w-[442px] h-auto rounded-[10px] overflow-hidden mt-6 lg:mt-0">
          <img
            src={eventImage}
            alt="Aagaz 4.0"
            className="w-full h-auto object-contain rounded-[10px]"
            style={{
              filter: 'drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.75))',
              boxShadow: 'inset 0px 0px 10px 6px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AnnouncementCard;
