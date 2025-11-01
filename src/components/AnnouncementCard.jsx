import React from 'react';
import backgroundBlur from '../assets/images/background-blur.svg';
import eventImage from '../assets/images/event-image-31e03c.png';

function AnnouncementCard() {
  return (
    <div className="w-[95vw] max-w-[1492px] min-h-[60vh] bg-[#87CEEB] rounded-[20px] backdrop-blur-[10px] relative mt-[35px] overflow-hidden mx-auto">
      {/* Background Blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundBlur})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(21px)',
          opacity: 0.8,
        }}
      />

      {/* Content */}
      <div className="relative z-[1] flex flex-row justify-between items-center gap-[4vw] p-[3vw] flex-wrap">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-[2vw] w-[50%] min-w-[300px]">
          <h2 className="font-['Lexend'] font-medium text-[4vw] leading-[1.25em] tracking-[-0.05em] text-black">
            Aagaz 4.0
          </h2>
          <p className="font-['Poppins'] font-normal text-[1.3vw] leading-[1.6em] text-white">
            Lorem ipsum dolor sit amet consectetur. Neque pellentesque vestibulum facilisis a.
            In convallis id viverra dignissim tincidunt quisque. Ullamcorper mi quis facilisis
            mauris id. Duis egestas dui dui nullam rutrum magna. Lorem ipsum dolor sit amet
            consectetur. Neque pellentesque vestibulum facilisis a. In convallis id viverra
            dignissim tincidunt quisque. Ullamcorper mi quis facilisis mauris id. Duis egestas dui
            dui nullam rutrum magna.
          </p>

          {/* Register Button */}
          <button
            className="
              w-[18vw] min-w-[150px] h-[4vw] min-h-[50px]
              rounded-lg border-2 border-[#E644A3]
              bg-[#E644A3] text-white text-[1.4vw] font-['Lexend']
              transition-all duration-300 ease-in-out
              hover:bg-white hover:text-[#E644A3] hover:shadow-[0_0_20px_#E644A3]
              active:scale-95
            "
          >
            Register Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center w-[40%] min-w-[250px]">
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
