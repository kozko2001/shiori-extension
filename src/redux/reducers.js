import { combineReducers } from 'redux';

const initialLoginState = {
  basePath: '',
  error: null,
  loading: false,
  username: '',
  password: '',
  remember: true,
  token: '',
  state: 'NO_LOGGED',
};

const initialInsertBookmarkState = {
  url: '',
  title: '',
  state: 'PREPARING',
  error: null,
};

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case 'LOGIN_INFO_CHANGED':
      return Object.assign({}, state, {
        [action.key]: action.value,
      });
    case 'LOGIN_LOADING':
      return Object.assign({}, state, { state: 'LOADING' });
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        state: 'LOGGED',
        token: action.token,
      });
    case 'LOGIN_ERROR':
      return Object.assign({}, state, {
        state: 'LOGIN_ERROR',
        error: action.error,
      });
    default:
      return state;
  }
};

const insertBookmarkReducer = (state = initialInsertBookmarkState, action) => {
  switch (action.type) {
    case 'CHANGE_BOOKMARK':
      return Object.assign({}, state, {
        url: action.url,
        title: action.title,
      });
    case 'SEND_BOOKMARK_SUCCESS':
      return Object.assign({}, state, {
        state: 'SUCCESS',
      });
    case 'SEND_BOOKMARK_ERROR':
      return Object.assign({}, state, {
        state: 'PREPARE',
        error: action.error,
      });
    default:
      return state;
  }
};

export default combineReducers({
  login: loginReducer,
  bookmark: insertBookmarkReducer,
});
