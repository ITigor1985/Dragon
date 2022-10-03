import { useSelector } from "react-redux";
import UserMenu from "../userMenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import { authSelectors } from "../../app/auth";
import Navigation from "../navigation/Navigation";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid white",
    marginBottom: "40px",
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
