import {AuthState} from './AuthContext';

type AuthAction =
  | {type: 'sigIn'}
  | {type: 'changeIcon'; payload: string}
  | {type: 'logOut'}
  | {type: 'changeUsername'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'sigIn':
      return {
        ...state,
        isLogin: true,
        username: 'no-username',
      };
    case 'changeIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logOut':
      return {
        ...state,
        isLogin: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'changeUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
