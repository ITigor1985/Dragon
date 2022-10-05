import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../app/auth";
import {
  BtnSubmit,
  Form,
  Label,
  MyInput,
} from "../../styles/components/Form/Form.styled";

export const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Имя
          <MyInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Почта
          <MyInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Пароль
          <MyInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <BtnSubmit type="submit">Зарегистрироваться</BtnSubmit>
      </Form>
    </div>
  );
};
