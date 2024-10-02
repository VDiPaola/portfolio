import React, { useEffect } from 'react';

//ROUTES
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";

import { useAppSelector, useAppDispatch } from './State/Hooks';
import { auth,unauth } from './State/Slices/AuthSlice';
import { login,logout } from './State/Slices/UserSlice';
import HomePage from './Pages/Landing/HomePage';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

const chakraConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ chakraConfig });

const Router = () => {
  const authState = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch();

  const unAuth = () => {
    dispatch(logout());
    dispatch(unauth());
  }

  return(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
        <Routes>
          {(authState.isAuthenticated && (
            <>
            <Route path="/" element={<HomePage/>}/>
            </>
          )) || (
            <>
              <Route path="*" element={<HomePage/>}/>
            </>
          )}
          
        </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default Router;