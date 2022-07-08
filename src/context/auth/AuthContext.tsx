import React, {useReducer} from 'react';
import {createContext} from 'react';
import {authReducer} from './AuthReducer';

//definiiir interface con la informacion que se dispondra
export interface AuthState {
  isLogin: boolean;
  username?: string;
  favoriteIcon?: string;
}

//state initial
export const authInitialState: AuthState = {
  isLogin: false,
  username: undefined,
  favoriteIcon: undefined,
};

//propiedades que el context proporcionara
export interface AuthContextProps {
  authState: AuthState;
  sigIn: () => void;
  logOut: () => void;
  changeFavoriteIcon: (iconname: string) => void;
  changeUserName: (username: string) => void;
}

//crear contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente provider del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const sigIn = () => {
    dispatch({type: 'sigIn'});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeFavoriteIcon = (iconname: string) => {
    dispatch({type: 'changeIcon', payload: iconname});
  };
  const changeUserName = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        sigIn: sigIn,
        logOut,
        changeFavoriteIcon,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
