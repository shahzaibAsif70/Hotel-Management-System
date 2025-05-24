import React from "react";

const VideoSection = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <video
        src="https://images.sonder.com/video/upload/ac_none/f_auto:video,q_auto/v1618348428/catalina/homepage/background-video.mp4"
        className="object-cover w-full h-full transition-opacity duration-1000"
        autoPlay
        muted
        loop
        playsInline
      />

      <div
        className="absolute inset-y-0 left-0 w-full"
        style={{
          background:
            "linear-gradient(89.6deg, #073937 16.07%, rgba(7, 57, 55, 0.2) 67.11%)",
        }}
      >
        <div className="p-10 ml-32 mt-32">
          <h1 className="text-5xl text-white mb-12 font-miller">
            A stay you can count on
          </h1>
          <p className="max-w-[480px] text-lg text-[#fffbf2] font-gtamerica">
            Every Sonder is unique and every stay is special. Our standard
            remains the same — designer details, keyless entry, fast, free WiFi,
            and 24/7 digital concierge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
