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
  dark:text-white
  text-gray-900
  mb-8
`;

export const DetailsContainer = tw(motion.div)`
  w-full
  flex
  lg:flex-row
  flex-col
  flex-wrap
  gap-5
  items-center
  lg:justify-start
  lg:items-start
`;
