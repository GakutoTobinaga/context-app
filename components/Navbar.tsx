'use client';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div className="fixed top-0 w-full bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <h1 className="text-lg font-bold">Welcome to the useContext sample</h1>
          <div>{isLoggedIn ? "ログイン" : "ログアウト"}
        <div>{isLoggedIn}</div>
        <button onClick={login}>ログイン</button>
        <button onClick={logout}>ログアウト</button>
        </div>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <p>こんにちは ガクトさん。</p>
              <button onClick={logout} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                ログアウト
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <p>ログインしていません。</p>
              <button onClick={login} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                ログイン
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
