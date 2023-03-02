import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '@/screen/Home';
import Detail from '@/screen/Detail';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" />
        <Route element={<Detail />} path="/user/:username" />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
