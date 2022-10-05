import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../app/auth";
import { Container, Name } from "./UserMenu.styled";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <Name>Hello, {name}</Name>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </Container>
  );
}
