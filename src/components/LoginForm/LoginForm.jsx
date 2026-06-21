import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/users/usersOperations";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    console.log(email, password);
    dispatch(loginUser({ email, password }));
    form.reset();
  };

  return (
    <>
    <h1> Login</h1>
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter email here" />
      <input
        type="password"
        name="password"
        placeholder="Enter password here"
      />
      <button type="submit">Register</button>
    </form></>
  );
};

