import React from "react";
import { AuthNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <AuthNavLink to="/register" exact activeClassName="active">
        Регистрация
      </AuthNavLink>
      <AuthNavLink to="/login" exact activeClassName="active">
        Логин
      </AuthNavLink>
    </div>
  );
};
