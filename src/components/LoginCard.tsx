import { useState, useRef } from "react";

import Button from "./Button";
import checkValidate from "../utils/validate";

type setShowCard = (value: boolean) => void;

type LoginCardProps = {
  showCard: boolean;
  setShowCard: setShowCard;
};

const LoginCard = ({ showCard, setShowCard }: LoginCardProps) => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleLoginClick(email, password) {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
  }

  function toggleSignInForm() {
    setIsSignInForm((prevState) => !prevState);
  }

  return (
    <div className="absolute w-full left-0 right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center ">
      <div className="max-w-[400px] p-12 bg-black bg-opacity-70 relative">
        <span
          onClick={() => setShowCard(!showCard)}
          className="absolute top-10 right-12 text-red-600 w-5 text-lg font-bold hover:text-red-500 transition duration-150 ease-in-out cursor-pointer "
        >
          X
        </span>
        <strong className="mt-6 text-white font-bold text-3xl flex">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </strong>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8">
          {isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Your name"
              className="w-full text-white text-lg outline-none focus:border-2 px-5 py-3 md:py-4 rounded-md bg-zinc-700 mb-6"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="w-full text-white text-lg outline-none focus:border-2 px-5 py-3 md:py-4 rounded-md bg-zinc-700 mb-6"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full text-white text-lg  outline-none focus:border-2 px-5 py-3 md:py-4 rounded-md bg-zinc-700 mb-6"
          />
          <Button
            text={isSignInForm ? "Sign Up" : "Sign In"}
            onclick={handleLoginClick}
            className="px-4 py-2 w-full"
          />
          <p onClick={toggleSignInForm} className="mt-6 text-left text-white">
            {isSignInForm ? "New here?" : "Already a member?"}{" "}
            <span className="text-red-500 cursor-pointer hover:text-red-400 font-medium transition duration-150 ease-in-out">
              {isSignInForm ? "Sign In" : "Sign Up now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
