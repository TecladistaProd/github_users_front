import { BrowserRouter } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  container
  min-h-screen
  w-screen
  flex
  items-stretch
  justify-items-stretch
  bg-zinc-800
  text-white
  text-base
  overflow-hidden
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
      </BrowserRouter>
    </Container>
  )
}

export default App
