import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const Container = tw(motion.div)`
  container
  flex
  flex-col
`;

export const Title = tw.h1`
  text-2xl
  bold
  text-white
  mb-8
`;

export const UsersContent = tw.div`
  flex
  flex-row
  flex-wrap
  gap-4
  flex-1
  content-baseline
`;

export const ShowMoreBtn = tw.button`
  text-white
  bg-gradient-to-br
  from-purple-600
  to-blue-500
  hover:bg-gradient-to-bl
  outline-none
  active:opacity-60
  font-medium
  rounded-lg
  text-sm
  px-5
  py-2.5
  text-center
  mr-2
  mb-2
  transition-all
  duration-300
  max-w-fit
  mx-auto
  mt-6
`;
