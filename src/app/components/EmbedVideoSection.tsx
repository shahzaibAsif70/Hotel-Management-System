import Image from "next/image";

const EmbedVideoSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-40 pb-10">
      {/* Left Side Content */}
      <div className="md:w-[40%] space-y-6 flex flex-col items-start">
        <h1 className="heading-style">
          Everything you need <br /> is just a tap away
        </h1>
        <p className="paragraph-style">
          Customize your stay or connect with our digital <br /> concierge. The
          Sonder app puts you in control.
        </p>

        <div className="grid grid-cols-2 gap-20 pt-10">
          <div className="flex items-start gap-3">
            <div className="text-4xl">📋</div>
            <div>
              <div className="font-light text-[#0f2f2f]">Check in online</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-4xl">📱</div>
            <div>
              <div className="font-light text-[#0f2f2f]">
                Access your
                <br /> mobile key
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-4xl">💬</div>
            <div>
              <div className="font-light text-[#0f2f2f]">
                Chat with us
                <br /> 24/7
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-4xl">🕒</div>
            <div>
              <div className="font-light text-[#0f2f2f]">
                Choose your
                <br /> checkout time
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8 my-5">
          <button className="bg-black text-white rounded p-1 text-sm">
            Download on <br /> the App Store
          </button>
          <button className="bg-black text-white rounded p-1 text-sm">
            Get it on <br /> Google Play
          </button>
        </div>
      </div>

      <div className="w-[60%]">
        <div className="relative">
          <div className="max-h-[550pt] h-[550pt]">
            <Image
              src="https://images.sonder.com/image/upload/q_auto:eco,f_auto,w_890,c_fill//v1618420133/catalina/homepage/tech_value_props/tech_value_props_transparent.png"
              alt="Phone Frame"
              className="w-full h-full"
              width={300}
              height={300}
              unoptimized
              priority
            />
          </div>

          <div className="absolute top-[25px] w-full flex justify-center max-h-[530pt] h-[530pt]">
            <div className=" w-[42.7%] ml-5 rounded-t-3xl">
              <Image
                src="https://images.sonder.com/image/upload/c_fill,f_auto,q_auto:good,w_600/v1619456783/catalina/homepage/tech_value_props/tech-value-props-video-april-still.jpg"
                alt="Phone Frame"
                className="w-full h-full rounded-t-4xl"
                width={300}
                height={300}
                unoptimized
                priority
              />
            </div>
            {/* <div className="">
              <video
                width={340}
                height={360}
                // controls
                autoPlay
                loop
                muted
                className=""
              >
                <source
                  src="https://images.sonder.com/video/upload/v1743012702/sondercom/homepage/tech_value_props/tech-value-props-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmbedVideoSection;
