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

export const DetailsContainer = tw(motion.div)`
  w-full
  flex
  sm:flex-row
  flex-col
  flex-wrap
  gap-5
`;
