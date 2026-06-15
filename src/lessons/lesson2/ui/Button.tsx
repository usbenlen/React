/** @format */

type ButtonProp = {
  text: string;
};

const Button = ({ text }: ButtonProp) => {
  return (
    <>
      <button className="bg-blue-300 w-1/6 m-4 rounded-sm hover:bg-blue-400">
        {text}
      </button>
    </>
  );
};

export default Button;
