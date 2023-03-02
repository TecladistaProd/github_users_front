import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '@/screen/Home';
import Details from '@/screen/Details';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/user/:username" />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
