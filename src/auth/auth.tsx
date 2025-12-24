import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "auth:isLoggedIn";

type AuthState = {
  isLoggedIn: boolean;
  isHydrated: boolean;
};

type AuthContextValue = {
  auth: AuthState;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    isLoggedIn: false,
    isHydrated: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        setAuth({ isLoggedIn: raw === "1", isHydrated: true });
      } catch {
        setAuth({ isLoggedIn: false, isHydrated: true });
      }
    })();
  }, []);

  const login = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, "1");
    } finally {
      setAuth({ isLoggedIn: true, isHydrated: true });
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, "0");
    } finally {
      setAuth({ isLoggedIn: false, isHydrated: true });
    }
  };

  const value = useMemo<AuthContextValue>(
    () => ({ auth, login, logout }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
