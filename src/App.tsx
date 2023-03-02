import { BrowserRouter } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import AnimatedRoutes from './components/AnimatedRoutes';

const Container = tw.div`
  min-h-screen
  flex-1
  flex
  dark:bg-gray-900
  bg-gray-50
  text-white
  text-base
  p-8
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </Container>
  )
}

export default App
