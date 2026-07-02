import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import {AuthForm} from "./components/AuthForm/AuthForm";
import BookPage from "./pages/BookPage/BookPage";
import {LoginForm} from "./components/LoginForm/LoginForm";
function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
      <Route path="/contacts" element={<BookPage />} />
      <Route path="/register" element={<AuthForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="/contacts" />} />
    </Routes>
  );
}

export default App;