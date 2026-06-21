import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/users/usersOperations";

export const AuthForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    console.log(email, password);
    dispatch(registerUser({ email, password }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter email here" />
      <input
        type="password"
        name="password"
        placeholder="Enter password here"
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

