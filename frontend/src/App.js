import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AllRoutes from './Components/AllRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <ChakraProvider>

        <AllRoutes />
        <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
