import { HiMiniLanguage } from "react-icons/hi2";
import { RiArrowDropRightLine } from "react-icons/ri";

import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { WELCOME_BACKGROUND_IMAGE_URL } from "../config/constant";
import TvFrame from "../assets/tv.png";

const Welcome = () => {
  const backgroundStyle = {
    backgroundImage: `url('${WELCOME_BACKGROUND_IMAGE_URL}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div style={backgroundStyle} className="relative w-full min-h-screen">
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <header className="max-w-7xl mx-auto py-4 flex items-center justify-between h-full relative z-10 px-2">
          <div>
            <img className="w-28 md:w-44" src={Logo} alt="logo" />
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2 px-3 md:px-4 py-2 border border-white rounded-md text-white bg-black">
              <HiMiniLanguage />
              <select
                name="language"
                id="language"
                className="cursor-pointer bg-black"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
            <Button text="Sign In" className="px-3 md:px-4 py-[6px]" />
          </div>
        </header>
        {/* CENTERED TEXT */}
        <div className="absolute w-full left-0 right-0 top-1/2 transform -translate-y-1/2 text-center z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold ">
            Laughter. Tears. Thrills. Find it all on Netflix.
          </h1>
          <p className="text-white text-xl md:text-2xl mt-6">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white text-xl md:text-2xl mt-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="mt-4 flex flex-col md:flex-row justify-center items-center space-x-5 px-5">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-[350px] text-white text-lg border border-s-white outline-none focus:border-[3px] px-5 py-3 md:py-5 rounded-md bg-black inset-0 opacity-50 mb-6 md:mb-0"
            />
            <div className="flex justify-center items-center bg-red-600 w-[200px] rounded-md hover:bg-red-700 transition duration-150 ease-in-out group">
              <Button
                text="Get Started"
                className="py-3 md:py-5 font-bold text-xl group-hover:bg-red-700"
              />
              <RiArrowDropRightLine className="text-white text-4xl" />
            </div>
          </form>
        </div>
      </div>
      <section className="w-full bg-black border-b-[15px] border-zinc-700">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:justify-between gap-8 px-4 py-52 md:py-72">
          <div className="text-white text-center md:text-start">
            <h1 className="font-bold text-5xl">Enjoy on your TV</h1>
            <p className="mt-6 text-xl md:text-2xl">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="mb-52 md:mb-0">
            <div className="relative px-4 md:px-0 w-[450px] md:w-[600px]">
              <div className="absolute top-8 md:-top-52 bottom-0 z-40 ">
                <img src={TvFrame} alt="television" className="w-full" />
              </div>

              <div className="absolute top-24 md:-top-28 left-[74px] md:left-20 z-30">
                <video autoPlay muted loop playsInline className="w-[350px] md:w-[430px]">
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
