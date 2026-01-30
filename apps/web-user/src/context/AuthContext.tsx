'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  name: string;
  avatar: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const authStatus = localStorage.getItem('isLoggedIn') === 'true';
    if (authStatus) {
      setIsLoggedIn(true);
      setUser({
        name: 'Thanh Tùng Hoàng',
        avatar: 'https://i.pravatar.cc/100?img=12'
      });
    }
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setUser({
      name: 'Thanh Tùng Hoàng',
      avatar: 'https://i.pravatar.cc/100?img=12'
    });
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
