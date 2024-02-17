const { hostname } = window.location;

export const API_PATH = {
  BASE:
    hostname === 'localhost'
      ? 'http://localhost:5050/api'
      : 'someotherDOMAINtoconfigurelater',
  SIGN_UP: '/auth/signup',
  SIGN_IN: '/auth/signin',
  CURRENT_USER: '/users/me',
  EXERCISES: '/exercises',
};
