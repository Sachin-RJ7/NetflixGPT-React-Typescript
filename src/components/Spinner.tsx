import spinner from "../assets/svg/Spinner.svg";

const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center bg-slate-300 rounded-md">
      <div>
        <img src={spinner} alt="Loading..." className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Spinner;
