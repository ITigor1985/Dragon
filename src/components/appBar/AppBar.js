import { useSelector } from "react-redux";
import UserMenu from "../userMenu/UserMenu";
import { AuthNav } from "../authNav";
import { authSelectors } from "../../app/auth";
import { Navigation } from "../navigation";
import { AppBarHeader } from "./AppBar.styled";

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBarHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarHeader>
  );
};
