import { login, insertBookmark } from '../services/shiori';
import { getCurrentUrl } from '../services/chrome';

const loginInfoChanged = (key, value) => ({
  type: 'LOGIN_INFO_CHANGED',
  key,
  value,
});

const loginSucced = token => ({
  type: 'LOGIN_SUCCESS',
  token,
});

const loginError = error => ({
  type: 'LOGIN_ERROR',
  error,
});

const loginStarted = () => async (dispatch, getState) => {
  dispatch({
    type: 'LOGIN_LOADING',
  });

  try {
    const state = getState().login;
    const { ok, token } = await login(
      state.username,
      state.password,
      state.remember,
      state.basePath,
    );

    if (ok) {
      dispatch(loginSucced(token));
    } else {
      dispatch(loginError(token));
    }
  } catch (e) {
    dispatch(loginError(e));
  }
};

const changeBookmark = (url, title) => ({
  type: 'CHANGE_BOOKMARK',
  url,
  title,
});

const initializeBookmark = () => async (dispatch) => {
  const { url, title } = await getCurrentUrl();
  dispatch(changeBookmark(url, title));
};

const insertBookmarkSuccess = () => ({
  type: 'SEND_BOOKMARK_SUCCESS',
});

const insertBookmarkError = error => ({
  type: 'SEND_BOOKMARK_ERROR',
  error,
});

const insertBookmarkAction = () => async (dispatch, getState) => {
  const state = getState();

  try {
    const { ok, error } = await insertBookmark(
      state.login.token,
      state.login.basePath,
      state.bookmark.url,
      state.bookmark.title,
    );

    if (ok) {
      dispatch(insertBookmarkSuccess());
    } else {
      dispatch(insertBookmarkError(error));
    }
  } catch (e) {
    dispatch(insertBookmarkError(e));
  }
};

export {
  loginInfoChanged, loginStarted,
  insertBookmarkAction, initializeBookmark, changeBookmark,
};
