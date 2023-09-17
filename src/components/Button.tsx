type ButtonProps = {
  text: string;
  className?: string;
  onclick?: () => void;
};

const Button = ({ text, className, onclick }: ButtonProps) => {
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    if (onclick) {
      onclick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className}  bg-red-600 text-white text-lg rounded-md hover:bg-red-700 transition duration-150 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
