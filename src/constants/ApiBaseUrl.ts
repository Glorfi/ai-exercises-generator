const { hostname } = window.location;

export const API_PATH = {
  BASE:
    hostname === 'localhost'
      ? 'http://localhost:5050/api'
      : 'someotherDOMAINtoconfigurelater',
  SIGN_UP: '/auth/signup',
};
