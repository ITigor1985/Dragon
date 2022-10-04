import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../app/auth";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hello, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
