import { ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Library from './../pages/Library/Library';
import Account from './../pages/Account/Account';

export const BaseRouter = (): ReactElement => {
  const loggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={loggedIn ? <Navigate replace to="/library" /> : <Navigate replace to="/account" />}
        />

        <Route
          path="library"
          element={<Library />}
        />

        <Route
          path="account"
          element={<Account />}
        />
      </Routes>
    </BrowserRouter>
  );
};