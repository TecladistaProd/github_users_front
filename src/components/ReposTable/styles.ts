import tw from "tailwind-styled-components";

export const Container = tw.div`
  relative
  overflow-x-auto
  shadow-md
  sm:rounded-lg
  h-fit
  max-w-full
  break-all
`;

export const Table = tw.table`
  w-full
  text-sm
  text-left
  text-gray-500
  dark:text-gray-400
`;

export const Thead = tw.thead`
  text-xs
  text-gray-700
  uppercase
  dark:text-gray-400
`;

export const Tr = tw.tr`
  border-b
  border-gray-300
  dark:border-gray-700
`;

export const ThEven = tw.th`
  px-6
  py-3
`;

export const ThOdd = tw(ThEven)`
  bg-gray-100
  dark:bg-gray-800
`;

export const ThB = tw.th`
  px-6
  py-4
  font-medium
  text-gray-900
  whitespace-nowrap
  bg-gray-100
  dark:text-white
  dark:bg-gray-800
`;

export const TdOdd = tw.td`
  px-6
  py-4
`;

export const TdEven = tw(TdOdd)`
  bg-gray-100
  dark:bg-gray-800
`;

export const Link = tw.a`
  relative
  after:content-{""}
  after:h-full
  after:absolute
  after:top-0
  after:left-0
  after:w-0
  after:transition-all
  after:duration-200
  after:border-b
  after:border-current
  hover:after:w-full
`;
