import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
const API_URL = import.meta.env.VITE_API_URL;

type User = {
  idUser: string;
  email: string;
  name: string;
  lastname: string;
  role: 'USER' | 'ADMIN';
} | null;

type AuthContextType = {
  user: User;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  renew: () => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [loading, setLoading] = useState<boolean>(true);

  // -----------------------------------------------------
  // LOGIN
  // -----------------------------------------------------
  const login = async (email: string, password: string): Promise<boolean> => {

    const resp = await fetch(`${API_URL}/api/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await resp.json();

    if (!data.ok) return false;

    const user = data.user;

    localStorage.setItem("token", data.token);
    setToken(data.token);
    setUser({
      idUser: user.id,
      email: user.email,
      lastname: user.lastname,
      name: user.name,
      role: user.role as "USER" | "ADMIN"
    });

    return true;
  };

  // -----------------------------------------------------
  // RENEW TOKEN
  // -----------------------------------------------------
  const renew = async (): Promise<boolean> => {
    if (!token) {
      setLoading(false);
      return false;
    }

    try {
      const resp = await fetch(`${API_URL}/api/auth/renew`, {
        method: "GET",
        headers: { "x-token": token }
      });

      const data = await resp.json();

      if (!data.ok) {
        logout();
        setLoading(false);
        return false;
      }

      const usuario = data.usuario[0];

      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser({
        idUser: usuario.idUser,
        email: usuario.email,
        name: usuario.name,
        lastname: usuario.lastname,
        role: usuario.role
      });

      setLoading(false);
      return true;
    } catch (error) {
      console.error('Error al renovar token:', error);
      setLoading(false);
      return false;
    }
  };

  // -----------------------------------------------------
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    renew();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, loading, login, renew, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
