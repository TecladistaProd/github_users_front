import { BrowserRouter } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import AnimatedRoutes from './components/AnimatedRoutes';

const Container = tw.div`
  min-h-screen
  flex-1
  flex
  bg-zinc-700
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
