export const INPUT_CHANGE = 'INPUT_CHANGE';
export const DISCONNECT_USER = 'DISCONNECT_USER';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const ALTERNATE_FORMS = 'ALTERNATE_FORMS';
export const SWITCH_FORMS_DISPLAY = 'SWITCH_FORMS_DISPLAY';
export const CHECK_AUTH = 'CHECK_AUTH';

// ============================ Action creators ============================
export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});

export const disconnectUser = () => ({
  type: DISCONNECT_USER,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const registerSubmit = () => ({
  type: REGISTER_SUBMIT,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});

export const alternateForms = () => ({
  type: ALTERNATE_FORMS,
});

export const switchFormsDisplay = () => ({
  type: SWITCH_FORMS_DISPLAY,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});
