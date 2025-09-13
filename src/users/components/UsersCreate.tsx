import { useState, type ChangeEvent, type FormEvent } from "react";
import { createUserService } from "../services/createUserService";

export function UsersCreate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleConfirmPassworChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    createUserService(data);
    console.log("Payload: ", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password: </label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPassworChange}
        />
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
