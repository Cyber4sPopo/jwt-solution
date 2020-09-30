
export const tokenLocalStorageKey = 'token';

export const isLogin = () => !!localStorage.getItem(tokenLocalStorageKey);
export const logout = () => {
  localStorage.removeItem(tokenLocalStorageKey);
  window.location.href = '/'
}
export const login = (token) => {
  localStorage.setItem(tokenLocalStorageKey, token);
  window.location.href = '/'
};