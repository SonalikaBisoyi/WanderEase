import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AllRoutes from './Components/AllRoutes';


function App() {
  return (
    <ChakraProvider>

        <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
