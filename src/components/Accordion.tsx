import { useState } from "react";
import { AccordionType } from "../utils/types";
import { HiOutlineChevronDown } from "react-icons/hi";

const Accordion = ({ question, answer1, answer2 }: AccordionType) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="mb-2 md:mb-3">
      <div
        className="flex justify-between items-center bg-zinc-700 px-4 md:px-8 py-6 mb-[2px] cursor-pointer hover:bg-zinc-600 transition duration-150 linear"
        onClick={() => setShow((prev) => !prev)}
      >
        <strong className="text-xl md:text-2xl">{question}</strong>
        <span
          className={`text-xl text-white md:text-2xl icon ${
            show ? "rotate-up" : "rotate-down"
          }`}
        >
          <HiOutlineChevronDown />
        </span>
      </div>
      <div
        className={`${
          show ? "h-auto py-6 md:py-10 opacity-100" : "h-0 py-0 opacity-0"
        } bg-zinc-700 px-4 md:px-8 text-left text-lg md:text-xl transition-all duration-200 ease-in-out overflow-hidden`}
      >
        <p>{answer1}</p>
        {answer2 && <br />}
        {answer2 && <p>{answer2}</p>}
      </div>
    </div>
  );
};

export default Accordion;
