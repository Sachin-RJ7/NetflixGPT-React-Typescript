import { useContext } from "react";
import { HiMiniLanguage } from "react-icons/hi2";

import Accordion from "../components/Accordion";
import Button from "../components/Button";
import { WELCOME_BACKGROUND_IMAGE_URL, accordion } from "../config/constant";
import { ShowCardContext } from "../context/ShowCardContext";
import LoginCard from "../components/LoginCard";

import Logo from "../assets/logo.png";
import TvFrame from "../assets/tv.png";
import StrangerThingsMobile from "../assets/stranger_things_mobile.jpg";

const Welcome = () => {
  const { showLoginCard, setShowLoginCard } = useContext(ShowCardContext);

  function toggleLoginCard() {
    setShowLoginCard(!showLoginCard);
  }

  const backgroundStyle = {
    backgroundImage: `url('${WELCOME_BACKGROUND_IMAGE_URL}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div
        style={backgroundStyle}
        className="relative w-full min-h-screen border-b-[15px] border-zinc-900"
      >
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
                className="cursor-pointer bg-black outline-none"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
            <div onClick={() => setShowLoginCard(!showLoginCard)}>
              <Button text="Sign In" className="px-3 md:px-4 py-[6px]" />
            </div>
          </div>
        </header>

        {!showLoginCard && (
          <div className="absolute w-full left-0 right-0 top-1/2 transform -translate-y-1/2 text-center z-10 px-3">
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Laughter. Tears. Thrills. Find it all on Netflix.
            </h1>
            <p className="text-white text-xl md:text-2xl mt-6">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-white text-xl md:text-2xl mt-4">
              Ready to watch? Click below to create or restart your membership.
            </p>
            {!showLoginCard && (
              <div className="flex items-center w-full justify-center mt-8">
                <div className="flex justify-center items-center bg-red-600 w-[200px] rounded-md hover:bg-red-700 transition duration-150 ease-in-out group">
                  <Button
                    text="Get Started"
                    onclick={toggleLoginCard}
                    className="w-full py-3 md:py-5 font-bold text-xl group-hover:bg-red-700"
                  />
                </div>
              </div>
            )}
          </div>
        )}
        {showLoginCard && (
          <LoginCard showCard={showLoginCard} setShowCard={setShowLoginCard} />
        )}
      </div>
      <section className="w-full bg-black border-b-[15px] border-zinc-900">
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
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[350px] md:w-[430px]"
                >
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
      <section className="w-full bg-black border-b-[15px] border-zinc-900">
        <div className="max-w-7xl mx-auto md:flex md:items-center md:justify-between gap-8 px-4 py-44">
          <div className="mb-20 md:mb-0">
            <img src={StrangerThingsMobile} alt="mobile" />
          </div>
          <div className="text-white text-center md:text-start">
            <h2 className="font-bold text-4xl">
              Download your shows to watch offline
            </h2>
            <p className="mt-6 text-xl md:text-2xl">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-black border-b-[15px] border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h3 className="text-white text-3xl md:text-5xl font-bold mb-12">
            Frequently Asked Questions
          </h3>
          <div className="text-white font-medium">
            {accordion &&
              accordion.map((items) => (
                <Accordion
                  key={items.id}
                  id={items.id}
                  question={items.question}
                  answer1={items.answer1}
                  answer2={items?.answer2}
                />
              ))}
          </div>
          <div className="mt-12">
            <p className="text-white text-xl md:text-2xl mt-4">
              Ready to watch? Click below to create or restart your membership.
            </p>
            <div className="flex w-full justify-center mt-8">
              <div
                onClick={toggleLoginCard}
                className="bg-red-600 w-[200px] rounded-md hover:bg-red-700 transition duration-150 ease-in-out cursor-pointer group"
              >
                <Button
                  text="Get Started"
                  className="w-full py-3 md:py-5 font-bold text-xl group-hover:bg-red-700  mr-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center h-full bg-black text-white py-12 px-6 sm:px-12">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-lg md:text-xl">
            &copy; Made with React <span className="text-orange-400"> ♥ </span>{" "}
            by <span className="text-orange-400">Sachin kumar</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Welcome;
