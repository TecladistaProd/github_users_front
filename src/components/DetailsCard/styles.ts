import tw from "tailwind-styled-components";

export const Container = tw.div`
  max-w-sm
  bg-white
  border
  border-gray-200
  rounded-lg
  shadow
  dark:bg-gray-800
  dark:border-gray-700
  p-3
  h-fit
`;

export const Avatar = tw.img`
  p-8
  rounded-full
  object-cover
  object-center
  w-full
`;

export const Infos = tw.div`
  px-5
  pb-5
`;

export const Name = tw.h5`
  text-2xl
  font-semibold
  tracking-tight
  text-gray-900
  dark:text-white
  mb-2
`;

export const Id = tw.h6`
  text-xl
  font-bold
  text-gray-900
  dark:text-white
  mb-2
`;

export const DateInfo = tw.span`
  text-lg
  font-semibold
  text-gray-900
  dark:text-white
  mb-2
`;
