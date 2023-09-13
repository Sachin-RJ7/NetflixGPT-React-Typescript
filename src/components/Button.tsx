type ButtonProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className }: ButtonProps) => {
  return <button className={`${className}  bg-red-600 text-white text-lg rounded-md hover:bg-red-700 transition duration-150 ease-in-out`}>{text}</button>;
};

export default Button;
