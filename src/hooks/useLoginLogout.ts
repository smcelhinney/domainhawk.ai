import { useAuth0 } from "@auth0/auth0-react";

export const useLoginLogout = () => {
  const { logout: _logout, loginWithRedirect: _login } = useAuth0();
  const logout = () => _logout().then(() => localStorage.clear());
  const login = () => _login();
  return { logout, login };
};
