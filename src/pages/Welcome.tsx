import { HiMiniLanguage } from "react-icons/hi2";
import Logo from "../assets/logo.png";
import Button from "../components/Button";
import { WELCOME_BACKGROUND_IMAGE_URL } from "../config/constant";

const Welcome = () => {
  return (
    <div
      className={`relative w-full min-h-screen bg-[url('${WELCOME_BACKGROUND_IMAGE_URL}')] `}
    >
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between h-full">
        <div>
          <img className="w-44" src={Logo} alt="logo" />
        </div>
        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-2 px-4 py-2 border border-white rounded-md text-white bg-black">
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
          <Button text="Sign In" className="px-4 py-2" />
        </div>
      </div>
     
    </div>
  );
};

export default Welcome;
