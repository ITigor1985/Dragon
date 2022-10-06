import React from "react";
import { NavigationLink } from "./Navigation.styled";

export const Navigation = () => (
  <nav>
    <NavigationLink to="/" exact activeClassName="active">
      Главная
    </NavigationLink>

    <NavigationLink to="/api/dragons/favorites" exact activeClassName="active">
      Избранное
    </NavigationLink>
  </nav>
);
