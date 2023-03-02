import tw from "tailwind-styled-components";

export const Container = tw.div`
  max-w-sm
  p-6
  bg-white border
  border-gray-200
  rounded-lg
  shadow
  dark:bg-gray-800
  dark:border-gray-700
`;

export const Id = tw.h5`
  mb-2
  text-xl
  font-bold
  tracking-tight
  text-gray-900
  dark:text-white
`;

export const Login = tw.p`
  mb-3
  font-normal
  text-gray-700
  dark:text-gray-400
`;

export const Button = tw.a`
  inline-flex
  items-center
  px-3
  py-2
  text-sm
  font-medium
  text-center
  text-white
  bg-blue-700
  rounded-lg
  hover:bg-blue-800
  focus:ring-4
  focus:outline-none
  focus:ring-blue-300
  dark:bg-blue-600
  dark:hover:bg-blue-700
  dark:focus:ring-blue-800
  transition-all
`;
